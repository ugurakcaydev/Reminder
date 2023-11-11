import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";

export default function MainLayout() {
  const appearance = useAppearance();
  useEffect(() => {
    //Custom colors for text
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

    //Custom colors for background
    document.documentElement.style.setProperty(
      "--bg-base",// Sayfanın Arkaplanı
      appearance.backgroundColor.base
    );
    document.documentElement.style.setProperty(
      "--bg-base-secondary",//Sayfada bulunan kutuların rengi
      appearance.backgroundColor.baseSecondary
    );
    document.documentElement.style.setProperty(
      "--bg-secondary", //border ve hover için
      appearance.backgroundColor.secondary
    );

    //renkleri tanımla
  }, [appearance]);

  return (
    <div className="w-full  bg-[color:var(--bg-base)]  ">
      <Navbar />
      <main className="flex-col mx-auto pt-[80px]  w-[90%] max-w-[1920px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
