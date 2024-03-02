import { ReactNode } from "react";

interface FactProps {
  id: number;
  image: string;
  title: string;
  children: ReactNode;
}

const Fact = ({ id, image, title, children }: FactProps): JSX.Element => {
  return (
    <div className="grid grid-cols-2 grid-flow-row h-20">
      <div className=" row-span-3 col-start-1">
        <img src={image} alt="represent image" />
      </div>
      <h1>0{id}</h1>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Fact;
