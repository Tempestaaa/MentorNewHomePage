import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import web3Mobile from "../assets/images/image-web-3-mobile.jpg";

const Main = () => {
  return (
    <section className="grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 md:col-start-1 md:col-end-3">
      <picture className="md:col-span-2 w-full h-full">
        <source media="(min-width: 768px)" srcSet={web3Desktop} />
        <img src={web3Mobile} alt="web 3 image" className="w-full h-full" />
      </picture>
      <h1 className="block font-extrabold text-5xl md:flex md:items-center">
        The Bright Future of Web 3.0?
      </h1>
      <div className="flex flex-col gap-4 items-start md:grid md:grid-rows-[1fr_auto] md:place-items-start">
        <p className="text-navAndText text-[0.938rem] md:pb-10">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="py-2 px-8 bg-btn uppercase text-Offwhite font-medium tracking-widest hover:bg-new">
          read more
        </button>
      </div>
    </section>
  );
};

export default Main;
