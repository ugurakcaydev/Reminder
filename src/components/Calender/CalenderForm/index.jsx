function CalenderFormComponent() {
  return <div>
    <label  for="yname"><b>İsminiz</b><small class="text-gray-400"> (Gerekli) </small></label>
    <input class="border-2 border-gray-300  bg-white    w-full py-3 px-5 my-2 mx-0 inline-block border-solid rounded box-border" type="text"id="yname" name="yourname"placeholder="İsminizi Buraya Giriniz..."/>
    <label for="email"><b>Mail Adresiniz</b> <small class="text-gray-400">(Gerekli)</small></label>
    <input class="shadow-x1 border-2 border-gray-300 bg-white    w-full py-3 px-5 my-2 mx-0"type="email" id="email" name="mail" placeholder="Mail Adresinizi Buraya Giriniz..."></input>
    <label for="choose"><b>Bizi nereden buldunuz ?</b><small class="text-gray-400"> (Gerekli)</small></label>
    <select class="py-2 my-2  border-2 border-gray- bg-white w-full"   name="form" id="choose">
        <option selected disabled>Lütfen Seçiniz...</option>
        <option className=" font-bold" value="1">Sosyal Medya  </option>
        <option className=" font-bold" value="2">Tanıdıklar</option>
        <option className=" font-bold" value="3">Rastgele</option>
    </select>
   
    <div class="m-5 flex w-full ">
     <div class="w-4  ">
      <input  type="checkbox" id="chck1" name="checkbox" class="justify-start accent-green-900 hover:accent-slate-50 "/>
    </div>
    
    <label class="ml-3 mr-2" for="chck1">Sitenin Bana ve Kullanıcılarıma Nasıl Yardım Edebileceği Hakkında Bilgi Edinmek İstiyorum</label>
    </div>
    <input class="bg-green-800 w-full py-4 px-5 my-2 mx-0 border-none rounded-2xl cursor-pointer font-extrabold text-base hover:bg-green-500 text-white    "   type="submit" value="Rezervasyonumu Doğrula"></input>
    <div class="bg-slate-200 h-20 rounded-xl  flex  items-center justify-center ">
      <p class="text-center items-center ml-1">
        <b>Bu Bir Demo Versiyonudur</b>-Gerçek Bir Rezervasyon Değildir
      </p>
      </div>
      <div class=" text-xs  mb-6 ">
        <p   >  Bu form reCAPTCHA tarafından korunmaktadır ve Google'ın <u>Gizlilik Politikası</u> ve <u>Hizmet Şartları</u> geçerlidir</p> 

      </div>
  </div>;
  
}

export default CalenderFormComponent;
