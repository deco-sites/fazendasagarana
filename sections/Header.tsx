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
}: Nav) {
  return (
    <header className="bg-base-100 border-b-4 border-primary">
      {announcement && (
        <div
           className="bg-accent text-accent-content px-4 py-2 text-sm text-center"
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
              className="ml-3 text-3xl font-bold text-primary"
              dangerouslySetInnerHTML={{ __html: farmName }}
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="hover:text-opacity-80 transition duration-300 border-b-2 text-primary border-primary"
              >
                {link.label}
              </a>
            ))}
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href}
                className={`btn btn-primary ${item.outline
                                  ? "btn-outline"
                                  : ""
                  }`}
              >
                {item?.text}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}