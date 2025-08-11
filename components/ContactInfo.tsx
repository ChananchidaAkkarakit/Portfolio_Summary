import EmailIcon from "@/assets/email.svg";
import PhoneIcon from "@/assets/phone.svg";
import GithubIcon from "@/assets/github.svg";
import LocationIcon from "@/assets/location.svg";
import MapEmbed from "./MapEmbed";
export default function ContactSection() {
  const address = "Khlong Hok, Khlong Luang, Pathum Thani";
  // ⭐ ใส่พิกัดจริงของคุณแทนค่าตัวอย่างนี้
  const coords = { lat: 14.04099486925066, lng: 100.73677126755845 };

  return (
    <section id="contact" className="mt-8">
      <h3 className="text-5xl font-bold italic text-[#6E412C] mb-10">Contact Info</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* LEFT */}
        <div className="space-y-7">
          <p className="flex items-center gap-3 text-2xl text-[#6E412C]">
            <EmailIcon className="w-10 h-10 text-[#E996B2] shrink-0" />
            <a href="mailto:chananchida.akk@gmail.com" className="hover:underline">
              chananchida.akk@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-3 text-2xl text-[#6E412C]">
            <PhoneIcon className="w-10 h-10 text-[#E996B2] shrink-0" />
            <a href="tel:+66863950330" className="hover:underline">
              +668 6395 0330
            </a>
          </p>

          {/* GitHub */}
          <p className="flex items-center gap-3 text-2xl text-[#6E412C]">
            <GithubIcon className="w-10 h-10 text-[#E996B2] shrink-0" />
            <a
              href="https://github.com/ChananchidaAkkarakit"
              target="_blank"
              rel="noopener noreferrer"
              className="underline break-all underline-offset-2"
            >
              github.com/ChananchidaAkkarakit
            </a>
          </p>

          <p className="flex items-center gap-3 text-2xl text-[#6E412C]">
            <LocationIcon className="w-10 h-10 text-[#E996B2] shrink-0" />
            <a
              href="https://maps.app.goo.gl/vgML8DnERkVSMSUr9"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              title={address}
            >
              {address}
            </a>
          </p>
        </div>

        {/* RIGHT */}
        <div className=" px-20 flex items-center ">
          <MapEmbed />
        </div>

      </div>
    </section>
  );
}
