import { ImageWidget } from 'apps/admin/widgets.ts';
import { BlogPost } from "apps/blog/types.ts";

interface Activity {
  name: string;
  link: string;
}

interface Props {
  /**
   * @format rich-text
   */
  heroTitle?: string;
  heroImage?: ImageWidget;
  /**
   * @format rich-text
   */
  activitiesTitle?: string;
  activities?: Activity[];
  /**
   * @format rich-text
   */
  blogTitle?: string;
  blogPosts?: BlogPost[];
}

export default function FarmLayout({
  heroTitle = "Welcome to Our Farm",
  heroImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  activitiesTitle = "Farm Activities",
  activities = [
    { name: "Apple Picking", link: "/activities/apple-picking" },
    { name: "Hayride", link: "/activities/hayride" },
    { name: "Corn Maze", link: "/activities/corn-maze" },
  ],
  blogTitle = "Farm Blog",
  blogPosts = [],
}: Props) {
  return (
    <div class="container mx-auto px-4 py-8 bg-green-50">
      {/* Hero Section */}
      <section class="relative mb-12">
        <img 
          src={heroImage} 
          alt="Farm Hero" 
          class="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
          <h1 
            class="text-4xl md:text-5xl font-bold text-white text-center"
            dangerouslySetInnerHTML={{ __html: heroTitle }}
          />
        </div>
      </section>

      {/* Farm Activities Section */}
      <section class="mb-12">
        <h2 
          class="text-3xl font-bold text-green-800 mb-6"
          dangerouslySetInnerHTML={{ __html: activitiesTitle }}
        />
        <div class="flex overflow-x-auto space-x-4 pb-4">
          {activities.map((activity, index) => (
            <a 
              key={index}
              href={activity.link}
              class="flex-shrink-0 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-2 border-green-500"
            >
              <span class="text-lg font-semibold text-green-700">{activity.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section>
        <h2 
          class="text-3xl font-bold text-green-800 mb-6"
          dangerouslySetInnerHTML={{ __html: blogTitle }}
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 class="text-xl font-semibold text-green-700 mb-2">{post.title}</h3>
              <p class="text-gray-600 mb-4">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} class="text-green-500 hover:text-green-600 font-medium">
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}