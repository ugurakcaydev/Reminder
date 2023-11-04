import { OdometerTest } from "../../components/OdometerTest";



export default function Home() {
  
  const bannerLogosSrc = [
    "https://youcanbook.me/hubfs/2022/customer-logos/techstars-white.svg",
    "https://youcanbook.me/hubfs/2022/customer-logos/randstad-white.svg",
    "https://youcanbook.me/hubfs/2022/customer-logos/randstad-white.svg",
    "https://youcanbook.me/hubfs/2022/customer-logos/randstad-white.svg",
  ];
  return (
    <div>
      <div className="flex flex-col relative  bg-[#252725] rounded-tl-[10rem] rounded-br-[10rem] items-center gap-y-3 pt-10 pb-10 h-auto">
        <div className="w-[250px] h-[250px] absolute bottom-0 right-0 rounded-full bg-transparent border-[1rem] border-[#4f1aff]" />
        <div className=" h-auto flex justify-center items-center gap-x-16  py-10 px-5">
          <div className="flex flex-col items-start max-w-[630px] gap-y-5 pl-16">
            <h3 className="text-white text-[3.25rem] font-bold leading-snug">
              Toplantılarınız daha iyisini hak ediyor
            </h3>
            <p className="text-[1.31rem] text-[#bfc4c]">
              Toplantılar için zaman bulma zahmetine son verecek ve
              toplantılarla ilgili manuel görevleri ortadan kaldıracak benzersiz
              bir rezervasyon sayfası oluşturun, böylece müşterilerinize ve
              işinize odaklanabilirsiniz.
            </p>
            <div className="flex justify-between items-center gap-x-3">
              <button className="bg-[#4f1aff] text-white text-center text-[1.25rem] py-[.8rem] px-[1.875rem] rounded-full">
                Create your free booking page
              </button>
              <button className="border-2 border-white rounded-full text-[1.25rem] py-[.8rem] px-[1.875rem] text-center text-white bg-transparent w-[200px] hover:bg-white hover:text-black ease-in-out transition-all duration-300">
                ✨ Take a tour
              </button>
            </div>
            <div className="flex justify-start gap-x-2 items-center text-[#bfb4c8] text-base">
              <span>No credit card required</span>
              <span className="relative pl-3 before:block before:content-[''] before:rounded-full before:h-1 before:w-1 before:left-0.5 before:bg-[#bfb4c8] before:absolute before:top-1/2 before:-translate-y-1/2">
                Free forever
              </span>
              <span className="relative pl-3 before:block before:content-[''] before:rounded-full before:h-1 before:w-1 before:left-0.5 before:bg-[#bfb4c8] before:absolute before:top-1/2 before:-translate-y-1/2">
                Upgrade anytime
              </span>
            </div>
          </div>
          <img
            className=" w-[650px] object-contain"
            src="https://25078520.fs1.hubspotusercontent-eu1.net/hub/25078520/hubfs/youcanbookme-scheduling-1.png?width=1600&height=1196&name=youcanbookme-scheduling-1.png"
            alt=""
          />
        </div>
        <h2 className="text-white text-[1.5rem] mb-[1.25rem] font-bold">
          Trusted by 1M+ users across 100 countries
        </h2>
        <div className="bannerLogo mt-[2.5rem] flex justify-center items-center gap-x-14">
          {bannerLogosSrc.map((src, index) => (
            <>
              <img key={index} src={src} alt="" />
            </>
          ))}
        </div>
      </div>
      <div className="w-full pt-[4.4875rem] flex items-center justify-center text-center">
        <div className="max-w-[75%] px-28 overflow-hidden">
          <h2 className=" text-[2rem] mb-[1.25rem] font-bold text-[color:var(--color-secondary)] ">
            Bookings are your business
          </h2>
          <p className="text-[1.25rem] font-normal text-[color:var(--color-primary)] font-inter text-center">
            YouCanBookMe lets you create the best booking experience for your
            customers — and your business.
          </p>
        </div>
      </div>
      <div className="py-[4.4875rem] flex items-center justify-between  max-w-[73.75em] px-[30px] mx-auto">
        <div className="flex-1 m-[0.675rem] py-[0.75rem] px-[1.5625rem] flex flex-col gap-y-3 h-[254px] items-center  max-w-[343.95px] ">
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

          <h3 className="text-[#232e35] text-[1.25rem] font-bold text-center text-[color:var(--color-secondary)] ">
            So many clients, so little time
          </h3>
          <div className="text-center text-[16px] text-[color:var(--color-primary)]  ">
            You need to meet with clients to serve them, but you don’t have time
            to create meeting links, remind clients or follow up with no-shows.
          </div>
        </div>
        {/**----------------------------------------*/}
        <div className="flex-1 m-[0.675rem] py-[0.75rem] px-[1.5625rem] border-r border-r-[color:var(--color-primary)] border-l border-l-[color:var(--color-primary)]  flex flex-col gap-y-3 h-[254px] items-center  max-w-[343.95px] ">
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

          <h3 className="text-[#232e35] text-[1.25rem] font-bold text-center text-[color:var(--color-secondary)] ">
            CEO, COO, CFO .. and you make the coffee!
          </h3>
          <div className="text-center text-[16px]  text-[color:var(--color-primary)] ">
            You’re providing a service and growing your business. Back and forth
            meeting scheduling takes your focus away from both.
          </div>
        </div>
        {/**----------------------------------------*/}
        <div className="flex-1 m-[0.675rem] py-[0.75rem] px-[1.5625rem] flex flex-col gap-y-3 h-[254px] items-center  max-w-[343.95px] ">
          <div className="flex relative items-center justify-center w-[48px] h-[48px]">
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

          <h3 className="text-[#232e35] text-[1.25rem] font-bold text-center text-[color:var(--color-secondary)] ">
            Stand out from the crowd
          </h3>
          <div className="text-center text-[16px] text-[color:var(--color-primary)]  ">
            You work hard to give clients an amazing experience, but generic
            scheduling tools don’t showcase your unique business brand.
          </div>
        </div>
      </div>
      {/* sayaç alanı */}
      <div className="w-full relative flex flex-col items-center bg-[#626262] justify-center py-12 gap-y-5 rounded-full">
        <svg
          className="absolute top-0 left-20 "
          height="96"
          viewBox="0 0 91 96"
          width="91"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m746 149c14.61057 0 26.781689 10.444529 29.454273 24.274501 17.780245 2.192146 31.545727 17.351272 31.545727 35.725499 0 19.882251-16.117749 36-36 36s-36-16.117749-36-36c0-.690984.019467-1.377421.057884-2.058793-11.156542-4.370901-19.057884-15.233325-19.057884-27.941207 0-16.568542 13.431458-30 30-30zm25 24c-19.191267 0-34.875146 15.01691-35.942116 33.941207 3.39112 1.329541 7.081455 2.058793 10.942116 2.058793 16.568542 0 30-13.431458 30-30 0-1.957973-.187572-3.872135-.545727-5.725499-1.459882-.181778-2.946249-.274501-4.454273-.274501z"
            fill="#4f1aff"
            transform="translate(-716 -149)"
          ></path>
        </svg>
        <svg
          className="absolute top-0 right-20 rotate-90"
          height="96"
          viewBox="0 0 91 96"
          width="91"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m746 149c14.61057 0 26.781689 10.444529 29.454273 24.274501 17.780245 2.192146 31.545727 17.351272 31.545727 35.725499 0 19.882251-16.117749 36-36 36s-36-16.117749-36-36c0-.690984.019467-1.377421.057884-2.058793-11.156542-4.370901-19.057884-15.233325-19.057884-27.941207 0-16.568542 13.431458-30 30-30zm25 24c-19.191267 0-34.875146 15.01691-35.942116 33.941207 3.39112 1.329541 7.081455 2.058793 10.942116 2.058793 16.568542 0 30-13.431458 30-30 0-1.957973-.187572-3.872135-.545727-5.725499-1.459882-.181778-2.946249-.274501-4.454273-.274501z"
            fill="#4f1aff"
            transform="translate(-716 -149)"
          ></path>
        </svg>
        <h2 className="text-[1.5rem] font-semibold text-[color:var(--color-primary)]">
          We handle 1,000,000+ bookings every month for our users
        </h2>
        <div className="flex justify-between  gap-x-28  ">
          <div className="flex-1 flex flex-col items-center  ">
            <span className="text-[48px] text-[#2a9d9f]"><OdometerTest/></span>
            <span className="text-[1rem] text-[color:var(--color-primary)]">
              Books Today
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center  ">
            <span className="text-[48px] text-[#2a9d9f]">399,721</span>
            <span className="text-[1rem] text-[color:var(--color-primary)]">
              Books Today
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center  ">
            <span className="text-[48px] text-[#2a9d9f]">12,390,721</span>
            <span className="text-[1rem] text-[color:var(--color-primary)]">
              Books Today
            </span>
          </div>
        </div>
      </div>
          
    </div>
  );
}
