import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <div
      className={`min-h-screen grid place-items-center font-default ${
        isShowNav ? "bg-navAndText" : ""
      }`}
    >
      <Home isShowNav={isShowNav} setIsShowNav={setIsShowNav} />
    </div>
  );
}

export default App;
