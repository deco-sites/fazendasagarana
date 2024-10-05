import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  farmName?: string;
  heroImage?: ImageWidget;
  /**
   * @format rich-text
   */
  heroText?: string;
  activities?: Array<{
    title: string;
    link: string;
  }>;
  blogPosts?: Array<{
    thumbnail: ImageWidget;
    title: string;
    description: string;
    author: string;
  }>;
  /**
   * @format rich-text
   */
  footerContent?: string;
}

export default function FarmWebsite({
  farmName = "Green Acres Farm",
  heroImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  heroText = "Experience the beauty of farm life",
  activities = [
    { title: "Cow Milking", link: "/activities/cow-milking" },
    { title: "Horseback Riding", link: "/activities/horseback-riding" },
    { title: "Organic Gardening", link: "/activities/organic-gardening" },
  ],
  blogPosts = [
    {
      thumbnail: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Farm Life in Spring",
      description: "Discover the joys of springtime on our farm.",
      author: "John Doe",
    },
    {
      thumbnail: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      title: "Sustainable Farming Practices",
      description: "Learn about our eco-friendly farming methods.",
      author: "Jane Smith",
    },
  ],
  footerContent = "© 2023 Green Acres Farm. All rights reserved.",
}: Props) {
  return (
    <div className="font-sans bg-green-50 text-green-900">
      <header className="bg-green-800 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold" dangerouslySetInnerHTML={{ __html: farmName }} />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-green-200">About</a></li>
            <li><a href="#" className="hover:text-green-200">Atividades</a></li>
            <li><a href="#" className="hover:text-green-200">Blog</a></li>
            <li><a href="#" className="hover:text-green-200">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative h-96">
          <img src={heroImage} alt="Farm Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-4xl font-bold text-white text-center" dangerouslySetInnerHTML={{ __html: heroText }} />
          </div>
        </section>

        <section className="py-12 px-6">
          <h3 className="text-2xl font-semibold mb-6 text-center">Farm Activities</h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {activities.map((activity, index) => (
              <a key={index} href={activity.link} className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-medium">{activity.title}</h4>
              </a>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-green-100">
          <h3 className="text-2xl font-semibold mb-6 text-center">Farm Blog</h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 w-72">
                <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h4 className="text-lg font-medium mb-2">{post.title}</h4>
                <p className="text-sm text-green-700 mb-2">{post.description}</p>
                <p className="text-xs text-green-600">By {post.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-4 px-6 text-center">
        <p dangerouslySetInnerHTML={{ __html: footerContent }} />
      </footer>
    </div>
  );
}