import { Link } from "react-router-dom";
import { dashMenu } from "../../../const/const";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useCurrentUser } from "../../../store/currentUser/hooks";
import { useNavigate } from "react-router-dom";
import DarkLightMode from "../../on/off_theme";
function DashboardNav() {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();
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
      if (currentUser.usertoken) {
        localStorage.removeItem("currentUser");
        localStorage.clear();
      }
      navigate("/login");
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
                src="/images/booking.png"
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
                      {currentUser.usermail[0].toUpperCase()}
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
                              Hesap
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
                              Faturalandırma
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
                              Entegrasyonlar
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
                              Takım yönetimi
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
                              Yükselt
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
                              Çıkış Yap
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <DarkLightMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNav;
