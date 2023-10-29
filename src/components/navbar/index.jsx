import { useState } from "react";
import { mainMenu } from "../../const/navbarMenu";
import { useEffect } from "react";
import { setColor, setBackgroundColor } from "../../store/appearance/actions";
import { useAppearance } from "../../store/appearance/hooks";
import classNames from "classnames";

export default function Navbar() {
  const appearance = useAppearance();
  const { /*backgroundColor*/ color } = useAppearance(); //backgroundcolor koşul kullanılıcaksa açılıcak

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
    console.log(appearance.backgroundColor);
    console.log(appearance.color);
    //renkleri tanımla
  }, [appearance]);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center font-inter text-[color:var(--color-primary)] bg-transparent  transition-translate duration-200 text-xl ${scrollY > 10 ? "translate-y-6 " : ""
          }`}
      >
        <div
          className={classNames(
            " flex justify-center items-center  py-4 mobile:px-0  bg-transparent transition-translate duration-200 ",
            {
              "text-golden !bg-[#2a2a2a] shadow-sm shadow-gray-400 rounded-full":
                scrollY > 10,
            }
          )}
        >
          <div className="w-full flex justify-between gap-x-28 px-5">
            <div className="flex  items-center gap-x-2 ">
              <img
                className="mobile:hidden laptop2:block  h-10"
                src="../../../src/assets/images/booking.png"
                alt="logo"
              />
              <span className=" font-bold tracking-tight text-golden laptop1:text-2xl  desktop2:text-3xl 2kmonitor:text-4xl">
                YouCanBookMe
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              {mainMenu &&
                mainMenu.map((menuItem, index) => (
                  <>
                    <div className="flex-col relative justify-center items-center p-2 bg-red-100 group">
                      <div className="flex items-center gap-x-2">
                        <div>
                          {menuItem.name}

                        </div>
                        <div>
                          {menuItem?.icon && (
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
                              </svg></>
                          )}
                        </div>
                      </div>
                      {menuItem?.subtitle && (
                        <>
                          <div className=" pt-10 absolute max-h-[40em] left-1/2 top-11 -translate-x-1/2  border border-yellow-500 invisible group-hover:visible">
                            <div className="w-[700px] flex flex-start items-center flex-wrap py-[1.25rem] px-[1.5rem]  opacity-0 transition-opacity  border border-black rounded-xl group-hover:flex  group-hover:opacity-100 ">
                              <div className="w-[calc(50%-1.25rem)] m-[0.625rem] border border-black hover:bg-[#e6ebee] rounded-xl px-0">
                                <a href="" className="rounded-2xl block h-full py-[0.8rem] px-[1.25rem] relative text-left  ">
                                  <div className="mb-[0.3rem] text-bold text-lg font-poppins text-[#232e35]">deneme</div>
                                  <p className="text-[#232e35] text-[0.875rem] ">pppp11111</p>
                                </a>

                              </div>
                              <div className="w-[calc(50%-1.25rem)] m-[0.625rem] border border-black">
                                <a href="" className="rounded-2xl block h-full py-[0.8rem] px-[1.25rem] relative text-left  ">
                                  <div className="mb-[0.3rem] text-[#656d72] ">divvv222</div>
                                  <p className="text-[#232e35] text-[0.875rem] ">pppp222</p>
                                </a>
                              </div>

                            </div>

                          </div>
                        </>
                      )}

                    </div>
                  </>
                  //   <button
                  //     key={index}
                  //     className=" relative flex items-center justify-center font-serif gap-x-2 p-2 mobile:px-1 laptop1:px-2 desktop1:px-3  text-base group"
                  //   >
                  //     <span className="whitespace-nowrap before:absolute before:bottom-0 before:content-[''] before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:left-1/2 before:h-1 before:bg-golden group-hover:before:w-full before:rounded-3xl before:transition-all before:duration-300 before:ease-in-out">
                  //       {menuItem.name}
                  //     </span>
                  //     { menuItem?.subtitle && (
                  //       <>

                  //         <svg
                  //           height="6"
                  //           viewBox="0 0 12 6"
                  //           width="12"
                  //           xmlns="http://www.w3.org/2000/svg"
                  //         >
                  //           <path
                  //             fill="currentColor"
                  //             d="m9.21966991 5.78033009c.29289322.29289321.76776696.29289321 1.06066019 0 .2928932-.29289322.2928932-.76776696 0-1.06066018l-4.50000001-4.5c-.29289322-.29289321-.76776696-.29289321-1.06066018 0l-4.5 4.5c-.29289321.29289322-.29289321.76776696 0 1.06066018.29289322.29289321.76776696.29289321 1.06066018 0l3.96966991-3.96966992z"
                  //             transform="matrix(-1 0 0 -1 11.25 6)"
                  //           ></path>
                  //         </svg>
                  //         <div className="pt-[2.8rem] px-[1.25rem] bg-red-500 opacity-100  visible top-24">
                  //           <div className="w-[700px]  top-12 rounded-xl gap-x-4 px-[1.25rem] py-[1.25rem] bg-[#fff] absolute hidden left-1/2 -translate-x-1/2 transition-all duration-700 opacity-0 group-hover:flex  group-hover:opacity-100 group-hover:pointer-events-auto border border-black">
                  //             <div className="grid grid-cols-2  ">
                  //               {Object.keys(menuItem.subtitle).map((contentKey, index) => (
                  //                 // Her bir "contentKey" için bu döngü çalışacak
                  //                 <div key={index} className="w-[321px] flex flex-col items-start justify-start text-justify  flex-wrap p-3 hover:bg-[#e6ebee] rounded-xl px-7">
                  //                   <h2 className="text-bold text-lg font-poppins text-[#232e35] ">
                  //                     {menuItem.subtitle[contentKey].title}
                  //                   </h2>
                  //                   <p className="text-[#656d72] text-[0.875rem]">
                  //                     {menuItem.subtitle[contentKey].comment}
                  //                   </p>
                  //                 </div>
                  //               ))}
                  //             </div>
                  //           </div>
                  //         </div>
                  //       </>
                  //     )}
                  //   </button>

                ))}
              <button className="whitespace-nowrap font-bold bg-golden  rounded-full text-white mobile:text-base mobile:py-0 mobile:px-4  desktop1:py-2 desktop1:px-5 ">
                Sign up Free
              </button>
              <label className="swap swap-rotate transition-all duration-500 hover:bg-blue-300 rounded-full p-1">
                <input type="checkbox" />
                <svg
                  onClick={() => {
                    setColor({
                      ...color,
                      primary: "#fff",
                    });
                    setBackgroundColor({
                      primary: "rgb(25,29,32)",
                    });
                  }}
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <svg
                  onClick={() => {
                    setColor({
                      ...color,
                      primary: "#000",
                    });
                    setBackgroundColor({
                      primary: "#fff",
                    });
                  }}
                  className="swap-off fill-current w-10 h-10"
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
