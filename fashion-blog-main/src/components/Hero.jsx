import heroImage from "../assets/beauty-hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="bg-[#e9dfdf] pt-24 pb-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* LEFT IMAGE */}
        <div className="relative lg:col-span-7">
          <div className="rounded-[5px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] h-[420px] lg:h-[520px]">
            <img
              src={heroImage}
              alt="Beauty Collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-white rounded-[60px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] px-10 py-12 lg:col-span-5">
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-pink-500 text-white text-xs font-semibold tracking-wide">
            NEW COLLECTION
          </span>

          {/* Title */}
          <h1 className="font-serif text-[42px] leading-[1.15] text-[#1a1a1a] mb-6">
            Discover Your <br />
            Signature <br />
            Beauty Style
          </h1>

          {/* Description */}
          <p className="font-sans text-[15px] leading-7 text-gray-600 max-w-md mb-8">
            Explore expert beauty tips, honest product reviews, and the latest
            trends in makeup, skincare, and wellness. Your journey to radiant
            confidence starts here.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#featured"
              className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium transition hover:scale-105"
            >
              Explore Now
            </a>

            <a
              href="#subscribe"
              className="border border-pink-500 text-pink-500 px-7 py-3 rounded-full text-sm font-medium transition hover:bg-pink-500 hover:text-white hover:scale-105"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
