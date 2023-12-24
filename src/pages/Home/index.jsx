import CommentSlider from "../../components/Slider";
import { OdometerNumbers } from "../../components/odometer";
import BenefitPanel from "../../components/benefitPanel";
import Calender from "../../components/Calender";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col relative  bg-[color:var(--bg-base-secondary)] rounded-tl-[10rem] rounded-br-[10rem] items-center gap-y-3 pt-10 pb-10 h-auto">
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
              Ücretsiz rezervasyon sayfanızı oluşturun
              </button>
              <button className="border-2 border-[white] rounded-full text-[1.25rem] py-[.8rem] px-[1.875rem] text-center text-[color:var(--color-base)] bg-transparent w-[200px] hover:bg-white hover:text-black ease-in-out transition-all duration-300">
                ✨ Tur atın
              </button>
            </div>
            <div className="flex justify-start gap-x-2 items-center text-[color:var(--color-base)] text-base">
              <span>Kredi kartına gerek yok</span>
              <span className="relative pl-3 before:block before:content-[''] before:rounded-full before:h-1 before:w-1 before:left-0.5 before:bg-[color:var(--color-base)] before:absolute before:top-1/2 before:-translate-y-1/2">
                 Ücretsiz
              </span>
              <span className="relative pl-3 before:block before:content-[''] before:rounded-full before:h-1 before:w-1 before:left-0.5 before:bg-[color:var(--color-base)] before:absolute before:top-1/2 before:-translate-y-1/2">
                İstediğiniz zaman yükseltebilirsiniz
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
          Rezervasyonunuzun tek güvenilir adresi
        </h2>
      </div>
      {/* TAKVİM OLUŞTURMA  */}
      <Calender />

      {/* sayaç alanı */}
      <div className="w-full  relative flex flex-col items-center bg-[color:var(--bg-base-secondary)] justify-center py-6 gap-y-5 rounded-[56px] shadow-xl">
        <h2 className="text-[1.5rem] font-semibold text-[color:var(--color-base)]">
        Kullanıcılarımız için her ay 1.000.000'dan fazla rezervasyon gerçekleştiriyoruz
        </h2>
        <div className="flex justify-center items-center  gap-x-28  ">
          <OdometerNumbers value={12345} duration={1500} />
          <OdometerNumbers value={123456} duration={1500} />
          <OdometerNumbers value={123456789} duration={1500} />
        </div>
      </div>
      <div className="flex flex-col pt-[4.4875rem]">
        <div className="w-full  flex items-center justify-center text-center">
          <div className="max-w-[75%] px-28 overflow-hidden">
            <h2 className=" text-[2rem] mb-[1.25rem] font-bold text-[color:var(--color-base)] ">
            Rezervasyonlar sizin işiniz
            </h2>
            <p className="text-[1.25rem] font-normal text-[color:var(--color-base-secondary)] font-inter text-center">
            HighFives, işiniz ve müşterileriniz için en iyi rezervasyon deneyimini yaratmanıza olanak tanır
              
            </p>
          </div>
        </div>
        <div className="py-[3rem] flex items-center justify-between  max-w-[73.75em] px-[30px] mx-auto">
          <BenefitPanel
            title={"Çok fazla müşteri, çok az zaman"}
            description={
              "Müşterilere hizmet vermek için onlarla buluşmanız gerekiyor, ancak toplantı bağlantıları oluşturmak, müşterilere hatırlatma yapmak veya kullanılmayan rezervasyonları takip etmek için zamanınız yok."
            }
            index={0}
          />
          <BenefitPanel
            title={"CEO, COO, CFO.. ve kahveyi siz yapın!"}
            description={
              "Bir hizmet sunuyorsunuz ve işinizi büyütüyorsunuz. İleri geri toplantı planlaması, odak noktanızı her ikisinden de uzaklaştırır."
            }
            index={1}
          />
          <BenefitPanel
            title={"Kalabalığın arasından sıyrılın"}
            description={
              "Müşterilerinize harika bir deneyim sunmak için çok çalışıyorsunuz ancak genel planlama araçları, benzersiz işletme markanızı sergilemiyor."
            }
            index={2}
          />
        </div>
      </div>
      <div>
        <CommentSlider />
      </div>
    </div>
  );
}
