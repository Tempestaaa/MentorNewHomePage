import newDatas from "../data/newDatas";
import New from "./New";

const NewContainer = () => {
  return (
    <div className="bg-new grid grid-flow-row p-4">
      <h1 className="font-bold text-3xl text-Softorange">New</h1>
      {newDatas.map((item) => (
        <New key={item.id} title={item.title}>
          {item.desc}
        </New>
      ))}
    </div>
  );
};

export default NewContainer;
