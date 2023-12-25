import React, { useState } from "react";
import LeftSideFirstPage from "./LeftSide/leftSideFirstPage";
import LeftSideSecondPage from "./LeftSide/leftSideSecondPage";
import classNames from "classnames";
import RightSideBookModal from "./RightSide";
import { useCurrentUser } from "../../store/currentUser/hooks";

// eslint-disable-next-line react/prop-types
function CreateBooksModals({ close }) {
  const { currentUser } = useCurrentUser();
  const [activePageIndex, setActivePageIndex] = useState(0);
  const pageCount = 2;
  const [bookData, setBookData] = useState({
    title: currentUser.usermail[0].toUpperCase(),
    hour: 1,
    minuets:0,
    invitedPeople:[],
  });
  const pages = Array.from({ length: pageCount }, (_, index) => index);
  function changePage(selectedIndex) {
    setActivePageIndex(selectedIndex);
  }
  const leftSidePages = [
    <LeftSideFirstPage
      key="page1"
      bookData={bookData}
      setBookData={setBookData}
    />,
    <LeftSideSecondPage
      key="page2"
      bookData={bookData}
      setBookData={setBookData}
    />,
  ];

  return (
    <div className="w-full  max-h-[555px] relative   border-1 border-[#32414a] shadow-md rounded-xl text-[#F4F5F7] block ">
      <div className="absolute top-1 right-1 z-[2]">
        <button
          className="w-7 h-7 border-none flex items-center justify-center"
          onClick={close}
        >
          <svg viewBox="0 0 16 16" className="h-[1rem]">
            <path
              fill="currentColor"
              d="M2.3 2.3a1 1 0 011.4 0L8 6.6l4.3-4.3a1 1 0 011.3 0h.1c.4.4.4 1 0 1.4L9.4 8l4.3 4.3c.4.4.4 1 0 1.3v.1a1 1 0 01-1.4 0L8 9.4l-4.3 4.3a1 1 0 01-1.3 0h-.1a1 1 0 010-1.4L6.6 8 2.3 3.7a1 1 0 010-1.3z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex max-h-[555px] ">
        <div className="flex-1 flex flex-col py-6 ">
          <div className="flex justify-center mb-5">
            <span className="flex items-center gap-x-2">
              {pages.map((pageIndex) => (
                <span
                  key={pageIndex}
                  onClick={(e) => {
                    changePage(pageIndex);
                    e.preventDefault();
                  }}
                  className={classNames(
                    "w-3 h-3 rounded-full bg-[color:var(--color-base)]  p-1 cursor-pointer",
                    {
                      "w-4 h-4 bg-[color:var(--color-primary)] border border-[color:var(--color-primary)]":
                        activePageIndex === pageIndex,
                    }
                  )}
                ></span>
              ))}
            </span>
          </div>
          <div className="px-10 min-h-[475px]  w-full overflow-hidden">
            {leftSidePages[activePageIndex] &&
              React.cloneElement(leftSidePages[activePageIndex], {
                onClick: (selectedIndex) => {
                  changePage(selectedIndex);
                },
              })}
          </div>
        </div>
        <RightSideBookModal bookData={bookData}/>
      </div>
    </div>
  );
}

export default CreateBooksModals;
