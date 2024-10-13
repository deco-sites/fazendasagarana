import { ImageWidget } from 'apps/admin/widgets.ts';
import { useSection } from "deco/hooks/useSection.ts";
import type { AppContext } from "../apps/site.ts";

interface Props {
  /**
   * @format rich-text
   */
  headerText?: string;
  /**
   * @format rich-text
   */
  footerText?: string;
  logo?: ImageWidget;
  [key: string]: any;
}

export async function action(
  props: Props,
  req: Request,
  ctx: AppContext
): Promise<Props> {
  const form = await req.formData();
  const month = form.get("month") as string;
  const day = form.get("day") as string;
  const value = parseFloat(form.get(`rain-${month}-${day}`) as string) || 0;

  const monthTotal = Array.from(form.entries())
    .filter(([key]) => key.startsWith(`rain-${month}-`))
    .reduce((sum, [_, val]) => sum + (parseFloat(val as string) || 0), 0);

  return {
    ...props,
    [`total-${month}`]: monthTotal.toFixed(1),
  };
}

export function loader(props: Props) {
  return props;
}

export default function RainRegistryTable(props: Props) {
  const {
    headerText = "Rain Registry",
      footerText = "© 2023 Weather Station",
      logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
  } = props
  const currentYear = new Date().getFullYear();
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

  const generateSectionUrl = (props: Props, otherProps: { href?: string } = {}) => {
    const sectionProps = {
      ...otherProps,
      props,
    };
    return useSection(sectionProps);
  };

  return (
    <div class="flex flex-col min-h-screen bg-gray-100">
      <header class="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <img src={logo} alt="Logo" class="h-10 w-auto" />
        <h1 class="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: headerText }} />
      </header>

      <main class="flex-grow p-6">
        <div class="overflow-x-auto bg-white rounded-lg shadow-lg">
          <form
            hx-post={generateSectionUrl(props)}
            hx-trigger="change"
            hx-target="closest section"
            hx-swap="innerHTML"
          >
            <table class="table table-compact w-full">
              <thead>
                <tr class="bg-gray-100">
                  <th class="px-3 py-2 text-left">Day</th>
                  {months.map(month => <th key={month} class="px-3 py-2 text-center">{month}</th>)}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                  <tr key={day} class="hover:bg-gray-50">
                    <td class="px-3 py-2 font-medium">{day}</td>
                    {months.map((month, monthIndex) => (
                      <td key={`${month}-${day}`} class="px-1 py-1">
                        {day <= daysInMonth(monthIndex, currentYear) ? (
                          <input
                            type="number"
                            name={`rain-${month}-${day}`}
                            class="input input-bordered input-sm w-full max-w-[70px] text-center"
                            min="0"
                            step="0.1"
                            hx-post={generateSectionUrl(props)}
                            hx-trigger="change"
                            hx-vals={JSON.stringify({ month, day })}
                          />
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr class="bg-gray-100 font-bold">
                  <th class="px-3 py-2 text-left">Total</th>
                  {months.map(month => (
                    <th key={`total-${month}`} id={`total-${month}`} class="px-3 py-2 text-center">
                      {props[`total-${month}`] || "0"}
                    </th>
                  ))}
                </tr>
              </tfoot>
            </table>
          </form>
        </div>
      </main>

      <footer class="bg-gray-200 p-4 text-center text-gray-600">
        <p dangerouslySetInnerHTML={{ __html: footerText }} />
      </footer>
    </div>
  );
}