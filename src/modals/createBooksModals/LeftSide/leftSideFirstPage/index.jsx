import SelectBookHour from "../../../../components/createBookForm/selectBookHour";
import SelectBookDays from "../../../../components/createBookForm/selectBookDays";
import PropTypes from "prop-types";
import { setBookData } from "../../../../store/bookData/actions";
import { useEffect, useState } from "react";
import { useBookData } from "../../../../store/bookData/hook";

function LeftSideFirstPage({ onClick }) {
  const [selectedData, setselectedData] = useState([]);
  const bookdata = useBookData();
  console.log(bookdata,"aa");
  const finalSelectedData = (data) => {
    setselectedData(data);
  };

  useEffect(() => {
    console.log({ bookdata });
  }, [bookdata]);

  return (
    <div className="relative">
      <div className="opacity-100 flex flex-col justify-between h-full">
        <form action="">
          <div className="text-center flex justify-center items-center mb-2  ">
            <h2 className="font-semibold text-xl">
              Müsaitlik durumunuzu ayarlayın
            </h2>
          </div>
          <div className="flex flex-col text-left ">
            <SelectBookHour />
            <SelectBookDays finalSelectedData={finalSelectedData} />
          </div>
        </form>
        <div className="mt-10 flex text-center justify-center items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              onClick(1);
            }}
            className="rounded-full w-full bg-[color:var(--color-primary)] hover:bg-[#f7b32ce1] relative cursor-pointer font-semibold text-base"
          >
            <span className="px-5 h-10 overflow-hidden text-base flex text-center justify-center items-center">
              <span>Sonraki adım</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

LeftSideFirstPage.propTypes = {
  onClick: PropTypes.func,
};

export default LeftSideFirstPage;
