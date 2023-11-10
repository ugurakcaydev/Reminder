import DaySlots from "../../components/dayslots";
import { OdometerNumbers } from "../../components/odometer";

export default function Home() {
  // const bannerLogosSrc = [
  //   "https://youcanbook.me/hubfs/2022/customer-logos/techstars-white.svg",
  //   "https://youcanbook.me/hubfs/2022/customer-logos/randstad-white.svg",
  //   "https://youcanbook.me/hubfs/2022/customer-logos/randstad-white.svg",
  //   "https://youcanbook.me/hubfs/2022/customer-logos/randstad-white.svg",
  // ];
  return (
    <div>
      <div className="flex flex-col relative  bg-[color:var(--bg-base-secondary)] rounded-tl-[10rem] rounded-br-[10rem] items-center gap-y-3 pt-10 pb-10 h-auto">
        {/* <div className="w-[250px] h-[250px] absolute bottom-0 right-0 rounded-full bg-transparent border-[1rem] border-[#4f1aff]" /> */}
        <div className=" h-auto flex justify-center items-center gap-x-16  py-10 px-5">
          <div className="flex flex-col items-start max-w-[630px] gap-y-5 pl-16">
            <h3 className="text-[color:var(--color-base)] text-[3.25rem] font-bold leading-snug">
              Toplantılarınız daha iyisini hak ediyor
            </h3>
            <p className="text-[1.31rem] text-[color:var(--color-base-secondary)]">
              Toplantılar için zaman bulma zahmetine son verecek ve
              toplantılarla ilgili manuel görevleri ortadan kaldıracak benzersiz
              bir rezervasyon sayfası oluşturun, böylece müşterilerinize ve
              işinize odaklanabilirsiniz.
            </p>
            <div className="flex justify-between items-center gap-x-3">
              <button className="bg-[color:var(--color-primary)] text-white text-center text-[1.25rem] py-[.8rem] px-[1.875rem] rounded-full">
                Create your free booking page
              </button>
              <button className="border-2 border-[white] rounded-full text-[1.25rem] py-[.8rem] px-[1.875rem] text-center text-[color:var(--color-base)] bg-transparent w-[200px] hover:bg-white hover:text-black ease-in-out transition-all duration-300">
                ✨ Take a tour
              </button>
            </div>
            <div className="flex justify-start gap-x-2 items-center text-[color:var(--color-base)] text-base">
              <span>No credit card required</span>
              <span className="relative pl-3 before:block before:content-[''] before:rounded-full before:h-1 before:w-1 before:left-0.5 before:bg-[color:var(--color-base)] before:absolute before:top-1/2 before:-translate-y-1/2">
                Free forever
              </span>
              <span className="relative pl-3 before:block before:content-[''] before:rounded-full before:h-1 before:w-1 before:left-0.5 before:bg-[color:var(--color-base)] before:absolute before:top-1/2 before:-translate-y-1/2">
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
        <h2 className="text-[color:var(--color-base)] text-[1.5rem] mb-[1.25rem] font-bold z-10">
          Trusted by 1M+ users across 100 countries
        </h2>
        {/* <div className="bannerLogo mt-[2.5rem] flex justify-center items-center gap-x-14">
          {bannerLogosSrc.map((src, index) => (
            <>
              <img key={index} src={src} alt="" />
            </>
          ))}
        </div> */}
      </div>
      {/* TAKVİM OLUŞTURMA  */}
      <div className="w-[990px] p-14 bg-transparent -mt-24 mx-auto z-10 relative">
        <div className="w-full h-full  bg-[color:var(--bg-base-secondary)] shadow-lg rounded-2xl overflow-hidden">
          <div className="w-full h-10  flex justify-center gap-x-2 items-center border-b-4  border-[color:var(--color-primary)]">{/* [#2a9d8f] */}
            <svg viewBox="0 0 24 24" className="h-[1rem] w-auto">
              <path
                fill="currentColor"
                d="M24 12c0 10.08-1.92 12-12 12C2.03 24 .04 22.12 0 12.33V12C0 2.03 1.88.04 11.67 0H12c10.08 0 12 1.92 12 12Zm-9 5.63a.94.94 0 0 0-.94.93v.94a.94.94 0 1 0 1.88 0v-.94a.94.94 0 0 0-.94-.93ZM12 3.55a.94.94 0 0 0-.94.94v14.63a.94.94 0 1 0 1.88 0V4.5a.94.94 0 0 0-.94-.94ZM6 5.25a.94.94 0 0 0-.94.94v12a.94.94 0 1 0 1.88 0v-12A.94.94 0 0 0 6 5.25Zm3 4.31a.94.94 0 0 0-.94.94v7.13a.94.94 0 1 0 1.88 0V10.5A.94.94 0 0 0 9 9.56Zm9-4.31a.94.94 0 0 0-.94.94v10.87a.94.94 0 1 0 1.88 0V6.2a.94.94 0 0 0-.94-.94ZM15 7.5a.94.94 0 0 0-.94.94v7.12a.94.94 0 1 0 1.88 0V8.44A.94.94 0 0 0 15 7.5Zm-6-.94a.94.94 0 1 0 0 1.88.94.94 0 0 0 0-1.88Z"
              ></path>
            </svg>
            <span className="text-[color:var(--color-base)]">
              Powered by YouCanBookMe
            </span>
          </div>
          <div className="w-full  flex">
            {/* leftside */}
            <div className="w-[420px]  border-r border-[color:var(--color-base)]  ">
              <div className="max-h-[577px] pt-4 px-8 flex flex-col gap-y-2 justify-start items-start">
                <div className="h-[8rem] w-[8rem]  rounded-full overflow-hidden border border-[color:var(--bg-secondary)]">
                  <img
                    className=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <span className="font-semibold text-[1.5rem] leading-8 text-[color:var(--color-base)]">
                  Interactive Demo
                </span>
                <div className="w-[7.25rem] h-[2rem] rounded-full flex items-center justify-between px-2  border-[color:var(--color-base)] border">
                  <svg className="h-[1rem]" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2c.5 0 1 .4 1 .9V7h1c.5 0 1 .4 1 .9V8c0 .6-.4 1-1 1H8a1 1 0 01-1-.9V5c0-.6.4-1 1-1z"
                    ></path>
                  </svg>
                  <span className="text-[color:var(--color-base)] font-semibold text-sm">
                    30 minutes
                  </span>
                </div>
                <span className="mt-[1rem] text-[color:var(--color-base-secondary)] text-[16px]">
                  Choose a date and time that works for you.
                </span>
              </div>
            </div>
            {/* rightside */}
            <DaySlots />
          </div>
        </div>
      </div>

      {/* sayaç alanı */}
      <div className="w-full  relative flex flex-col items-center bg-[color:var(--bg-base-secondary)] justify-center py-6 gap-y-5 rounded-[56px] shadow-xl">
        {/* <svg
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
        </svg> */}
        <h2 className="text-[1.5rem] font-semibold text-[color:var(--color-base)]">
          We handle 1,000,000+ bookings every month for our users
        </h2>
        <div className="flex justify-center items-center  gap-x-28  ">
          <div className=" flex flex-col items-center  ">
            <span className="text-[48px] text-[color:var(--color-base-secondary)]">
              <OdometerNumbers value={12345} duration={2000} />
            </span>
            <span className="text-[1rem] text-[color:var(--color-secondary)]">
              Books Today
            </span>
          </div>
          <div className=" flex flex-col items-center  ">
            <span className="text-[48px] text-[color:var(--color-base-secondary)]">
              <OdometerNumbers value={123456} duration={2000} />
            </span>
            <span className="text-[1rem] text-[color:var(--color-secondary)]">
              Books Month
            </span>
          </div>
          <div className=" flex flex-col items-center  ">
            <span className="text-[48px] text-[color:var(--color-base-secondary)]">
              <OdometerNumbers value={123456789} duration={2000} />
            </span>
            <span className="text-[1rem] text-[color:var(--color-secondary)]">
              Books Year
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-[4.4875rem]">
        <div className="w-full  flex items-center justify-center text-center">
          <div className="max-w-[75%] px-28 overflow-hidden">
            <h2 className=" text-[2rem] mb-[1.25rem] font-bold text-[color:var(--color-base)] ">
              Bookings are your business
            </h2>
            <p className="text-[1.25rem] font-normal text-[color:var(--color-base-secondary)] font-inter text-center">
              YouCanBookMe lets you create the best booking experience for your
              customers — and your business.
            </p>
          </div>
        </div>
        <div className="py-[3rem] flex items-center justify-between  max-w-[73.75em] px-[30px] mx-auto">
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

            <h3 className=" text-[1.25rem] font-bold text-center text-[color:var(--color-base)] ">
              So many clients, so little time
            </h3>
            <div className="text-center text-[16px] text-[color:var(--color-base-secondary)] ">
              You need to meet with clients to serve them, but you don’t have
              time to create meeting links, remind clients or follow up with
              no-shows.
            </div>
          </div>
          {/**----------------------------------------*/}
          <div className="flex-1 m-[0.675rem] py-[0.75rem] px-[1.5625rem] border-r border-r-[color:var(--color-base)] border-l border-l-[color:var(--color-base)]  flex flex-col gap-y-3 h-[254px] items-center  max-w-[343.95px] ">
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
              CEO, COO, CFO .. and you make the coffee!
            </h3>
            <div className="text-center text-[16px]  text-[color:var(--color-base-secondary)] ">
              You’re providing a service and growing your business. Back and
              forth meeting scheduling takes your focus away from both.
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

            <h3 className=" text-[1.25rem] font-bold text-center text-[color:var(--color-base)] ">
              Stand out from the crowd
            </h3>
            <div className="text-center text-[16px] text-[color:var(--color-base-secondary)]  ">
              You work hard to give clients an amazing experience, but generic
              scheduling tools don’t showcase your unique business brand.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
