import featured1 from "../assets/featured/featured1.jpg";
import featured2 from "../assets/featured/featured2.jpg";
import featured3 from "../assets/featured/featured3.jpg";

import author1 from "../assets/authors/author1.jpg";
import author2 from "../assets/authors/author2.jpg";
import author3 from "../assets/authors/author3.jpg";

const posts = [
  {
    category: "MAKEUP",
    title: "The Ultimate Guide to Achieving Flawless Foundation",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    author: "Emma Rodriguez",
    image: featured1,
    avatar: author1,
  },
  {
    category: "SKINCARE",
    title: "10 Korean Skincare Secrets for Glass Skin",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    author: "Sarah Kim",
    image: featured2,
    avatar: author2,
  },
  {
    category: "REVIEWS",
    title: "Best Luxury Lipsticks Worth the Investment",
    date: "Mar 10, 2024",
    readTime: "5 min read",
    author: "Jessica Chen",
    image: featured3,
    avatar: author3,
  },
];

export default function Featured() {
  return (
    <section id="featured" className="bg-[#faf6e8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-pink-500">★</span> Featured Stories
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Handpicked by our editors
            </p>
          </div>

          {/* Arrows (UI only) */}
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white shadow hover:scale-105 transition">
              ‹
            </button>
            <button className="w-10 h-10 rounded-full bg-white shadow hover:scale-105 transition">
              ›
            </button>
          </div>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />

                {/* Bookmark */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
                  🔖
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>

                <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-500 mb-4">
                  {post.date} • {post.readTime}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-700">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
