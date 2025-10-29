export default function Complete() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 mx-auto max-w-screen-sm overflow-x-hidden">
        <div className="text-5xl font-bold text-green-400">REGISTRATION COMPLETE 🎉</div>

        <div className="w-full text-2xl text-[#F5F5F5] flex flex-col pt-10 pb-30">
          <span>감사합니다!</span>
          <span>금요일에 만나요! 👋</span>
        </div>

        <div className="w-full flex flex-col gap-5 border border-green-400 rounded-md py-10 px-5">
          <div className="w-full text-center font-bold text-2xl pb-10">INFO</div>
          <div className="flex flex-col">
            <span className="font-bold text-green-400 text-xl">DATE </span>
            <span>2025. 10. 31(Fri)</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-green-400 text-xl">VENUE </span>
            <span>서퍼스 부스 </span>
            <span>
              SURFERS BOOTH{" "}
              <span
                className="break-all text-blue-500"
                onClick={() => window.open("https://www.instagram.com/surfersbooth_mw/", "_blank")}>
                (@Surfersbooth_mw)
              </span>{" "}
            </span>
            <span>마포구 포은로 54</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-green-400 text-xl">DOOR OPEN </span>
            <span className="">8:00 PM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-green-400 text-xl">DOOR CLOSE </span>
            <span className="">1:00 AM</span>
          </div>
        </div>
      </div>
    </>
  );
}
