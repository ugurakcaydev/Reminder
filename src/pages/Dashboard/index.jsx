import { setModal } from "../../store/modal/actions";

function Dashboard() {

  return (
    <div className="w-full h-[80vh]  flex gap-x-5  px-5">
      <div className="dashboardleft w-[70%]">
        <div className="flex flex-col w-full justify-between px-2 gap-y-5">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-x-4 items-center">
              <p className="text-2xl font-semibold">
                Tüm rezervasyon sayfaları
              </p>
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

            <div className="flex justify-between items-center gap-x-1">
              <div className="bg-[color:var(--bg-secondary)] transition-all duration-500 flex items-center gap-x-2 p-2 rounded-md">
                <svg className="h-[1rem]" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2c.5 0 1 .4 1 .9V7h1c.5 0 1 .4 1 .9V8c0 .6-.4 1-1 1H8a1 1 0 01-1-.9V5c0-.6.4-1 1-1z"
                  ></path>
                </svg>
                <div>Filteler</div>
              </div>
              <div className="bg-[color:var(--bg-secondary)] transition-all duration-500 flex items-center gap-x-2 p-2 rounded-md">
                <svg className="h-[1rem]" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2c.5 0 1 .4 1 .9V7h1c.5 0 1 .4 1 .9V8c0 .6-.4 1-1 1H8a1 1 0 01-1-.9V5c0-.6.4-1 1-1z"
                  ></path>
                </svg>
                <div>Başlığına göre</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col text-[color:var(--color-base)]  gap-y-1">
            <div className="w-full bg-[color:var(--bg-base-secondary)] transition-all duration-500 rounded-md flex justify-between items-center px-4 py-2">
              <div className="flex items-center justify-start gap-x-5">
                <div className="bg-gray-300 rounded-full w-10 h-10 text-center flex items-center justify-center">
                  görsel
                </div>
                <div className="flex flex-col justify-center items-start gap-y-1">
                  <p>Can Yiğit</p>
                  <p>Can1045.highfives</p>
                </div>
              </div>
              <div className="flex  items-center justify-end">
                <button className="w-[2rem] h-[2rem] rounded-full p-.5 hover:bg-[color:var(--bg-secondary)] flex items-center justify-center">
                  <svg className="h-[1rem]" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M5 3h1a1 1 0 01.12 2H5a3 3 0 00-.18 6H6a1 1 0 01.12 2H5a5 5 0 01-.22-10H6zm6 0a5 5 0 010 10h-1a1 1 0 010-2h1a3 3 0 000-6h-1a1 1 0 110-2zm0 4a1 1 0 01.12 2H4.88a1 1 0 010-2H11z"
                    ></path>
                  </svg>
                </button>
                <button className="w-[2rem] h-[2rem] rounded-full p-.5 hover:bg-[color:var(--bg-secondary)] flex items-center justify-center">
                  <svg className="h-[1rem]" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M11 0a1 1 0 011 1h2a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3c0-1.1.9-2 2-2h2a1 1 0 112 0h4a1 1 0 011-1zm3 8H2v6h12V8zm-9 2a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM4 3H2v3h12V3h-2a1 1 0 01-2 0H6a1 1 0 11-2 0z"
                    ></path>
                  </svg>
                </button>
                <button className="w-[2rem] h-[2rem] rounded-full p-.5 hover:bg-[color:var(--bg-secondary)] flex items-center justify-center">
                  <svg className="h-[1rem]" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M12 0a3 3 0 1 1-1.87 5.35l-3.2 2a3.01 3.01 0 0 1 0 1.3l3.2 2a3 3 0 1 1-1.06 1.7l-3.2-2a3 3 0 1 1 0-4.7l3.2-2A3.01 3.01 0 0 1 12 0Zm0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                    ></path>
                  </svg>
                </button>
                <button className="w-[2rem] h-[2rem] rounded-full p-.5 hover:bg-[color:var(--bg-secondary)] flex items-center justify-center">
                  <svg className="h-[1rem]" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M10.3.3a1 1 0 011.4 0l4 4c.4.4.4 1 0 1.4l-10 10a1 1 0 01-.7.3H1a1 1 0 01-1-1v-4c0-.3.1-.5.3-.7zM8 5.4l-6 6V14h2.6l6-6L8 5.4zm3-3L9.4 4 12 6.6 13.6 5 11 2.4z"
                    ></path>
                  </svg>
                </button>
                <button className="w-[2rem] h-[2rem] rounded-full p-.5 hover:bg-[color:var(--bg-secondary)] flex items-center justify-center">
                  <svg className="h-[1rem]" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M8 12a2 2 0 110 4 2 2 0 010-4zm0-6a2 2 0 110 4 2 2 0 010-4zm0-6a2 2 0 110 4 2 2 0 010-4z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardright flex-1 flex flex-col px-2 gap-y-4">
        <button className="w-full rounded-full py-1.5 flex items-center justify-center bg-[color:var(--color-primary)]">
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
