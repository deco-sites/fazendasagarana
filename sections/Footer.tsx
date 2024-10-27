import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title?: string;
  description?: string;
  /** @format rich-text */
  instructions?: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter" | "Youtube";
  href: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  links = [
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
      ],
    },
    {
      title: "Column Two",
      items: [
        { label: "Link Six", href: "/" },
      ],
    },
    {
      title: "Column Three",
      items: [
        { label: "Link Eleven", href: "/" },
      ],
    },
  ],
  subscribe: _subscribe,
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = [
    { network: "Facebook", href: "" },
    { network: "Instagram", href: "" },
    { network: "X - Twitter", href: "" },
    { network: "Linkedin", href: "" },
    { network: "Youtube", href: "" },
  ],
}: Props) {
  return (
    <div class="w-full text-sm bg-base-100">
      <div class="flex flex-col gap-10 px-4 lg:px-8 py-8">
        <div class="flex flex-col gap-6 justify-between lg:flex-row">
          <div>
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
            />
          </div>
          <div class="flex gap-9">
            {links?.map((link) => (
              <div>
                <h4 class="font-semibold mb-4">{link.title}</h4>
                {link.items?.map((item) => (
                  <a
                    class="block hover:underline link no-underline py-1"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div class="border-base-300 border-t flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center py-4">
          <div class="flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
            <a
              href={madeWith?.href}
              class="flex items-center gap-2"
              target="_blank"
            >
              <span>{madeWith?.label}</span>
              <Image
                src={madeWith?.src || ""}
                width={100}
                height={28}
                alt={madeWith?.label}
              />
            </a>
            <span>{copyright}</span>
            <div class="flex gap-2 justify-between lg:gap-6">
              {bottomLinks?.map((item) => (
                <a class="link" href={item.href} target="_blank">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div class="flex gap-3">
            {social?.map((item) => (
              <a class="block" href={item.href} target="_blank">
                <Icon
                  id={item.network as AvailableIcons}
                  width={24}
                  height={25}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
