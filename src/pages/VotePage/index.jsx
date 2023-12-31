// VotePage component
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import classNames from "classnames";
import { Button } from "rsuite";

//Vote Results Send
import { GetSelectedMeeting } from "../../api/BookData";
import { useCurrentUser } from "../../store/currentUser/hooks";
import { SendVote } from "../../api/BookData";

export default function VotePage() {
  const { pathname } = useLocation();
  const meetingId = pathname.split("/").pop();
  let votingClosed = false;
  const { currentUser } = useCurrentUser();
  const [selectedDaysId, setSelectedDaysId] = useState([]);
  const [meetingDetails, setMeetingDetails] = useState(null);
  const [showMeet, setShowMeet] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetSelectedMeeting({
          _token: currentUser.usertoken,
          _meetingId: meetingId,
        });


        if (!meetingDetails) {
          // Eğer meetingDetails zaten set edilmişse tekrar set etme
          setMeetingDetails(response);

          if (response) {
            let isInvitedUser = response?.GetAllMeetingItemDto?.$values.some(
              (e) => e.Email === currentUser.usermail
            );

            let isHost = response.Email === currentUser.usermail;

            if (isHost || isInvitedUser) {
              setShowMeet(true);
            } else {
              // Eğer kullanıcı davet edilmiş bir kullanıcı değilse ve toplantının sahibi de değilse, bir şey yapma
              // Örneğin: console.log("Bu toplantıya davet edilmiş veya sahibi değilsiniz.");
            }
          }
        }
        return totalVoteCount;
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentUser, meetingDetails, meetingId]);

  //kutucukları seçtiğimizde çalışıyor
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

  //butona tıkladığında
  const handleVote = async () => {
    // eslint-disable-next-line no-unused-vars
    const response = await SendVote({
      _token: currentUser.usertoken,
      _email: currentUser.usermail,
      _meetingId: meetingDetails.Id,
      _selectedDaysId: selectedDaysId,
    });

    response.ok ? (
      toast.success('Oyunuz başarıyla kullanıldı'),
      setTimeout(() => {
        window.location.reload()
      }, 6000)

      // oyunuz başarıyla kullanıldı ve sayfa yenileme işlemleri
    ) : (
      toast.error('Daha önce oy kullandınız!')

      //zaten daha önce oy kullandın
    )
  };

  // console.log("Meeting details", meetingDetails)


  const totalVoteCount = meetingDetails?.GetAllMeetingDetailDtos?.$values.reduce((acc, v) => acc + v.VoteCount, 0);
  const votePercentage = (id) => {
    if (totalVoteCount === 0) {
      return 0;
    }
    const optionVoteCount = meetingDetails?.GetAllMeetingDetailDtos?.$values.find((e) => e.MeetingDetailId === id) || 0;
    const percentage = (optionVoteCount.VoteCount / totalVoteCount) * 100;

    return isNaN(percentage) ? 0 : percentage;
  };

  return (

    <div className="w-full h-[100vh] flex items-center justify-center  p-2 text-[#fff]">
      <ToastContainer />
      {showMeet ? (
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
                  <div className="text-[#F7B22C]">
                    {meetingDetails.MeetingName}
                  </div>
                </div>
                <div className="flex w-fit items-center justify-start gap-x-1 border px-2 py-0.5 rounded-full  border-gray-500">
                  <svg className="w-4 h-4" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2c.5 0 1 .4 1 .9V7h1c.5 0 1 .4 1 .9V8c0 .6-.4 1-1 1H8a1 1 0 01-1-.9V5c0-.6.4-1 1-1z"
                    ></path>
                  </svg>
                  <div>
                    {meetingDetails.Hours == 0
                      ? ""
                      : meetingDetails.Hours + " saat "}
                    {meetingDetails.Minute == 0
                      ? ""
                      : meetingDetails.Minute + " dakika "}
                  </div>
                </div>
                {/* <div className={classNames("text-white mt-2 mb-0.5 w-full text-center font-semibold text-base",
                  {
                    "Anket Detayları": currentUser?.userId === meetingDetails?.UserId,
                    "- Gün ve Saati Oylayın -": currentUser?.userId !== meetingDetails?.UserId,
                  }


                )}>
                </div> */}
                <div className="text-white mt-2 mb-0.5 w-full text-center font-semibold text-base">

                  {meetingDetails.UserId === currentUser.userId ? (
                    <>
                      Toplantı Seçenekleri ve Yüzdeleri
                    </>) :
                    (<> - Gün ve Saati Oylayın - </>)}
                </div>
                <div className="flex flex-col gap-y-5">
                  {meetingDetails &&
                    meetingDetails.GetAllMeetingDetailDtos?.$values.map(
                      (days) => {
                        let saat =
                          parseInt(days.MeetingStart.split(":")[0]) +
                          meetingDetails.Hours;
                        let dakika =
                          parseInt(days.MeetingStart.split(":")[1]) +
                          meetingDetails.Minute;

                        if (dakika >= 60) {
                          saat += 1;
                          dakika %= 60;
                        }

                        return (
                          <div
                            key={days.$id}
                            className={classNames("w-full flex items-center justify-start gap-x-2 ", {
                              "justify-between": meetingDetails.UserId === currentUser.userId
                            })}
                          >
                            {meetingDetails.UserId === currentUser.userId ? (<></>) : (<>
                              <input
                                className="w-4 h-4"
                                type="checkbox"
                                onChange={() =>
                                  handleCheckboxChange(days.MeetingDetailId)
                                }
                                disabled={votingClosed}
                              />
                            </>)}

                            {`${days.MeetingsDay} | ${days.MeetingStart} : ${saat < 10 ? "0" + saat : saat
                              }:${dakika < 10 ? "0" + dakika : dakika}`}
                            {meetingDetails.UserId === currentUser.userId ? (<div>
                              {`${votePercentage(days.MeetingDetailId).toFixed(2)}%`}
                            </div>) : (<></>)
                            }
                          </div>
                        );
                      }
                    )}
                </div>
              </div>

              {meetingDetails.UserId === currentUser.userId ? (<></>) : (
                <>
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
                </>
              )}

            </div>
            <div className="flex-1 bg-[#1d2629]  p-4 rounded-tr-3xl border-l border-l-[#F7B22C] flex flex-col gap-y-3 overflow-auto">
              <div className="w-full text-center mb-3 text-base font-semibold text-[#F7B22C]">
                Davet Edilen Kullanıcılar
              </div>
              {meetingDetails.GetAllMeetingItemDto?.$values.map((person, i) => (
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
      ) : (
        <div className="flex flex-col items-center justify-center text-xl font-semibold w-[900px] min-h-[300px] bg-[#1A1A1A] rounded-lg gap-y-5">
          Bu Oylamaya Erişiminiz Yok...
        </div>
      )
      }
    </div >
  );
}
