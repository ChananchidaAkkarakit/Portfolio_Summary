import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  tech: string;
}

export default function ProjectCard({ title, description, image, tech }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex gap-4">
      <Image src={image} alt={title} width={120} height={80} className="rounded" />
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-pink-500 mt-2">Tech: {tech}</p>
      </div>
    </div>
  );
}
