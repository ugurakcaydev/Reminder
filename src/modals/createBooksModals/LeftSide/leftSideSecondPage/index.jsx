/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import InvitePeopleInput from "./InvitePeopleInput";
import classNames from "classnames";
function LeftSideSecondPage({ bookData, setBookData }) {
  const [invitedPeople, setInvitedPeople] = useState(bookData.invitedPeople);
  const changeBookData = (event) => {
    setBookData({ ...bookData, title: event.target.value });
  };
  return (
    <div className="relative">
      <div className="opacity-100">
        <form
          action="
              "
          className="min-h-[410px] flex flex-col gap-y-2 "
        >
          <div className="text-center flex justify-center items-center ">
            <h2 className="font-semibold text-xl">Add details</h2>
          </div>
          <div className="flex gap-x-4 text-left mb-4">
            <div className="w-20 h-20 rounded-full bg-gray-500"></div>
            <div className="flex flex-1 flex-col justify-start gap-y-2">
              <p className="font-semibold text-base ">Booking page title</p>
              <div className="rounded-lg  group overflow-auto border border-[#32414a] bg-[#1d2629] hover:bg-[#2d3b45]  ">
                <div className="w-full h-full overflow-auto ">
                  <div className="cursor-pointer h-full transition-all duration-500 min-h-[40px]">
                    <input
                      className="border-none px-2 w-full h-full bg-[#1d2629] focus:outline-none "
                      type="text"
                      value={bookData.title}
                      onChange={changeBookData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-start gap-y-4">
            <p className="font-semibold text-base ">Invite people</p>
            {/* <UserEmailAutoComplate users={users} /> */}
            <InvitePeopleInput
              invitedPeople={invitedPeople}
              setInvitedPeople={setInvitedPeople}
            />
            <div className="w-full  h-48 rounded-lg  bg-[#1d2629] ">
              {invitedPeople && invitedPeople.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  Henüz Davet Yok
                </div>
              ) : (
                <div className="flex flex-col gap-y-1 max-h-48 overflow-auto">
                  {invitedPeople?.map((people, index) => (
                    <div
                      key={people.id}
                      className="text-white group flex justify-between items-center  px-4 py-2 bg-gray-800 hover:bg-[#2d3b45]"
                    >
                      <div className="flex justify-start items-center gap-x-3 ">
                        <div className="text-lg font-semibold">{`${
                          index + 1
                        })`}</div>
                        <div className="flex items-center justify-start gap-x-2">
                          <div className="w-7 h-7 rounded-full bg-gray-500"></div>
                          <p className="text-sm font-serif">{people.email}</p>
                        </div>
                      </div>
                      <div className="w-[2rem] h-[2rem] rounded-full cursor-pointer  hover:bg-gray-500 flex items-center justify-center">
                        <DeleteIcon
                          onClick={(e) => {
                            e.preventDefault();
                            setInvitedPeople(
                              invitedPeople.filter((_, i) => i !== index)
                            );
                          }}
                          className="rounded-full invisible group-hover:visible text-red-500 "
                        ></DeleteIcon>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="w-full  flex items-center justify-end gap-x-3">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (window.confirm("Silmek istediğinize emin misiniz ?")) {
                  setBookData({ ...bookData, invitedPeople: [] });
                  setInvitedPeople([]);
                }
              }}
              className={classNames(
                "py-2 px-4 h-full bg-red-600 rounded-lg flex items-center my-0.5 justify-center focus:outline-none transition-colors duration-700",
                {
                  "!bg-gray-500 !pointer-events-none !cursor-not-allowed":
                    invitedPeople.length == 0,
                }
              )}
            >
              Temizle
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setBookData({ ...bookData, invitedPeople: invitedPeople });
              }}
              className={classNames(
                "py-2 px-4 h-full bg-green-600 rounded-lg flex items-center my-0.5 justify-center focus:outline-none transition-colors duration-700",
                {
                  "!bg-gray-500 !pointer-events-none !cursor-not-allowed":
                    invitedPeople.length == 0,
                }
              )}
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LeftSideSecondPage;

LeftSideSecondPage.propTypes = {
  onClick: PropTypes.func,
  bookData: PropTypes.object,
  setBookData: PropTypes.any,
};
