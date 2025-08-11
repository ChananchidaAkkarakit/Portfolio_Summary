// components/MapEmbed.tsx
// components/MapEmbed.tsx
export default function MapEmbed() {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.613818751441!2d100.73420707544877!3d14.040890786381816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d792808d10287%3A0xb88981757c160a8a!2sROV%20Apartment!5e0!3m2!1sen!2sus!4v1754863927773!5m2!1sen!2sus&hl=th";

  return (
    <div className=" w-full h-56 h-50 md:h-65 rounded-xl overflow-hidden shadow-md">
      <iframe
        title="แผนที่ - ROV Apartment"
        src={src}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
