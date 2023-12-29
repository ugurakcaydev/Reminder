/* eslint-disable react/prop-types */
import classNames from "classnames";

function BenefitPanel({ index, title, description }) {
  return (
    <div
      className={classNames(
        "flex-1 m-[0.675rem] py-[0.75rem] px-[1.5625rem]   flex flex-col gap-y-3 h-[300px] items-center  max-w-[343.95px]",
        {
          "border-r border-r-[color:var(--color-base)] border-l border-l-[color:var(--color-base)]":
            index == 1,
        }
      )}
    >
      <div className="flex relative items-center justify-center w-[48px] h-[48px] ">
        <svg
          width={48}
          height={48}
          viewBox="0 0 104 104"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#2a9d8f"
            d="m722-7c43.68 0 52 8.32 52 52s-8.32 52-52 52-52-8.32-52-52c0-43.68 8.32-52 52-52z"
            transform="translate(-670 7)"
          ></path>
        </svg>
        <img
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[24px] w-auto"
          src="https://youcanbook.me/hubfs/Icons/tick.svg"
        />
      </div>

      <h3 className=" text-[1.25rem] font-bold text-center text-[color:var(--color-base)] ">
        {title}
      </h3>
      <div className="text-center text-[16px]  text-[color:var(--color-base-secondary)] ">
        {description}
      </div>
    </div>
  );
}

export default BenefitPanel;
