import Navbar from "../components/Navbar";
import ContactInfo from "../components/ContactInfo";

export default function Contacts() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <ContactInfo />
      </main>
    </div>
  );
}
