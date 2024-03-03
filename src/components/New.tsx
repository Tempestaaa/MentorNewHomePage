import { ReactNode } from "react";

interface NewProps {
  title: String;
  children: ReactNode;
}

const New = ({ title, children }: NewProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-2 border-b-2 border-solid border-navAndText last:border-0 last:-mb-4">
      <h2 className="text-Offwhite mt-8 font-bold text-xl cursor-pointer flex items-center hover:text-Softorange">
        {title}
      </h2>
      <p className="text-navAndText mb-8 cursor-text">{children}</p>
    </div>
  );
};

export default New;
