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
          <h2 className="text-[#232e35] text-[2rem] mb-[1.25rem] font-bold ">
            Bookings are your business
          </h2>
          <p className="text-[1.25rem] font-normal text-[#656d72] font-inter text-center">
            YouCanBookMe lets you create the best booking experience for your
            customers — and your business.
          </p>
        </div>
      </div>
      <div className="pt-[4.4875rem] flex items-center justify-center gap-x-3">
        <div className="flex-1 m-[0.675rem] py-[0.75rem] px-[1.5625rem] flex flex-col items-center gap-y-2 ">
          <div className="flex items-center justify-center w-[48px] h-[48px]">
            <svg
              width={48}
              height={48}
              viewBox="0 0 104 104"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="m722-7c43.68 0 52 8.32 52 52s-8.32 52-52 52-52-8.32-52-52c0-43.68 8.32-52 52-52z"
                transform="translate(-670 7)"
              ></path>
            </svg>
            <img src="https://youcanbook.me/hubfs/Icons/tick.svg" />
          </div>

          <h3 className="text-[#232e35] text-[1.25rem] font-bold ">
            So many clients, so little time
          </h3>
          <div className="text-center text-jus">
            You need to meet with clients to serve them, but you don’t have time
            to create meeting links, remind clients or follow up with no-shows.
          </div>
        </div>
      </div>
    </div>
  );
}
