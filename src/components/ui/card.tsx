import Image from "next/image";

export default function Card(props: { icon: string; title: string; subtitle: string; }) {
  return (
    <div className="relative drop-shadow-xl w-40 sm:w-45 h-60 overflow-hidden rounded-xl bg-[#3d3c3d]">
      <div className="absolute flex flex-col items-center justify-center p-4 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
        <Image
            className="my-[1.5rem]"
            src={props.icon}
            alt=""
            width={50}
            height={50}
        />
        <div className="font-bold text-base text-center">{props.title}</div>
        <div className="font-light text-sm pt-2 sm:p-4 text-center">{props.subtitle}</div>
        
      </div>
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
    </div>
  );
}
