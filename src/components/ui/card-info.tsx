import Image from "next/image";
import RevealBlock from "./animate/revealBlock";

export default function CardInfo(props: { index: number; image: string; title: string; description: string; }) {
  return (
    <div className="container mx-auto py-0 md:py-6 px-6 mt-8 md:my-8 flex items-center justify-center flex-wrap gap-4 md:gap-8 lg:flex-nowrap lg:even:flex-row-reverse">
      <RevealBlock direction={props.index % 2 === 0 ? 'left' : 'right'}>
        <Image src={props.image} alt="" width={500} height={300} className="rounded" />
      </RevealBlock>
      <RevealBlock direction={props.index % 2 === 1 ? 'left' : 'right'}>
        <div className="max-w-[32em] sm:mx-8">
          <h3 className="font-semibold text-2xl mb-4 ms:mb-6 text-center">
            {props.title}
          </h3>
          <p className="text-sm md:text-base text-justify">
            {props.description}
          </p>
        </div>
      </RevealBlock>
    </div>
  );
}
