import Link from "next/link";

type NavBtnProps = {
  title: string;
  link: string;
  closeMenu?: () => void;
};

export default function NavBtn({ title, link, closeMenu }: NavBtnProps) {
  return (
    <Link
      href={link}
      onClick={closeMenu}
      className="py-4 lg:p-2 mx-3
                inline-flex 
                flex-col 
                items-center 
                justify-center 
                font-normal
                transition-all 
                duration-400
                relative
                hover:after:w-full
                hover:font-bold
                hover:text-orange-400
                after:absolute 
                after:left-1/2 
                after:bottom-0
                after:h-[2px] 
                after:w-0
                after:bg-current
                after:transition-all 
                after:duration-400
                after:-translate-x-1/2"
    >
      {title}
      <span className="invisible h-0 font-bold" aria-hidden="true">
        {title}
      </span>
    </Link>
  );
}
