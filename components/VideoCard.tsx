// components/VideoCard.tsx
type VideoCardProps = {
  title: string;
  imgSrc: string;
  caption: string;
};

export default function VideoCard({ title, imgSrc, caption }: VideoCardProps) {
  return (
    <div className="bg-pink-100 p-2 rounded-lg shadow-sm">
      <p className="text-xs font-semibold mb-1 text-pink-600">{title}</p>
      <img src={imgSrc} className="rounded-md mb-2" />
      <p className="text-sm">{caption}</p>
    </div>
  );
}
