import { useState } from "react";
import { mainMenu } from "../../const/const";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useCurrentUser } from "../../store/currentUser/hooks";
import DarkLightMode from "../on/off_theme";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { currentUser } = useCurrentUser();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center font-inter text-[color:var(--color-base)] bg-transparent  transition-translate duration-200 text-xl z-20 ${
          scrollY > 10 ? "translate-y-6 " : ""
        }`}
      >
        <div
          className={classNames(
            " flex justify-center items-center  py-4 mobile:px-0  bg-transparent  transition-translate duration-200 ",
            {
              "text-tgold !bg-[#2a2a2a] shadow-sm shadow-gray-400 rounded-full":
                scrollY > 10,
            }
          )}
        >
          <div className="w-full flex justify-between gap-x-28 px-5">
            <div className="flex  items-center gap-x-2 ">
              <img
                className="mobile:hidden laptop2:block  h-10"
                src="/images/booking.png"
                alt="logo"
              />
              <span className="font-poppins font-bold tracking-tight text-[color:var(--color-primary)] laptop1:text-2xl  desktop2:text-3xl 2kmonitor:text-4xl">
                HighFives
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              {mainMenu &&
                mainMenu.map((menuItem, index) => (
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
                    {menuItem?.subtitle && (
                      <>
                        <svg
                          height="6"
                          viewBox="0 0 12 6"
                          width="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="m9.21966991 5.78033009c.29289322.29289321.76776696.29289321 1.06066019 0 .2928932-.29289322.2928932-.76776696 0-1.06066018l-4.50000001-4.5c-.29289322-.29289321-.76776696-.29289321-1.06066018 0l-4.5 4.5c-.29289321.29289322-.29289321.76776696 0 1.06066018.29289322.29289321.76776696.29289321 1.06066018 0l3.96966991-3.96966992z"
                            transform="matrix(-1 0 0 -1 11.25 6)"
                          ></path>
                        </svg>

                        <div className="w-[700px] top-24 group-hover:top-16 rounded-xl gap-x-4 px-[1.25rem] py-[1.25rem] bg-[#fff] absolute invisible group-hover:visible left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0   group-hover:opacity-100  border border-black ">
                          <div className="grid grid-cols-2  ">
                            {Object.keys(menuItem.subtitle).map(
                              (contentKey, index) => (
                                // Her bir "contentKey" için bu döngü çalışacak
                                <div
                                  key={index}
                                  className="w-[321px] flex flex-col items-start justify-start text-justify  flex-wrap p-3 hover:bg-[#e6ebee] rounded-xl px-7 "
                                >
                                  <h2 className="text-bold text-lg font-poppins text-[#232e35]  ">
                                    {menuItem.subtitle[contentKey].title}
                                  </h2>
                                  <p className="text-[#656d72] text-[0.875rem] font-ubuntu ">
                                    {menuItem.subtitle[contentKey].comment}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </Link>
                ))}
              {currentUser && currentUser.usertoken == undefined ? (
                <div className="flex gap-x-2">
                  <Link
                    to={"/login"}
                    className="relative flex items-center justify-center font-serif gap-x-2 p-2 mobile:px-1 laptop1:px-2 desktop1:px-3  text-base group  "
                  >
                    <span
                      className={classNames(
                        "font-roboto whitespace-nowrap before:absolute before:bottom-0 before:content-[''] before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:left-1/2 before:h-1 before:bg-tgold group-hover:before:w-full before:rounded-3xl before:transition-all before:duration-300 before:ease-in-out "
                      )}
                    >
                      Giriş Yap
                    </span>
                  </Link>
                  <Link
                    to={"/register"}
                    className="whitespace-nowrap font-bold bg-tgold  rounded-full text-white mobile:text-base mobile:py-1 mobile:px-4  desktop1:py-2 desktop1:px-5 "
                  >
                    Kayıt Ol
                  </Link>
                </div>
              ) : (
                <Link
                  to={"/dashboard"}
                  className="whitespace-nowrap font-bold bg-tgold  rounded-full text-white mobile:text-base mobile:py-2 mobile:px-4  desktop1:py-2 desktop1:px-5 "
                >
                  Kontrol Paneli
                </Link>
              )}
              <DarkLightMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
