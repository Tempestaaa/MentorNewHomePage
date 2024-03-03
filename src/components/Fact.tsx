import { ReactNode } from "react";

interface FactProps {
  id: number;
  image: string;
  title: string;
  children: ReactNode;
}

const Fact = ({ id, image, title, children }: FactProps): JSX.Element => {
  return (
    <div className="grid grid-cols-[30%_70%]">
      <div className="aspect-square cursor-pointer">
        <img
          src={image}
          alt="represent image"
          className="block object-cover w-full h-full"
        />
      </div>
      <div className="p-4 grid grid-flow-row gap-2">
        <h1 className="text-3xl font-bold text-navAndText cursor-pointer">
          0{id}
        </h1>
        <h2 className="font-bold cursor-pointer hover:text-btn">{title}</h2>
        <p className="text-sm text-navAndText cursor-text">{children}</p>
      </div>
    </div>
  );
};

export default Fact;
