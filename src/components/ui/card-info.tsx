import Image from "next/image";

export default function CardInfo(props: { image: string; title: string; description: string; }) {
  return (
    <div className="container mx-auto card-info p-6 flex items-center justify-center even:flex-row-reverse my-[2rem]">
      <Image src={props.image} alt="Illustration" width={500} height={300} />
      <div className="max-w-[32em] mx-8">
        <h3 className="font-semibold text-2xl mb-6 text-center">
          {props.title}
        </h3>
        <p className="text-base text-justify">
          {props.description}
        </p>
      </div>
    </div>
  );
}
