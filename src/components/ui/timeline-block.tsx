import Image from "next/image";

export default function TimelineBlock(props: { icon: string; title: string; description: string; }) {
  return (
    <div className="w-70">
      <div className="flex items-center py-4">
        <Image
            className="mr-3"
            src={props.icon}
            alt={props.title}
            width={50}
            height={50}
        />
        <span className="font-bold text-2xl">{props.title}</span>
      </div>
      <p className="text-base text-justify">{props.description}</p>
    </div>
  );
}
