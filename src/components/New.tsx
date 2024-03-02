import { ReactNode } from "react";

interface NewProps {
  title: String;
  children: ReactNode;
}

const New = ({ title, children }: NewProps): JSX.Element => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default New;
