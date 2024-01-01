function BookingPage() {
  return (
    <div className="w-full  flex gap-x-5  ">
     
      <div >
        <div className="flex mr-[72.6px] ">
            <h1><span className=" text-white ml-[3px] text-2xl "> Rezervasyonlar</span></h1>
         <div className="flex mr-4 w-[695px]">
            <button className=" border-2 text-sm  p-2 items-center  flex mt-5 h-11 ml-[665px] rounded-xl text-white bg-text-[color:var(--color-primary)] border-solid border-gray-400 w-28">  Filtreler</button>
            
         </div>
         <div className="flex m-5 pl-2.5 mr-[226px]">
            <button class="btn1"   className =" border-2 text-sm h-11 w-24 rounded-xl bg-text-[color:var(--color-primary)] border-solid border-gray-400 rounded-r-none"> Upcoming</button>
            <button class="btn2" className="border-2 text-sm h-11 w-24 rounded-xl bg-text-[color:var(--color-primary)] text-white border-solid border-gray-400 rounded-e rounded-s">Past</button>
            <button className="border-2 text-sm h-11 w-24 mr-0.5 rounded-xl bg-text-[color:var(--color-primary)] text-white border-solid border-gray-400 rounded-l-none">Date Range</button>
            <button className=" h-11  font-bold text-base rounded-full w-24 bg-[color:var(--color-primary)] border-none">Export</button>

         </div>
        
        </div>
        <div className=" pl-[1220px] mb-5"><span className="text-white">0 - 0 of 0</span></div>
        <div className=" justify-center items-center border border-none rounded-xl flex w-[1275px] h-[300px] bg-[color:var(--bg-base-secondary)] ml-1 border-color: #334040">
        <div >
            <div className="text-center items-center text-white text-4xl"> <i className="opacity-50" class="fa-solid fa-magnifying-glass"  > </i> </div> 
          
            <h2 className="text-center mb-4 text-white font-extralight"><span className="text-center text-2xl"> Gelecek rezervasyonunuz yok</span> </h2> 
           <div><p className="text-white text-center"> Yardıma ihtiyacınız mı var? <a className="no-underline text-[color:var(--color-primary)]" href=""> Rezervasyon sayfalarınızı paylaşmak hakkında </a> daha fazla bilgi edinin  </p></div>
        </div>
        
        </div>
        
        <div className=" pl-[1220px] mt-5"><span className="text-white">0 - 0 of 0</span></div>
    </div>
    </div>
  );
}

export default BookingPage;
