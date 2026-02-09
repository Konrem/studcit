import Image from "next/image";

export default function TimelineBlock(props: { icon: string; title: string; description: string; }) {
  return (
    <div className="w-full lg:w-70">
      <div className="flex items-center py-4">
        <Image
            className="mr-3 w-8 h-8 md:w-12 md:h-12 invert-[var(--invert)]"
            src={props.icon}
            alt=""
            width={50}
            height={50}
        />
        <span className="font-bold text-xl md:text-2xl">{props.title}</span>
      </div>
      <p className="text-sm md:text-base text-justify">{props.description}</p>
    </div>
  );
}
