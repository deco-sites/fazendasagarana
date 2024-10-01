import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

export interface Props {
  backgroundImage?: ImageWidget;
  /**
   * @format rich-text
   */
  smallText?: string;
  cta?: CTA[];
}

export default function HeroFullWidth({
  backgroundImage =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  smallText = "Welcome to our website",
  cta = [],
}: Props) {
  return (
    <div
      class="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center text-white">
        <p class="text-lg mb-4" dangerouslySetInnerHTML={{ __html: smallText }}>
        </p>
        <div class="flex justify-center space-x-4">
          {cta.map((button) => (
            <a key={button.id} href={button.href} class="btn btn-primary">
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
