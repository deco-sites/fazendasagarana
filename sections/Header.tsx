import Image from "apps/website/components/Image.tsx";
import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  /**
   * @description The name of the farm
   * @format rich-text
   */
  farmName?: string;
  navigation?: {
    links: {
      icon?: string;
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
  /**
   * @description Add a custom announcement to the top of the header
   */
  announcement?: HTMLWidget;
  /**
   * @format color-input
   */
  primaryColor?: string;
  /**
   * @format color-input
   */
  secondaryColor?: string;
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    alt: "Sagarana Farm Logo",
  },
  farmName = "Sagarana",
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "Our Products", url: "/products" },
      { label: "Farm Tours", url: "/tours" },
      { label: "About Us", url: "/about" },
      { label: "Contact", url: "/contact" },
    ],
    buttons: [
      { id: "shop-now", href: "/shop", text: "Shop Fresh", outline: false },
    ],
  },
  announcement,
  primaryColor = "#10B981",
  secondaryColor = "#065F46",
}: Nav) {
  return (
    <header className="bg-green-50 border-b-4" style={{ borderColor: secondaryColor }}>
      {announcement && (
        <div
          className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm text-center"
          dangerouslySetInnerHTML={{ __html: announcement }}
        />
      )}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src={logo.src || ""}
              width={80}
              height={80}
              alt={logo.alt}
              className="rounded-full"
            />
            <span
              className="ml-3 text-3xl font-bold"
              style={{ color: secondaryColor }}
              dangerouslySetInnerHTML={{ __html: farmName }}
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="hover:text-opacity-80 transition duration-300 border-b-2"
                style={{ color: secondaryColor, borderColor: primaryColor }}
              >
                {link.label}
              </a>
            ))}
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                className={`px-6 py-2 rounded-full text-white transition duration-300 ${item.outline
                    ? "border-2 hover:text-white"
                    : "text-white hover:opacity-80"
                  }`}
                style={{
                  backgroundColor: item.outline ? "transparent" : primaryColor,
                  borderColor: primaryColor,
                  color: item.outline ? primaryColor : "white",
                }}
              >
                {item?.text}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button style={{ color: secondaryColor }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}