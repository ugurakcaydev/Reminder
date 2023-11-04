import Navbar from "../components/navbar";
//import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";

export default function MainLayout() {
  const appearance = useAppearance();
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    ); //Gold
    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.base
    );
    document.documentElement.style.setProperty(
      "--color-third",
      appearance.color.third
    );

    document.documentElement.style.setProperty(
      "--bg-primary",
      appearance.backgroundColor.primary
    ); //Beyaz
    document.documentElement.style.setProperty(
      "--bg-secondary",
      appearance.color.secondary
    ); //Siyah
    document.documentElement.style.setProperty(
      "--bg-secondary-base",
      appearance.color.secondary
    ); //açık siyah
    document.documentElement.style.setProperty(
      "--bg-third",
      appearance.color.third
    );

    //renkleri tanımla
  }, [appearance]);

  return (
    <div className="w-full  bg-[color:var(--bg-primary)]  ">
      <Navbar />
      <main className="flex-col h-[300vh]   mx-auto pt-[80px]  w-[90%]">
        <Outlet />
      </main>
      {/* <Footer classNamee={' absolute bottom-0 w-full bg-[color:var(--bg-primary)] '} /> */}
    </div>
  );
}
