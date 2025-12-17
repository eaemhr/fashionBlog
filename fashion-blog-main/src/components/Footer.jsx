import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fff6ee] pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#f0e6dc]">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-pink-300 flex items-center justify-center font-serif font-bold text-white">
                B
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Your trusted source for beauty tips, honest reviews, and the
              latest trends in makeup, skincare, and wellness.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Featured Posts
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#categories"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Makeup Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Skincare Secrets
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Hair Care
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Wellness Tips
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>

            <div className="flex gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition cursor-pointer">
                <Twitter size={16} />
              </div>
              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition cursor-pointer">
                <Youtube size={16} />
              </div>
              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white transition cursor-pointer">
                <Facebook size={16} />
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Join our community of 50K+ beauty lovers
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-xs text-gray-500">
          <p>© 2024 Glow Blog. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-gray-800 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-gray-800 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
