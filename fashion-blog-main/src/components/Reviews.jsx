import { useState } from "react";

import r1 from "../assets/reviews/review1.jpg";
import r2 from "../assets/reviews/review2.jpg";
import r3 from "../assets/reviews/review3.jpg";
import r4 from "../assets/reviews/review4.jpg";
import r5 from "../assets/reviews/review5.jpg";
import r6 from "../assets/reviews/review6.jpg";

import u1 from "../assets/users/user1.jpg";
import u2 from "../assets/users/user2.jpg";
import u3 from "../assets/users/user3.jpg";
import u4 from "../assets/users/user4.jpg";
import u5 from "../assets/users/user5.jpg";
import u6 from "../assets/users/user6.jpg";

const reviews = [
  {
    title: "Radiance Glow Serum",
    brand: "LuxeSkin",
    text: "This serum transformed my skin in just two weeks! The glow is real and my skin feels incredibly hydrated. Worth every penny.",
    user: "Amanda Wilson",
    image: r1,
    avatar: u1,
  },
  {
    title: "Velvet Matte Lipstick",
    brand: "ColorPop Beauty",
    text: "Amazing color payoff and stays put all day. Slightly drying after 6 hours but still one of my favorites for special occasions.",
    user: "Rachel Green",
    image: r2,
    avatar: u2,
  },
  {
    title: "Hydrating Face Mask",
    brand: "GlowLab",
    text: "My skin drinks this up! Perfect for dry winter months. Leaves my face plump and dewy without any sticky residue.",
    user: "Sophie Turner",
    image: r3,
    avatar: u3,
  },
  {
    title: "Volumizing Mascara",
    brand: "Lash Perfect",
    text: "Great volume without clumping. Holds curl well throughout the day. Only downside is it can be a bit difficult to remove.",
    user: "Emily Davis",
    image: r4,
    avatar: u4,
  },
  {
    title: "Brightening Eye Cream",
    brand: "Youth Restore",
    text: "Dark circles have visibly reduced! Lightweight texture that absorbs quickly. A must-have in my morning routine.",
    user: "Isabella Martinez",
    image: r5,
    avatar: u5,
  },
  {
    title: "Nourishing Hair Oil",
    brand: "Silk Strands",
    text: "My hair has never been shinier! This oil tamed my frizz and added so much softness. The scent is divine too.",
    user: "Natalie Brown",
    image: r6,
    avatar: u6,
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="reviews" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#e9f8f3] rounded-xl px-6 py-4 mb-14">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Latest Reviews
          </h2>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-emerald-600 font-medium hover:underline self-start sm:self-auto"
          >
            {showAll ? "Show Less ←" : "View All Reviews →"}
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleReviews.map((review, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image (compatible layout) */}
              <div className="h-52 bg-gray-50 flex items-center justify-center">
                <img
                  src={review.image}
                  alt={review.title}
                  className="max-h-full max-w-full object-contain p-6 transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-2">★★★★★</div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  {review.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">{review.brand}</p>

                {/* Review Text */}
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {review.text}
                </p>

                {/* User */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.user}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-700">{review.user}</span>
                  </div>

                  {/* Verified Badge */}
                  <span className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    ✔ Verified
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
