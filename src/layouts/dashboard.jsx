import { Outlet } from "react-router-dom";
import Footer from "../components/dashboard/footer";
import DashboardNav from "../components/dashboard/dashboardNav";
import { useAppearance } from "../store/appearance/hooks";
import { useEffect } from "react";

function DashboradLayout() {
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
      "--bg-base", // Sayfanın Arkaplanı
      appearance.backgroundColor.base
    );
    document.documentElement.style.setProperty(
      "--bg-base-secondary", //Sayfada bulunan kutuların rengi
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
      <DashboardNav />
      <main className="flex-col mx-auto pt-[80px]  w-[90%] max-w-[1920px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DashboradLayout;
