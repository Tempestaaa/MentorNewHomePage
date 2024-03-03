import logo from "../assets/images/logo.svg";
import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import web3Mobile from "../assets/images/image-web-3-mobile.jpg";
import menuIcon from "../assets/images/icon-menu.svg";
import closeMenuIcon from "../assets/images/icon-menu-close.svg";
import newDatas from "../data/newDatas";
import factDatas from "../data/factDatas";
import New from "./New";
import Fact from "./Fact";

const Home = () => {
  return (
    <article className="min-h-screen md:w-[80%] md:max-h-[90%] grid grid-cols-1 grid-flow-row md:grid-cols-3 md:grid-rows-default gap-4">
      <div className="col-span-3 flex justify-between items-center mb-12">
        <img src={logo} alt="logo" />
        <div className="flex">
          <ul className="flex items-center justify-between capitalize text-navAndText h-full">
            <li className="py-2 px-4 cursor-pointer hover:text-btn">
              <a href="#">home</a>
            </li>
            <li className="py-2 px-4 cursor-pointer hover:text-btn">
              <a href="#">new</a>
            </li>
            <li className="py-2 px-4 cursor-pointer hover:text-btn">
              <a href="#">popular</a>
            </li>
            <li className="py-2 px-4 cursor-pointer hover:text-btn">
              <a href="#">trending</a>
            </li>
            <li className="py-2 px-4 cursor-pointer hover:text-btn">
              <a href="#">categories</a>
            </li>
          </ul>
          {/* <img src={menuIcon} alt="menu icon" className="cursor-pointer" /> */}
        </div>
      </div>
      <picture className="col-start-1 col-span-2">
        <source media="(min-width: 425px)" srcSet={web3Desktop} />
        <img src={web3Mobile} alt="web 3 image" />
      </picture>
      <div className="col-start-3 row-span-2 bg-new grid grid-rows-[auto_1fr] p-4 pt-6">
        <h2 className=" text-3xl font-bold text-Softorange">New</h2>
        <div className="grid grid-rows-3 container">
          {newDatas.map((item) => (
            <New key={item.id} title={item.title}>
              {item.desc}
            </New>
          ))}
        </div>
      </div>
      <h1 className="text-6xl font-extrabold flex items-center">
        The Bright Future of Web 3.0?
      </h1>
      <div className="grid grid-rows-[1fr_auto] place-items-start">
        <p className="text-navAndText">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-btn px-12 py-3 font-medium text-Offwhite tracking-widest hover:bg-new">
          READ MORE
        </button>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-4 mt-12">
        {factDatas.map((item) => (
          <Fact
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
          >
            {item.desc}
          </Fact>
        ))}
      </div>
    </article>
  );
};

export default Home;
