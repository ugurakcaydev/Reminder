import { Link } from "react-router-dom";
import {
  setBackgroundColor,
  setColor,
} from "../../../store/appearance/actions";
import { dashMenu } from "../../../const/const";
import classNames from "classnames";
import { useAppearance } from "../../../store/appearance/hooks";
import { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { getAuthToken, getFirstChar } from "../../../api/server";

function DashboardNav() {
  const { /*backgroundColor*/ color } = useAppearance();
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const LogOut = async () => {
    try {
      const authToken = getAuthToken();

      // Eğer authToken varsa, server'a logout isteği gönderilebilir
      // Ancak bu örnekte sadece cookie silme işlemi gösterilecek
      if (authToken) {
        // Burada server'a logout isteği gönderilebilir

        // Cookie'yi silme
        document.cookie =
          "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }

      // Kullanıcıyı login sayfasına yönlendirme
      window.location.href = "/login"; // Yönlendirme yapacağınız sayfanın yolunu belirtin

      return null;
    } catch (error) {
      console.error("Çıkış yaparken hata oluştu: ", error);
      return null;
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center font-inter text-[color:var(--color-base)] bg-transparent    transition-translate duration-200 text-xl z-20 ${
          scrollY > 10 ? "translate-y-6 " : ""
        }`}
      >
        <div
          className={classNames(
            " flex justify-center items-center  py-4 mobile:px-0  bg-transparent  transition-translate duration-200 w-[70%] ",
            {
              "text-tgold !bg-[#2a2a2a] shadow-sm shadow-gray-400 rounded-full":
                scrollY > 10,
            }
          )}
        >
          <div className="w-full flex justify-between gap-x-28 px-5">
            <div className="flex  items-center gap-x-3 ">
              <img
                className="mobile:hidden laptop2:block  h-10"
                src="../../../src/assets/images/booking.png"
                alt="logo"
              />
              {dashMenu &&
                dashMenu.map((menuItem, index) => (
                  <Link
                    onClick={() => {
                      setCurrentPage(index);
                    }}
                    to={menuItem.path}
                    key={index}
                    className=" relative flex items-center justify-center font-serif gap-x-2 p-2 mobile:px-1 laptop1:px-2 desktop1:px-3  text-base group "
                  >
                    <span
                      className={classNames(
                        "font-roboto whitespace-nowrap before:absolute before:bottom-0 before:content-[''] before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:left-1/2 before:h-1 before:bg-tgold group-hover:before:w-full before:rounded-3xl before:transition-all before:duration-300 before:ease-in-out ",
                        {
                          "before:w-full": index === currentPage,
                        }
                      )}
                    >
                      {menuItem.name}
                    </span>
                  </Link>
                ))}
            </div>
            <div className="flex items-center gap-x-5">
              <Link
                to={"/"}
                className="w-[2.5rem] h-[2.5rem] rounded-full p-.5 transition-all duration-500 hover:bg-[color:var(--bg-secondary)]  flex items-center justify-center"
              >
                <svg
                  className="h-[1.5rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"
                  ></path>
                </svg>
              </Link>

              <div className="h-[2.5rem] flex items-center justify-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center w-8 h-8 justify-center rounded-full bg-[color:var(--color-primary)] p-2 text-sm font-medium text-white focus:outline-none  ">
                      {getFirstChar().toUpperCase()}
                    </Menu.Button>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-[color:var(--color-primary)] text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* {active ? <p>active</p> : <p>active</p>} */}
                              Account
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-[color:var(--color-primary)] text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* {active ? <p>active</p> : <p>active</p>} */}
                              Billing
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-[color:var(--color-primary)] text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* {active ? <p>active</p> : <p>active</p>} */}
                              Integrations
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-[color:var(--color-primary)] text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* {active ? <p>active</p> : <p>active</p>} */}
                              Team Management
                            </button>
                          )}
                        </Menu.Item>
                      </div>

                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-[color:var(--color-primary)] text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* {active ? <p>active</p> : <p>active</p>} */}
                              Upgrade
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => {
                                LogOut();
                              }}
                              className={`${
                                active
                                  ? "bg-[color:var(--color-primary)] text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {/* {active ? <p>active</p> : <p>active</p>} */}
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <label className="swap swap-rotate transition-all duration-500 rounded-full h-[2.3rem] w-[2.3rem] ">
                <input type="checkbox" />
                {/* Karanlık Mod */}
                <svg
                  onClick={() => {
                    setColor({
                      ...color,
                      base: "#ffffff", // Saf beyaz
                      baseSecondary: "#cccccc", // Gri tonu
                      secondary: "#666666",
                      primary: "#F7B22C",
                    });
                    setBackgroundColor({
                      base: "#252525", //sayfa arka planı
                      baseSecondary: "#1a1a1a", //contentlerin arka planı
                      secondary: "#3f3f3f", //hover olduğunda karanlık mod
                    });
                  }}
                  className="swap-on fill-current h-[1.5rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* Açık Mod */}
                <svg
                  onClick={() => {
                    setColor({
                      ...color,
                      base: "#333333", // Koyu gri-siyah tonu
                      baseSecondary: "#666666", // Orta gri tonu
                      secondary: "#999999",
                      primary: "#F7B22C",
                    });
                    setBackgroundColor({
                      base: "#e2e2e2", //e7e9ea
                      baseSecondary: "#e7e9ea", //e2e2e2
                      secondary: "#D1D1D1",
                    });
                  }}
                  className="swap-off fill-current h-[1.5rem]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNav;
