import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import closeMenuIcon from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

type LinksType = {
  name: string;
  link: string;
}[];

const Links: LinksType = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "New",
    link: "#",
  },
  {
    name: "Popular",
    link: "#",
  },
  {
    name: "Trending",
    link: "#",
  },
  {
    name: "Categories",
    link: "#",
  },
];

const Nav = () => {
  const [isShowNav, setIsShowNav] = useState(true);

  const handleShowNav = (): void => {
    setIsShowNav(!isShowNav);
  };

  return (
    <nav className="fixed w-full px-8 top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4">
        <img src={logo} alt="logo icon" />

        {isShowNav && (
          <ul className="font-medium md:text-navAndText w-full md:w-auto h-screen md:h-auto bg-navMobile md:bg-inherit absolute md:static top-0 right-0">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-2/3 md:w-auto h-full md:h-auto ml-auto pt-32 md:pt-0 pl-8 md:pl-0 bg-Offwhite">
              {Links.map((link, i) => (
                <li key={i} className="hover:text-btn">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
      <img
        src={isShowNav ? closeMenuIcon : menuIcon}
        alt="menu"
        onClick={handleShowNav}
        className="w-[40px] aspect-square absolute top-4 right-8 block md:hidden z-10"
      />
    </nav>
  );
};

export default Nav;
