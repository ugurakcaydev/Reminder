import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";

export default function MainLayout() {
  const appearance = useAppearance();
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color-base",
      appearance.color.base
    );
    document.documentElement.style.setProperty(
      "--color-base-secondary",
      appearance.color.baseSecondary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.secondary
    );
    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );

    document.documentElement.style.setProperty(
      "--bg-base",
      appearance.backgroundColor.base
    );
    document.documentElement.style.setProperty(
      "--bg-base-secondary",
      appearance.backgroundColor.baseSecondary
    );
    document.documentElement.style.setProperty(
      "--bg-secondary",
      appearance.backgroundColor.secondary
    );

    //renkleri tanımla
  }, [appearance]);

  return (
    <div className="w-full  bg-[color:var(--bg-base)]  ">
      <Navbar />
      <main className="flex-col mx-auto pt-[80px]  w-[90%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
