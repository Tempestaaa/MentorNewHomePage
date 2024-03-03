import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import closeMenuIcon from "../assets/images/icon-menu-close.svg";

type NavProps = {
  isShowNav: boolean;
  setIsShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ isShowNav, setIsShowNav }: NavProps) => {
  const handleShowNav = (): void => {
    setIsShowNav(!isShowNav);
  };

  return (
    <nav className="flex items-center justify-between">
      <img src={logo} alt="logo icon" />
      <div className="flex">
        <ul
          className={`bg-Offwhite capitalize font-medium h-full w-[70%] flex flex-col gap-4 absolute top-0 right-0 pt-32 md:text-navAndText ${
            isShowNav ? "" : "hidden"
          } `}
        >
          <li className="py-2 px-4">
            <a id="home" href="#">
              home
            </a>
          </li>
          <li className="py-2 px-4">
            <a id="new" href="#">
              new
            </a>
          </li>
          <li className="py-2 px-4">
            <a id="popular" href="#">
              popular
            </a>
          </li>
          <li className="py-2 px-4">
            <a id="trending" href="#">
              trending
            </a>
          </li>
          <li className="py-2 px-4">
            <a id="categories" href="#">
              categories
            </a>
          </li>
        </ul>
        {!isShowNav ? (
          <img
            src={menuIcon}
            alt="menu icon"
            className="cursor-pointer"
            onClick={handleShowNav}
          />
        ) : (
          <img
            src={closeMenuIcon}
            alt="close menu icon"
            className="cursor-pointer z-10"
            onClick={handleShowNav}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
