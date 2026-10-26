import browserInside from "@/app/content/browserInside";
import SiteInBrowser from "./siteInBrowser";

export default function Browser() {
  const { browserTab, browserUrl, browserAddressPlaceholder } = browserInside;
  return (
    <div className="relative flex h-full w-full min-w-0 flex-col overflow-hidden bg-[var(--surface)]">
      <div aria-hidden="true">
        <div className="hidden sm:flex h-[40px] items-end justify-between bg-[#353535] pl-5">
          <div className="relative h-[34px] w-[100px] rounded-t-[7px] bg-[#515151] px-2 pt-1">
            <div className="flex items-start justify-between gap-1">
              <span className="text-[10px] text-white">{browserTab}</span>
              <span className="rounded-full px-1 text-[9px] text-white hover:bg-[#5d5d5d]">
                ✕
              </span>
            </div>

            <div className="absolute right-[-20px] top-0 h-[24px] w-[20px] overflow-hidden bg-[#515151]">
              <div className="h-full w-full rounded-bl-[7px] bg-[#353535]"></div>
            </div>

            <div className="absolute left-[-20px] top-0 h-[24px] w-[20px] overflow-hidden bg-[#515151]">
              <div className="h-full w-full rounded-br-[7px] bg-[#353535]"></div>
            </div>
          </div>

          <div className="mb-[10px] flex">
            <span className="h-[30px] w-[30px] text-white hover:bg-[#515151c8]">
              −
            </span>
            <span className="h-[30px] w-[30px] text-white hover:bg-[#515151c8]">
              □
            </span>
            <span className="h-[30px] w-[30px] text-white hover:bg-red-500">
              ✕
            </span>
          </div>
        </div>

        <div className="absolute top-0 sm:top-[30px] flex h-[40px] w-full items-center gap-[5px] rounded-t-[7px] bg-[#515151] p-[7px]">
          <span className="hidden h-[25px] w-[27px] rounded-full text-white hover:bg-[#5d5d5d] sm:block">
            ←
          </span>

          <span className="hidden h-[25px] w-[27px] rounded-full text-white opacity-40 sm:block">
            →
          </span>

          <div className="flex h-full flex-1 items-center rounded-full bg-[#3b3b3b] px-[15px] text-sm text-white transition hover:bg-[#5d5d5d]">
            {browserUrl || browserAddressPlaceholder}
          </div>

          <span className="h-[25px] w-[27px] rounded-full text-white hover:bg-[#5d5d5d]">
            ⋮
          </span>

          <div className="absolute right-[45px] top-1/2 flex h-[18px] w-[19px] -translate-y-1/2 items-center justify-center text-[15px] text-white opacity-70 hover:bg-[#5d5d5d] rounded-full cursor-default">
            ✰
          </div>
        </div>
      </div>
      <div className="min-h-0 flex-1 pt-8 sm:pt-5">
        <SiteInBrowser />
      </div>
    </div>
  );
}
