import newDatas from "../data/newDatas";
import factDatas from "../data/factDatas";
import New from "./New";
import Fact from "./Fact";
import Nav from "./Nav";
import Main from "./Main";
import { useState } from "react";

const Home = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <article className="container min-h-screen px-2 py-4 grid grid-cols-1 grid-flow-row gap-4 relative">
      <nav className="flex items-center justify-between">
        <Nav isShowNav={isShowNav} setIsShowNav={setIsShowNav} />
      </nav>

      <section className="grid grid-cols-1 grid-flow-row gap-4">
        <Main />
      </section>

      <div className="bg-new grid grid-flow-row p-4">
        <h1 className="font-bold text-3xl text-Softorange">New</h1>
        {newDatas.map((item) => (
          <New key={item.id} title={item.title}>
            {item.desc}
          </New>
        ))}
      </div>

      <section className="grid grid-flow-row gap-4">
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
      </section>
    </article>
  );
};

export default Home;
