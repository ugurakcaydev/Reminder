// VotePage component
import { useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { Button } from "rsuite";

//Vote Results Send
import { sendDataToApi } from "../../api/BookingVoteData";
import { useCurrentUser } from "../../store/currentUser/hooks";
import { SendVote } from "../../api/BookData";

export default function VotePage() {
  const location = useLocation();
  const meeting = location.state?.meetingKey;

  //  console.log("TOPLANTI DETAYLARI", meeting);
  const { currentUser } = useCurrentUser();
  const [votingClosed, setVotingClosed] = useState(false);
  const [selectedDaysId, setSelectedDaysId] = useState([]);

  const handleCheckboxChange = (_selectedDayId) => {
    if (!votingClosed) {
      setSelectedDaysId((prevSelectedDays) => {
        // Eğer _selectedDayId zaten mevcut ise, çıkararak yeni bir dizi oluştur.
        if (prevSelectedDays.includes(_selectedDayId)) {
          const updatedSelectedDays = prevSelectedDays.filter(
            (dayId) => dayId !== _selectedDayId
          );
          return updatedSelectedDays;
        }

        // _selectedDayId'yi array'e ekleyerek yeni bir dizi oluştur.
        const updatedSelectedDays = [...prevSelectedDays, _selectedDayId];
        return updatedSelectedDays;
      });
    }
  };
  const handleVote = async () => {
    if (votingClosed) {
      console.log("Ankete zaten oy verildi!");
      return;
    }

    await SendVote({
      _token: currentUser.usertoken,
      _email: currentUser.usermail,
      _meetingId: meeting.Id,
      _selectedDaysId: selectedDaysId,
    });

    // const meetingData = {
    //   ...meeting,
    //   selectedDays,
    // };
    // const response = await sendDataToApi(meetingData);
    // console.log("Anket Sonuçları: ", response);
    // setVotingClosed(true);

    // console.log("SEÇİLEN GÜNLER: ", selectedDays);
  };
  return (
    <div className="w-full h-[100vh] flex items-center justify-center  p-2 text-[#fff]">
      {meeting && (
        <div className=" w-[700px] h-[650px] overflow-hidden rounded-xl  z-[1] relative shadow-xl shadow-[rgba(0,0,0,0.35)] ">
          <div
            className="flex bg-[#1d2629] h-full "
            style={{ overflow: "hidden" }}
          >
            <div className="w-1/2 relative px-5 py-6 flex flex-col justify-between">
              <div className="flex flex-col gap-y-5 w-full">
                <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#32414a] " />
                <div
                  className="flex break-words font-semibold text-lg min-h-[30px] gap-x-2"
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  <div>Toplantı Adı:</div>
                  <div className="text-[#F7B22C]">{meeting.MeetingName}</div>
                </div>
                <div className="flex w-fit items-center justify-start gap-x-1 border px-2 py-0.5 rounded-full  border-gray-500">
                  <svg className="w-4 h-4" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2c.5 0 1 .4 1 .9V7h1c.5 0 1 .4 1 .9V8c0 .6-.4 1-1 1H8a1 1 0 01-1-.9V5c0-.6.4-1 1-1z"
                    ></path>
                  </svg>
                  <div>
                    {meeting.Hours == 0 ? "" : meeting.Hours + " saat "}
                    {meeting.Minute == 0 ? "" : meeting.Minute + " dakika "}
                  </div>
                </div>
                <div className="mt-2 mb-0.5 w-full text-center font-semibold text-base">
                  - Gün ve Saati Oylayınız -
                </div>
                <div className="flex flex-col gap-y-5">
                  {meeting.GetAllMeetingDetailDtos?.$values.map((days) => {
                    let saat =
                      parseInt(days.MeetingStart.split(":")[0]) + meeting.Hours;
                    let dakika =
                      parseInt(days.MeetingStart.split(":")[1]) +
                      meeting.Minute;

                    if (dakika >= 60) {
                      saat += 1;
                      dakika %= 60;
                    }

                    return (
                      <div
                        key={days.$id}
                        className="w-full flex items-center justify-start gap-x-2 "
                      >
                        <input
                          className="w-4 h-4"
                          type="checkbox"
                          onChange={() =>
                            handleCheckboxChange(days.MeetingDetailId)
                          }
                          disabled={votingClosed}
                        />
                        {`${days.MeetingsDay} | ${days.MeetingStart} : ${
                          saat < 10 ? "0" + saat : saat
                        }:${dakika < 10 ? "0" + dakika : dakika}`}
                      </div>
                    );
                  })}
                </div>
              </div>

              <Button
                onClick={votingClosed ? undefined : handleVote}
                className={classNames(
                  "px-3 py-1.5 rounded-full bg-[#F7B22C] text-base transition-all duration-500 ease-in",
                  {
                    "!bg-gray-500 !pointer-events-none !cursor-not-allowed":
                      selectedDaysId.length === 0,
                  }
                )}
              >
                Oyla
              </Button>
            </div>
            <div className="flex-1 bg-[#1d2629]  p-4 rounded-tr-3xl border-l border-l-[#F7B22C] flex flex-col gap-y-3 overflow-auto">
              <div className="w-full text-center mb-3 text-base font-semibold text-[#F7B22C]">
                Davet Edilen Kullanıcılar
              </div>
              {meeting.GetAllMeetingItemDto?.$values.map((person, i) => (
                <div
                  className="mb-1 w-full py-1.5 rounded-full flex items-center justify-center bg-[#32414a] font-semibold"
                  key={i}
                >
                  {person.Email}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
