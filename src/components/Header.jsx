import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [sticky, setSticky] = useState({
    bg: "bg-transparent",
    color: "text-black",
  });
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shoes",
      path: "/shoes",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      const header = document.getElementById("header");

      window.scrollY > header.getBoundingClientRect().height
        ? setSticky({
            bg: "bg-black",
            color: "text-white",
        })
        : setSticky({
          bg: "bg-transparent",
          color: "text-black",
        });
    });
  };

  return (
    <header
      id="header"
      className={`${sticky.bg} py-6 fixed top-0 w-screen z-50 hidden lg:block ${sticky.color} transtiion-all ease-in duration-500`}
      onScroll={handleScroll()}
    >
      <nav className="container">
        <ul className="w-full flex justify-end">
          {pages.map(({ name, path }) => (
            <li key={name} className="mr-11">
              <Link
                to={path}
                className="uppercase font-body text-5xl font-extrabold cursor-pointer tracking-wide"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
