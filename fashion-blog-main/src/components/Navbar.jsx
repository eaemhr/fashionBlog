import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnHero(entry.isIntersecting);
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `transition font-medium ${
      active === id
        ? "text-pink-500"
        : onHero
        ? "text-white/80 hover:text-white"
        : "text-gray-700 hover:text-pink-400 dark:text-gray-300"
    }`;

  return (
    <nav
      className={`fixed top-0 mr-3 w-full z-50 transition-all duration-500
    flex justify-between items-center
    ${
      onHero
        ? "bg-white/10 backdrop-blur-md"
        : "bg-white shadow-md px-6 py-4 dark:bg-neutral-900"
    }
  `}
    >
      <h1 className="text-2xl font-bold text-pink-500 whitespace-nowrap">
        GlowBlog
      </h1>

      <ul className="hidden md:flex items-center space-x-6">
        <li>
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={linkClass("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#categories" className={linkClass("categories")}>
            Categories
          </a>
        </li>
        <li>
          <a href="#featured" className={linkClass("featured")}>
            Featured
          </a>
        </li>
        <li>
          <a href="#reviews" className={linkClass("reviews")}>
            Reviews
          </a>
        </li>
        <li>
          <a href="#subscribe" className={linkClass("subscribe")}>
            Subscribe
          </a>
        </li>
      </ul>
    </nav>
  );
}
