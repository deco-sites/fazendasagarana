
import { ImageWidget } from 'apps/admin/widgets.ts';
import { BlogPost } from "apps/blog/types.ts";

interface Props {
  /**
   * @format rich-text
   */
  farmName?: string;
  /**
   * @format rich-text
   */
  aboutText?: string;
  /**
   * @format rich-text
   */
  activitiesText?: string;
  /**
   * @format rich-text
   */
  blogText?: string;
  /**
   * @format rich-text
   */
  loginText?: string;
  heroImage?: ImageWidget;
  /**
   * @format rich-text
   */
  heroText?: string;
  /**
   * @format rich-text
   */
  activitiesTitle?: string;
  farmActivities?: Array<{ name: string; link: string }>;
  /**
   * @format rich-text
   */
  blogTitle?: string;
  blogPosts?: BlogPost[] | undefined;
  /**
   * @format rich-text
   */
  footerContent?: string;
}

export default function FarmLayout({
  farmName = "Farm Name",
  aboutText = "About",
  activitiesText = "Atividades",
  blogText = "Blog",
  loginText = "Login",
  heroImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  heroText = "Welcome to our farm",
  activitiesTitle = "Farm Activities",
  farmActivities = [
    { name: "Activity 1", link: "/activity1" },
    { name: "Activity 2", link: "/activity2" },
    { name: "Activity 3", link: "/activity3" },
  ],
  blogTitle = "Latest Blog Posts",
  blogPosts = [],
  footerContent = "© 2023 Farm Name. All rights reserved.",
}: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: farmName }} />
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/about" className="hover:text-green-200 transition-colors" dangerouslySetInnerHTML={{ __html: aboutText }} /></li>
              <li><a href="/activities" className="hover:text-green-200 transition-colors" dangerouslySetInnerHTML={{ __html: activitiesText }} /></li>
              <li><a href="/blog" className="hover:text-green-200 transition-colors" dangerouslySetInnerHTML={{ __html: blogText }} /></li>
              <li><a href="/login" className="hover:text-green-200 transition-colors" dangerouslySetInnerHTML={{ __html: loginText }} /></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-96">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold text-white text-center" dangerouslySetInnerHTML={{ __html: heroText }} />
          </div>
        </section>

        <section className="py-12 bg-green-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800" dangerouslySetInnerHTML={{ __html: activitiesTitle }} />
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {farmActivities.map((activity, index) => (
                  <a
                    key={index}
                    href={activity.link}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <h3 className="text-xl font-semibold text-green-700">{activity.name}</h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800" dangerouslySetInnerHTML={{ __html: blogTitle }} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts?.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a href={`/blog/${post.slug}`} className="text-green-600 hover:text-green-800 font-medium">Read more</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto text-center" dangerouslySetInnerHTML={{ __html: footerContent }} />
      </footer>
    </div>
  );
}
