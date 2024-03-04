import Nav from "./Nav";
import Main from "./Main";
import NewContainer from "./NewContainer";
import FactContainer from "./FactContainer";

const Home = () => {
  return (
    <article className=" min-h-screen mx-8 py-10 grid grid-cols-1 grid-flow-row gap-4 md:grid-rows-[auto_1fr_auto] md:px-0">
      <Nav />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <Main />
        <NewContainer />
      </div>

      <FactContainer />
    </article>
  );
};

export default Home;
