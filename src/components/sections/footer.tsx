import Image from "next/image";
import Link from "next/link";
import SocialBtn from "../ui/socialBtn";
import Map from "../ui/Map";
import landingContent from "@/app/content/landingContent";

export default function Footer() {
  const { contactMain, socials, address } = landingContent.footer;

  const sizeIconSocial = 25;

  return (
    <div className="dark-theme border-t-1 border-neutral-700">
      <footer
        id="footer"
        className="container flex item-center flex-wrap justify-between p-8 mx-auto"
      >
        <div>
          <div className="mt-4 mx-4 pt-2">
            {contactMain.map((contacts, index) => (
              <div className="flex py-1" key={index}>
                <Link href={contacts.link + contacts.contact}>
                  <Image
                    className="mr-3 inline-block"
                    src={contacts.icon}
                    alt=""
                    width={25}
                    height={25}
                  />
                  <span className="fw-medium text-base md:text-xl">
                    {contacts.contact}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mx-2 mt-2">
            <div className="flex flex-wrap">
              {socials.map((social, index) => (
                <div className="mr-2 mb-2 md:m-0" key={index}>
                  <SocialBtn
                    icon={social.icon}
                    title={social.title}
                    link={social.link}
                    hover={social.hover}
                    size={sizeIconSocial}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 mt-4">
            <p className="fw-medium text-base md:text-xl">{address.street}</p>
            <p className="fw-medium text-base md:text-xl">{address.place}</p>
          </div>
        </div>
        <Map marker={address.placeDetails} position={address.position} />
      </footer>
    </div>
  );
}
