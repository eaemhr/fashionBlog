import makeup from "../assets/categories/makeup.jpg";
import skincare from "../assets/categories/skincare.jpg";
import hair from "../assets/categories/hair.jpg";
import reviews from "../assets/categories/reviews.jpg";

const categories = [
  { title: "Makeup Tutorials", image: makeup },
  { title: "Skincare Secrets", image: skincare },
  { title: "Hair Care", image: hair },
  { title: "Product Reviews", image: reviews },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative py-24 bg-gradient-to-b from-[#fdf7fb] to-[#f7eef6]"
    >
      {/* Soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-pink-200/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl font-bold text-gray-900 tracking-tight">
            Explore Categories
          </h2>
          <p className="text-gray-600 mt-2 tracking-wide">
            Find exactly what you're looking for
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="group relative h-[420px] rounded-[26px] overflow-hidden shadow-lg cursor-pointer"
              >
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <h3 className="text-white font-serif text-xl tracking-tight">
                    {cat.title}
                  </h3>
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
