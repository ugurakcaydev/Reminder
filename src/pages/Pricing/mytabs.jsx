import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
//import { Fragment } from "react";
import { pricePolicy } from "../../const/const";

export default function MyTabs() {
  const [selectPriceProp, setSelectPriceProp] = useState(0);

  return (
    <div className="w-full px-2 py-16">
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex justify-center space-x-4 rounded-xl  p-1">
          {Object.keys(pricePolicy).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-[200px] rounded-lg border-2 border-black bg-white   py-2.5 text-sm font-medium leading-5 text-black",
                  " ",
                  selected
                    ? "!bg-tgold !outline-none transition-all duration-300 ease-in-out  shadow"
                    : " hover:bg-tgold/[0.12] transition-all duration-300 ease-in-out hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(pricePolicy).map((priceOptions, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "flex justify-between gap-x-5 mt-3 rounded-xl p-3 "
              )}
            >
              {priceOptions.map((priceDetail) => (
                <button
                  onClick={() => setSelectPriceProp(priceDetail.id)}
                  className={classNames("bg-gray-100  p-5  overflow-hidden  flex-1 rounded-xl border border-gray-400", {
                    "": priceDetail.id == selectPriceProp, //seçilene özel css verilecek
                  })}
                  key={priceDetail.id}
                >
                  <div className="h-full items-start  rounded-lg  flex flex-col gap-y-2 relative overflow-hidden">
                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                      {priceDetail.title}
                    </h2>
                    <h1 className="text-4xl text-start w-full text-gray-900 pb-4 mb-4 border-b border-gray-300 leading-none">
                      {priceDetail.price}{" "}
                      {priceDetail.price != "Ücretsiz" ? "TL" : ""}
                    </h1>
                    <div className="flex flex-col gap-y-2 items-center text-gray-600 mb-2">
                      {priceDetail.features.map((features, index) => (
                        <div
                          key={index}
                          className="w-full flex justify-start items-center gap-x-2"
                        >
                          <svg
                            fill="currentColor"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                          {features}
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                      Button
                      <svg
                        fill="none"
                        stroke="currentColor"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                      Literally you probably haven t heard of them jean shorts.
                    </p>
                  </div>
                </button>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
