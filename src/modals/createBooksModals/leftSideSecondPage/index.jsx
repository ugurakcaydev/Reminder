/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useCurrentUser } from "../../../store/currentUser/hooks";
import UserEmailAutoComplate from "./userEmailAutoComplate";
function LeftSideSecondPage({ onClick }) {
  const { currentUser } = useCurrentUser();
  const users = [
    { id: 1, email: "ornek1@example.com" },
    { id: 2, email: "ornek2@example.com" },
    { id: 3, email: "ornek3@example.com" },
    { id: 4, email: "ornek4@example.com" },
    { id: 5, email: "ornek5@example.com" },
    { id: 6, email: "ornek6@example.com" },
    { id: 7, email: "ornek7@example.com" },
    // Diğer kullanıcılar...
  ];
  return (
    <div className="relative">
      <div className="opacity-100">
        <form
          action="
              "
          className="min-h-[410px] flex flex-col gap-y-2 "
        >
          <div className="text-center flex justify-center items-center ">
            <h2 className="font-semibold text-xl">Detay ekleyin</h2>
          </div>
          <div className="flex gap-x-4 text-left mb-4">
            <div className="w-20 h-20 rounded-full bg-gray-500"></div>
            <div className="flex flex-1 flex-col justify-start gap-y-2">
              <p className="font-semibold text-base ">Rezervasyon sayfası başlığı</p>
              <div className="rounded-lg  group overflow-auto border border-[#32414a] bg-[#1d2629] hover:bg-[#2d3b45]  ">
                <div className="w-full h-full overflow-auto ">
                  <div className="cursor-pointer h-full transition-all duration-500 min-h-[40px]">
                    <input
                      className="border-none px-2 w-full h-full bg-[#1d2629] focus:outline-none "
                      type="text"
                      placeholder={currentUser.usermail[0].toUpperCase()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-start gap-y-2">
            <p className="font-semibold text-base ">İnsanları davet edin</p>
            <UserEmailAutoComplate users={users} />
            {/* <div className="rounded-lg  group overflow-auto border border-[#32414a] bg-[#1d2629] hover:bg-[#2d3b45]  ">
              <div className="w-full h-full overflow-auto ">
                <div className="cursor-pointer h-full transition-all duration-500 min-h-[40px]">
                  
                </div>
              </div>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LeftSideSecondPage;

LeftSideSecondPage.propTypes = {
  onClick: PropTypes.func,
};
