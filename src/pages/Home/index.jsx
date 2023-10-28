import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";
import classNames from "classnames";
import { useState } from "react";
export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="text-red-500">
      <Navbar />
      <p
        className={classNames("text-xl text-blue-600", {
          "text-red-600": active == true,
        })}
      >
        tessdt
      </p>
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        TIkla oç
      </button>
      <NavLink to={"/settings"}>settings sayfasına git amk cocu</NavLink>
    </div>
  );
}
