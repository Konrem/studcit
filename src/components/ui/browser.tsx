import SiteInBrowser from "./siteInBrowser";

export default function Browser() {
  return (
    <div className="relative flex mx-6 sm:m-0 h-[500px] sm:h-[400px] max-w-[35rem] w-full flex-col overflow-hidden rounded-xl bg-neutral-300 shadow-[5px_5px_10px_rgba(31,31,31,0.245)]">
      <div>
        <div className="hidden sm:flex h-[40px] items-end justify-between bg-[#353535] pl-5">
          <div className="relative h-[34px] w-[100px] rounded-t-[7px] bg-[#515151] px-2 pt-1">
            <div className="flex items-start justify-between gap-1">
              <span className="text-[10px] text-white">My project</span>
              <button className="rounded-full px-1 text-[9px] text-white hover:bg-[#5d5d5d]">
                ✕
              </button>
            </div>

            <div className="absolute right-[-20px] top-0 h-[24px] w-[20px] overflow-hidden bg-[#515151]">
              <div className="h-full w-full rounded-bl-[7px] bg-[#353535]"></div>
            </div>

            <div className="absolute left-[-20px] top-0 h-[24px] w-[20px] overflow-hidden bg-[#515151]">
              <div className="h-full w-full rounded-br-[7px] bg-[#353535]"></div>
            </div>
          </div>

          <div className="mb-[10px] flex">
            <button className="h-[30px] w-[30px] text-white hover:bg-[#515151c8]">
              −
            </button>
            <button className="h-[30px] w-[30px] text-white hover:bg-[#515151c8]">
              □
            </button>
            <button className="h-[30px] w-[30px] text-white hover:bg-red-500">
              ✕
            </button>
          </div>
        </div>

        <div className="absolute top-0 sm:top-[30px] flex h-[40px] w-full items-center gap-[5px] rounded-t-[7px] bg-[#515151] p-[7px]">
          <button className="hidden sm:block  h-[25px] w-[27px] rounded-full text-white hover:bg-[#5d5d5d]">
            ←
          </button>

          <button
            disabled
            className="hidden sm:block  h-[25px] w-[27px] rounded-full text-white opacity-40"
          >
            →
          </button>

          <input
            readOnly
            type="text"
            value="http://localhost:3000"
            placeholder="Search Google or type URL"
            className="h-full text-sm flex-1 rounded-full bg-[#3b3b3b] px-[15px] text-white outline-none transition hover:bg-[#5d5d5d] focus:border-2 focus:border-[rgb(173,214,255)]"
          />

          <button className="h-[25px] w-[27px] rounded-full text-white hover:bg-[#5d5d5d]">
            ⋮
          </button>

          <div className="absolute right-[45px] top-1/2 flex h-[18px] w-[19px] -translate-y-1/2 items-center justify-center text-[15px] text-white opacity-70 hover:bg-[#5d5d5d] rounded-full cursor-default">
            ✰
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-5">
        <SiteInBrowser />
      </div>
    </div>
  );
}
