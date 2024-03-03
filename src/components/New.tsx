import { ReactNode } from "react";

interface NewProps {
  title: String;
  children: ReactNode;
}

const New = ({ title, children }: NewProps): JSX.Element => {
  return (
    <div className="grid grid-rows-[auto_auto] mt-4 border-b-2 border-solid last:border-0">
      <h2 className="text-Offwhite font-bold text-xl cursor-pointer flex items-center hover:text-Softorange">
        {title}
      </h2>
      <p className="text-navAndText cursor-text">{children}</p>
    </div>
  );
};

export default New;
