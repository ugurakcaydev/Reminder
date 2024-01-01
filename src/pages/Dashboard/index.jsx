import { setModal } from "../../store/modal/actions";

import { useCurrentUser } from "../../store/currentUser/hooks";
import { useEffect, useState } from "react";
import BookingButtons from "../../components/bookingButtons";
import { DeleteMeeting, GetActiveMeetings } from "../../api/BookData";

function Dashboard() {
  const [meetings, setMeetings] = useState([]);
  const { currentUser } = useCurrentUser();
  const [loading, setLoading] = useState(true);
  const butttonSvgPath = [
    "M5 3h1a1 1 0 01.12 2H5a3 3 0 00-.18 6H6a1 1 0 01.12 2H5a5 5 0 01-.22-10H6zm6 0a5 5 0 010 10h-1a1 1 0 010-2h1a3 3 0 000-6h-1a1 1 0 110-2zm0 4a1 1 0 01.12 2H4.88a1 1 0 010-2H11z",
    "M11 0a1 1 0 011 1h2a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3c0-1.1.9-2 2-2h2a1 1 0 112 0h4a1 1 0 011-1zm3 8H2v6h12V8zm-9 2a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM4 3H2v3h12V3h-2a1 1 0 01-2 0H6a1 1 0 11-2 0z",
    "M12 0a3 3 0 1 1-1.87 5.35l-3.2 2a3.01 3.01 0 0 1 0 1.3l3.2 2a3 3 0 1 1-1.06 1.7l-3.2-2a3 3 0 1 1 0-4.7l3.2-2A3.01 3.01 0 0 1 12 0Zm0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
    "M10.3.3a1 1 0 011.4 0l4 4c.4.4.4 1 0 1.4l-10 10a1 1 0 01-.7.3H1a1 1 0 01-1-1v-4c0-.3.1-.5.3-.7zM8 5.4l-6 6V14h2.6l6-6L8 5.4zm3-3L9.4 4 12 6.6 13.6 5 11 2.4z",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await GetActiveMeetings(currentUser.usertoken);

        // Gelen veri varsa hemen durumu güncelle
        setMeetings(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false); // Hata durumunda da durumu güncelle
      }
    };

    // currentUser.usertoken bağımlılığı ile sadece usertoken değiştiğinde çağrılacaktır.
    fetchData();
  }, [currentUser.usertoken]);

  return (
    <div className="w-full  flex gap-x-5  px-5">
      <div className="dashboardleft w-[70%] px-2">
        <section className="w-full flex  justify-between items-center mb-3">
          <div className="flex gap-x-4 items-center">
            <p className="text-2xl font-semibold">Tüm rezervasyon sayfaları</p>
            <button
              onClick={() => setModal("createBooks")}
              className="w-[2rem] h-[2rem] rounded-full p-.5 hover:bg-gray-600 flex items-center justify-center"
            >
              <svg className="h-[1rem]" viewBox="0 0 16 16">
                <path
                  fill="currentColor"
                  d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 3a1 1 0 00-1 1v3H4a1 1 0 100 2h3v3a1 1 0 002 0V9h3a1 1 0 000-2H9V4c0-.6-.4-1-1-1z"
                ></path>
              </svg>
            </button>
          </div>
        </section>
        {meetings?.length > 0 && (
          <div className="w-full flex items-center justify-between  py-4">
            <p>Oluşturulan toplantı sayısı</p>
            {meetings?.length}
          </div>
        )}
        <div className="flex flex-col w-full justify-between text-[color:var(--color-base)]   gap-y-2">
          {loading ? (
            <div className="w-full min-h-[300px] flex items-center justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : (
            <>
              {currentUser && meetings?.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-xl font-semibold w-full min-h-[300px] bg-[color:var(--bg-base-secondary)] rounded-lg gap-y-5">
                  <p>İlk toplantınızı şimdi oluşturun..</p>
                  <button
                    className="px-3 py-1.5 rounded-full bg-[color:var(--color-primary)] text-base"
                    onClick={() => setModal("createBooks")}
                  >
                    Toplantı oluştur
                  </button>
                </div>
              ) : (
                meetings?.map((meeting) => (
                  <div
                    key={meeting.Id}
                    className="w-full bg-[color:var(--bg-base-secondary)] transition-all duration-500 rounded-md flex justify-between items-center px-4 py-4 group"
                  >
                    <div className="flex items-center justify-start gap-x-5">
                      <div className="bg-gray-300 rounded-full w-12 h-12 text-center flex items-center justify-center" />

                      <div className="flex flex-col justify-center items-start ">
                        <p>{meeting.MeetingName}</p>
                        <p className="text-[color:var(--color-primary)]">
                          {meeting.Email}
                        </p>
                      </div>
                    </div>

                    <div className="flex  items-center justify-end ">
                      {butttonSvgPath?.map((path, index) => (
                        <div key={index}>
                          <BookingButtons
                            path={path}
                            index={index}
                            meeting={meeting}
                          />
                        </div>
                      ))}
                      <button
                        onClick={(e) => {
                          if (
                            window.confirm(
                              `${meeting.MeetingName} adlı toplantıyı silmek istediğinize emin misiniz ?`
                            )
                          ) {
                            DeleteMeeting(currentUser.usertoken, meeting.Id);
                            window.location.reload();
                          }
                          e.preventDefault();
                        }}
                        className="w-[2rem] h-[2rem] rounded-full p-.5 hover:bg-[color:var(--bg-secondary)] flex items-center justify-center "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash text-red-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>
      <div className="dashboardright flex-1 flex flex-col px-2 gap-y-4">
        <button
          onClick={() => {
            setModal("createBooks");
          }}
          className="w-full rounded-full py-1.5 flex items-center justify-center bg-[color:var(--color-primary)]"
        >
          Rezervasyon sayfası oluştur
        </button>
        <div className="flex items-center justify-start p-2 rounded-md gap-x-3 bg-[color:var(--bg-secondary)] transition-all duration-500">
          <div className="w-10 h-10 rounded-full bg-white" />
          <div className="flex-1 ">
            <p className="font-bold text-lg">Bir dosya oluştur</p>
            <p className="text-sm ">
              Rezervasyon sayfanızı organize etmek ve gruplandırmak için
              dosyaları kullanın
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
