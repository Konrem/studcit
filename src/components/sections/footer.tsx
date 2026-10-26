import Image from "next/image";
import Link from "next/link";
import SocialBtn from "../ui/socialBtn";
import Map from "../ui/Map";
import landingContent from "@/app/content/landingContent";

export default function Footer() {
  const {
    contactMain,
    socials,
    address,
    homeLinkLabel,
    logoAlt,
    description,
    contactsTitle,
    mapTitle,
    mapAttribution,
    copyright,
  } = landingContent.footer;
  const sizeIconSocial = 25;

  return (
    <footer
      className="dark-theme mt-12 border-t border-[var(--border)] md:mt-20"
      id="footer"
      role="contentinfo"
    >
      <div className="container mx-auto grid gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr] lg:gap-10">
        <div>
          <Link href="#top" aria-label={homeLinkLabel}>
            <Image
              src="/logo/logo_darkTheme.svg"
              alt={logoAlt}
              width={180}
              height={45}
              className="h-auto w-44"
            />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-[var(--text-secondary)]">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1">
            {socials.map((social, index) => (
              <SocialBtn
                key={index}
                icon={social.icon}
                title={social.title}
                link={social.link}
                hover={social.hover}
                size={sizeIconSocial}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-3 font-semibold text-[var(--text-on-strong)]">{contactsTitle}</h2>
          <div>
            {contactMain.map((contacts, index) => (
              <div className="py-1" key={index}>
                <Link
                  className="inline-flex items-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-on-strong)]"
                  href={contacts.link + contacts.contact}
                >
                  <Image
                    className="mr-3 inline-block"
                    src={contacts.icon}
                    alt=""
                    width={25}
                    height={25}
                  />
                  <span>
                    {contacts.contact}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
            <p>{address.street}</p>
            <p className="mt-1">{address.place}</p>
          </div>
        </div>
        <div>
          <h2 className="mb-3 font-semibold text-[var(--text-on-strong)]">{mapTitle}</h2>
          <Map
            marker={address.placeDetails}
            position={address.position}
            markerAlt={address.markerAlt}
            attribution={mapAttribution}
          />
        </div>
      </div>
      <div className="border-t border-[var(--border)] px-4 py-3 text-center text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} {copyright}
      </div>
    </footer>
  );
}
