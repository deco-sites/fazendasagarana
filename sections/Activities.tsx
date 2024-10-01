import { ImageWidget } from "apps/admin/widgets.ts";

interface Activity {
  icon?: ImageWidget;
  title?: string;
  description?: string;
}

interface Props {
  /**
   * @format rich-text
   */
  mainTitle?: string;
  activities?: Activity[];
}

export default function FarmActivities({
  mainTitle = "Our Daily Farm Activities",
  activities = [
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Sustainable Practices",
      description:
        "We implement eco-friendly farming techniques to preserve our environment.",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Water Conservation",
      description:
        "Our innovative irrigation systems help us save water and reduce waste.",
    },
    {
      icon:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Organic Produce",
      description:
        "We grow fresh, chemical-free fruits and vegetables for healthier living.",
    },
  ],
}: Props) {
  return (
    <div class="bg-green-50 py-12 px-4 w-full">
      <h2 class="text-3xl font-bold text-center text-green-800 mb-8">
        {mainTitle}
      </h2>
      <div class="flex flex-wrap justify-center gap-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            class="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div class="bg-white bg-opacity-50 rounded-lg p-6 hover:bg-opacity-75 transition-all duration-300 cursor-pointer">
              <img
                src={activity.icon}
                alt={activity.title}
                class="w-16 h-16 mx-auto mb-4"
              />
              <h3 class="text-xl font-semibold text-green-700 mb-2 text-center">
                {activity.title}
              </h3>
              <p class="text-gray-600 text-center">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
