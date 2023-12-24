/* eslint-disable react/no-unescaped-entities */
function CalenderFormComponent() {
  return (
    <div>
      <label htmlFor="yname">
        <b>İsminiz</b>
        <small className="text-gray-400"> (Gerekli) </small>
      </label>
      <input
        className="border-2 border-gray-300  bg-white    w-full py-3 px-5 my-2 mx-0 inline-block border-solid rounded box-border"
        type="text"
        id="yname"
        name="yourname"
        placeholder="İsminizi Buraya Giriniz..."
      />
      <label htmlFor="email">
        <b>Mail Adresiniz</b> <small className="text-gray-400">(Gerekli)</small>
      </label>
      <input
        className="shadow-x1 border-2 border-gray-300 bg-white    w-full py-3 px-5 my-2 mx-0"
        type="email"
        id="email"
        name="mail"
        placeholder="Mail Adresinizi Buraya Giriniz..."
      ></input>
      <label htmlFor="choose">
        <b>Bizi nereden buldunuz ?</b>
        <small className="text-gray-400"> (Gerekli)</small>
      </label>
      <select
        className="py-2 my-2  border-2 border-gray- bg-white w-full"
        name="form"
        id="choose"
      >
        <option selected disabled>
          Lütfen Seçiniz...
        </option>
        <option className=" font-bold" value="1">
          Sosyal Medya{" "}
        </option>
        <option className=" font-bold" value="2">
          Tanıdıklar
        </option>
        <option className=" font-bold" value="3">
          Rastgele
        </option>
      </select>

      <div className="m-5 flex w-full ">
        <div className="w-4  ">
          <input
            type="checkbox"
            id="chck1"
            name="checkbox"
            className="justify-start accent-green-900 hover:accent-slate-50 "
          />
        </div>

        <label className="ml-3 mr-2" htmlFor="chck1">
          Sitenin Bana ve Kullanıcılarıma Nasıl Yardım Edebileceği Hakkında
          Bilgi Edinmek İstiyorum
        </label>
      </div>
      <input
        className="bg-green-800 w-full py-4 px-5 my-2 mx-0 border-none rounded-2xl cursor-pointer font-extrabold text-base hover:bg-green-500 text-white    "
        type="submit"
        value="Rezervasyonumu Doğrula"
      ></input>
      <div className="bg-slate-200 h-20 rounded-xl  flex  items-center justify-center ">
        <p className="text-center items-center ml-1">
          <b>Bu Bir Demo Versiyonudur</b>-Gerçek Bir Rezervasyon Değildir
        </p>
      </div>
      <div className=" text-xs  mb-6 ">
        <p>
          {" "}
          Bu form reCAPTCHA tarafından korunmaktadır ve Google'ın{" "}
          <u>Gizlilik Politikası</u> ve <u>Hizmet Şartları</u> geçerlidir
        </p>
      </div>
    </div>
  );
}

export default CalenderFormComponent;
