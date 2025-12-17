export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mb-6">
          <span className="w-2 h-2 bg-pink-300 rounded-full"></span>
          <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
          <span className="w-2 h-2 bg-pink-300 rounded-full"></span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
          About <span className="italic font-normal">Glow Blog</span>
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-600 font-sans leading-relaxed tracking-wide">
          <p>
            Welcome to{" "}
            <span className="font-medium text-gray-800">Glow Blog</span>, your
            trusted companion in the world of beauty and self-care. We believe
            that beauty is not just about appearance — it’s about
            <span className="font-medium text-gray-800">
              {" "}
              confidence, self-expression, and feeling your absolute best
            </span>{" "}
            every single day.
          </p>

          <p>
            Our mission is to provide you with
            <span className="italic"> honest, expert-backed reviews</span> and
            practical beauty tips that actually work. From the latest makeup
            trends to timeless skincare routines, we cover everything you need
            to build your perfect beauty regimen.
          </p>

          <p>
            Whether you’re a beauty enthusiast or just starting your journey,
            we’re here to guide you with authentic recommendations, step-by-step
            tutorials, and insider knowledge from industry professionals.
            <span className="font-medium text-gray-800">
              {" "}
              Your beauty, your rules.
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-3xl font-bold text-gray-900 tracking-tight">
              500+
            </h3>
            <p className="text-gray-500 mt-2 text-sm">Beauty Articles</p>
          </div>

          <div>
            <h3 className="font-serif text-3xl font-bold text-gray-900 tracking-tight">
              50+
            </h3>
            <p className="text-gray-500 mt-2 text-sm">Monthly Readers</p>
          </div>

          <div>
            <h3 className="font-serif text-3xl font-bold text-gray-900 tracking-tight">
              100+
            </h3>
            <p className="text-gray-500 mt-2 text-sm">Product Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
