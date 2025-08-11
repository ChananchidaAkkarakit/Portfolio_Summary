import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-pink-100 p-4 rounded-lg flex gap-4">
          <Image src="/student-card.jpg" alt="Student ID" width={100} height={120} />
          <div>
            <p><strong>Name:</strong> Chananchida Akkarakit</p>
            <p><strong>Nickname:</strong> Baifern</p>
            <p><strong>Birth:</strong> 2004-01-03</p>
            <p><strong>Faculty:</strong> Engineering</p>
            <p><strong>Major:</strong> Computer Engineering</p>
          </div>
        </div>
      </main>
    </div>
  );
}
