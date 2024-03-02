import logo from "./assets/images/logo.svg";
import web3Desktop from "./assets/images/image-web-3-desktop.jpg";
import web3Mobile from "./assets/images/image-web-3-mobile.jpg";
import New from "./components/New";
import newDatas from "./data/newDatas";
import factData from "./data/factData";
import Fact from "./components/Fact";

function App() {
  return (
    <div className="min-h-screen grid place-items-center font-default">
      <article className="w-[80%] max-h-[80%] grid grid-rows-[auto_1r_1fr] gap-4">
        <nav className="grid grid-cols-[60%_40%] items-center">
          <img src={logo} alt="logo" />
          <ul className="flex items-center justify-between capitalize text-nav font-normal">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">new</a>
            </li>
            <li>
              <a href="#">popular</a>
            </li>
            <li>
              <a href="#">trending</a>
            </li>
            <li>
              <a href="#">categories</a>
            </li>
          </ul>
        </nav>
        <section className="grid grid-cols-3 grid-rows-[1fr_auto] gap-4">
          <picture className="col-span-2 w-full h-full object-cover">
            <source media="(min-width: 768px)" srcSet={web3Desktop} />
            <img src={web3Mobile} alt="web 3 image" />
          </picture>
          <h1 className="col-start-1 row-start-2 text-5xl font-extrabold flex items-center">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col justify-between items-start col-start-2 row-start-2">
            <p className=" text-sm text-nav">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfulling its promise?
            </p>
            <button className="uppercase px-6 py-2 font-medium tracking-widest text-xs text-white bg-btn">
              read more
            </button>
          </div>
          <div className="row-span-2 flex flex-col">
            <h1 className="">New</h1>
            <div className="flex flex-col justify-between">
              {newDatas.map((item) => (
                <New key={item.id} title={item.title}>
                  {item.desc}
                </New>
              ))}
            </div>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-2">
          {factData.map((item) => (
            <Fact
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
            >
              {item.desc}
            </Fact>
          ))}
        </section>
      </article>
    </div>
  );
}

export default App;
