import factDatas from "../data/factDatas";
import Fact from "./Fact";

const FactContainer = () => {
  return (
    <section className="grid grid-flow-row gap-4 md:grid-flow-col-dense md:mt-8">
      {factDatas.map((item) => (
        <Fact key={item.id} id={item.id} image={item.image} title={item.title}>
          {item.desc}
        </Fact>
      ))}
    </section>
  );
};

export default FactContainer;
