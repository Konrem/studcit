import Image from "next/image";

export default function SiteInBrowser() {
  return (
    <div className="mx-auto mt-2">
      <div className="w-[100%] bg-[#434343] flex justify-between items-center px-8">
        <Image
          className="my-2"
          src="/picture.svg"
          alt="logo inside"
          width={30}
          height={30}
        />
        <div className="hidden md:flex">
          <div className="w-[3rem] h-[20px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
          <div className="w-[4rem] h-[20px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
          <div className="w-[3rem] h-[20px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
          <div className="w-[4rem] h-[20px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
        </div>
        <div className="block md:hidden w-[2rem] h-[24px] rounded-[0.5rem] bg-[#919191] mx-2"></div>
      </div>
      <div className="flex flex-col sm:flex-row p-8 justify-center md:justify-between items-start h-auto">
        <div className="mx-auto mt-4 md:mx-0 sm:mt-[4rem]">
          <div className="w-[7rem] h-[24px] rounded-[0.5rem] bg-[#919191]"></div>
          <div className="w-[12rem] h-[20px] rounded-[0.5rem] bg-[#919191] my-6"></div>
          <div className="flex">
            <div className="w-[2rem] h-[2rem] rounded-full bg-[#919191] mx-2"></div>
            <div className="w-[2rem] h-[2rem] rounded-full bg-[#919191] mx-2"></div>
            <div className="w-[2rem] h-[2rem] rounded-full bg-[#919191] mx-2"></div>
          </div>
        </div>
        <Image
          className="mx-auto md:mx-0 my-[1.5rem] "
          src="/picture.svg"
          alt="Picture inside"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
