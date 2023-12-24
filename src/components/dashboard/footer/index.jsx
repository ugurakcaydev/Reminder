function Footer() {
  return (
    <div className="mx-auto w-[90%] max-w-[1920px] flex justify-between items-center bg-gray-300 text-gray-700 px-2 py-2">
      <div className="flex gap-x-3 items-center justify-start">
        <span>2023 HighFives Ltd</span>
        <span>Şartlar</span>
        <span>Gizlilik</span>
        <span>Language:TR</span>
      </div>
      <div>
        <img
          className="mobile:hidden laptop2:block  h-10"
          src="../../../src/assets/images/booking.png"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Footer;
