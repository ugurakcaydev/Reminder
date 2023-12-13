function CreateBooksModals({ close }) {
  return (
    <div className="w-full relative bg-[#232E35] border-1 border-[#32414a] shadow-md rounded-xl text-[#F4F5F7] block ">
      <div className="absolute top-1 right-1 z-[2]">
        <button
          className="w-7 h-7 border-none flex items-center justify-center"
          onClick={close}
        >
          <svg viewBox="0 0 16 16" className="h-[1rem]">
            <path
              fill="currentColor"
              d="M2.3 2.3a1 1 0 011.4 0L8 6.6l4.3-4.3a1 1 0 011.3 0h.1c.4.4.4 1 0 1.4L9.4 8l4.3 4.3c.4.4.4 1 0 1.3v.1a1 1 0 01-1.4 0L8 9.4l-4.3 4.3a1 1 0 01-1.3 0h-.1a1 1 0 010-1.4L6.6 8 2.3 3.7a1 1 0 010-1.3z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex ">
        <div className="p-10 w-full overflow-hidden">
          <div className="mb-4 flex justify-center">
            <span className="flex items-center gap-x-1">
              <span className="w-4 h-4 rounded-full bg-[color:var(--color-primary)] p-1 border border-[color:var(--color-primary)]"></span>
              <span className="w-3 h-3 rounded-full bg-[color:var(--color-base)] p-1 border "></span>
            </span>
          </div>
          <div className="relative">
            <div className="opacity-100">
              <form
                action="
                    "
                className="min-h-[410px] flex flex-col gap-y-2"
              >
                <div className="text-center flex justify-center items-center ">
                  <h2 className="font-semibold text-xl">
                    Set your availability
                  </h2>
                </div>
                <div className="flex flex-col gap-y-4 text-left ">
                  <div className="min-h-[120px] flex flex-col gap-y-1">
                    <p className="font-semibold text-base">
                      How long are your meetings for?
                    </p>
                    <div className="pb-4">
                      <div className="rounded-lg group overflow-auto border border-[#32414a] bg-[#232E35] hover:bg-[#2d3b45] ">
                        <div className="w-full overflow-auto ">
                          <div className="cursor-pointer flex items-center justify-between py-1 px-4 transition-all duration-500 min-h-[40px]">
                            <div className="font-normal text-base">1 Saat</div>
                            <div className="rounded-full p-.5 hover:bg-[#3a4750] invisible group-hover:visible">
                              <button className="rounded-full bg-transparent h-8 w-8 text-center flex items-center justify-center ">
                                <svg viewBox="0 0 16 16" className="h-[1rem]">
                                  <path
                                    fill="currentColor"
                                    d="M10.3.3a1 1 0 011.4 0l4 4c.4.4.4 1 0 1.4l-10 10a1 1 0 01-.7.3H1a1 1 0 01-1-1v-4c0-.3.1-.5.3-.7zM8 5.4l-6 6V14h2.6l6-6L8 5.4zm3-3L9.4 4 12 6.6 13.6 5 11 2.4z"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-h-[150px] flex flex-col gap-y-2 ">
                    <div className="w-full flex items-center justify-between">
                      <span className="font-semibold text-base">
                        When are you free to take bookings?
                      </span>
                      <div className="group">
                        <button className="font-normal ">
                          <span className="group-hover:underline group-hover:text-[#f7b32cce] text-[color:var(--color-primary)]">
                            Edit
                          </span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="rounded-tl-lg rounded-tr-lg group overflow-auto border border-[#32414a] border-b-0 bg-[#232E35] hover:bg-[#2d3b45] ">
                        <div className="w-full overflow-auto ">
                          <div className="cursor-pointer flex items-center justify-between py-1 px-4 transition-all duration-500 min-h-[40px]">
                            <div className="py-2 flex items-center justify-between w-full">
                              <div className="flex flex-grow">
                                <div className="font-normal text-base">
                                  08:00-17:00
                                </div>
                              </div>
                              <div className="group-hover:hidden block">
                                <span>Pzt-Cum</span>
                              </div>
                              <div className="group-hover:block hidden">
                                <button className="font-normal ">
                                  <span className="hover:underline hover:text-[#f7b32cce] text-[color:var(--color-primary)]">
                                    Edit
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-bl-lg rounded-br-lg group overflow-auto border border-[#32414a] bg-[#232E35] hover:bg-[#2d3b45] ">
                        <div className="w-full overflow-auto ">
                          <div className="cursor-pointer flex items-center justify-between py-1 px-4 transition-all duration-500 min-h-[40px]">
                            <div className="py-2 flex items-center justify-between w-full">
                              <div className="flex flex-grow">
                                <div className="font-normal text-base">
                                  Unavailable
                                </div>
                              </div>
                              <div className="group-hover:hidden block">
                                <span>Cts-Paz</span>
                              </div>
                              <div className="group-hover:block hidden">
                                <button className="font-normal ">
                                  <span className="hover:underline hover:text-[#f7b32cce] text-[color:var(--color-primary)]">
                                    Edit
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex text-center justify-center items-center">
                  <button className="rounded-full w-full bg-[color:var(--color-primary)] hover:bg-[#f7b32ce1] relative cursor-pointer font-semibold text-base">
                    <span className="px-5 h-10 overflow-hidden text-base flex text-center justify-center items-center">
                      <span>Next step</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="p-1 overflow-hidden z-[1] relative w-full "></div>
      </div>
    </div>
  );
}

export default CreateBooksModals;
