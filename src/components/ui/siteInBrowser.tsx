import Image from "next/image";

export default function SiteInBrowser() {
  return (
    <div className="mx-auto mt-2">
      <div className="w-[100%] bg-[#434343] flex justify-between items-center px-8">
        <Image
          className="my-2"
          src="/picture.svg"
          alt="Picture"
          width={30}
          height={30}
        />
        <div className="hidden flex">
          <div className="w-[3rem] h-[20px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
          <div className="w-[4rem] h-[20px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
          <div className="w-[3rem] h-[20px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
          <div className="w-[4rem] h-[20px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
        </div>
        <div className="w-[2rem] h-[24px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
      </div>
      <div className="flex flex-wrap p-8 justify-center sm:justify-between items-start h-auto">
        <div className="mt-4 ms:mt-[4rem]">
          <div className="w-[7rem] h-[24px] rounded-[0.5rem] bg-[#919191]"></div>
          <div className="w-[12rem] h-[20px] rounded-[0.5rem] bg-[#919191] my-6"></div>
          <div className="flex">
            <div className="w-[2rem] h-[2rem] rounded-full bg-[#919191] mx-2"></div>
            <div className="w-[2rem] h-[2rem] rounded-full bg-[#919191] mx-2"></div>
            <div className="w-[2rem] h-[2rem] rounded-full bg-[#919191] mx-2"></div>
          </div>
        </div>
        <Image
          className="my-[1.5rem]"
          src="/picture.svg"
          alt="Picture"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
