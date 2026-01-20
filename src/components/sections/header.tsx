import Image from "next/image";
import NavBtn from "../ui/navBtn";

export default function Header() {
  const navButtons = [
    {
      title: "About",
      link: "#",
    },
    {
      title: "Our staff",
      link: "#",
    },
    {
      title: "How we work",
      link: "#",
    },
    {
      title: "Contacts",
      link: "#",
    },
  ];
  return (
    <nav className="container flex item-center flex-wrap justify-between px-4 mx-auto">
      <div className="logo block">
        <a href="#" className="block py-2">
          <Image
            src="/logo/logo_darkTheme.svg"
            alt="StudCIT logo"
            width={240}
            height={60}
          />
        </a>
      </div>

      <div className="menu flex items-center">
        <ul className="flex">
          {navButtons.map((btn, index) => (
            <li key={index}>
              <NavBtn title={btn.title} link={btn.link} />
            </li>
          ))}
          <li>
            <a
              href="#"
              className="py-2 px-5 inline-flex flex-col items-center justify-center "
            >
              <Image
                className="dark:invert mr-3 inline-block"
                src="/test.svg"
                alt="Icon"
                width={25}
                height={25}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
