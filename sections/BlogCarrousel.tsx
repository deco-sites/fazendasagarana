import { ImageWidget } from "apps/admin/widgets.ts";

interface BlogPost {
  title: string;
  /**
   * @format textarea
   */
  excerpt: string;
  image: ImageWidget;
  date: string;
  author: string;
}

interface Props {
  /**
   * @format rich-text
   */
  sectionTitle?: string;
  blogPosts?: BlogPost[];
}

export default function BlogCarousel({
  sectionTitle = "Latest from our blog",
  blogPosts = [
    {
      title: "10 Tips for Better Web Design",
      excerpt:
        "Learn how to improve your web design skills with these essential tips.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      date: "2023-05-15",
      author: "Jane Doe",
    },
    {
      title: "The Future of JavaScript Frameworks",
      excerpt:
        "Explore the upcoming trends in JavaScript frameworks and how they'll shape web development.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      date: "2023-05-10",
      author: "John Smith",
    },
    {
      title: "Optimizing Website Performance",
      excerpt:
        "Discover techniques to boost your website's speed and overall performance.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      date: "2023-05-05",
      author: "Alice Johnson",
    },
  ],
}: Props) {
  return (
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-center mb-8">{sectionTitle}</h2>
      <div class="carousel carousel-center w-full p-4 space-x-4 rounded-box">
        {blogPosts.map((post, index) => (
          <div key={index} class="carousel-item">
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={post.image}
                  alt={post.title}
                  class="w-full h-48 object-cover"
                />
              </figure>
              <div class="card-body">
                <h3 class="card-title">{post.title}</h3>
                <p class="text-sm text-gray-600 mb-2">
                  {post.date} | {post.author}
                </p>
                <p>{post.excerpt}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
