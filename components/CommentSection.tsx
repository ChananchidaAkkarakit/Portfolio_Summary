// components/CommentSection.tsx
export default function CommentSection() {
  return (
    <section className="m-4 p-4 bg-pink-100 rounded-xl text-sm">
      <p className="text-pink-600 font-semibold mb-2">Comments 3.1K</p>
      <p>
        <strong>Jaehyuk</strong> – 10 mins ago<br />
        I love you so much
      </p>
      <p className="mt-2">
        <strong>Jihoon</strong> – 9 months ago<br />
        <em className="text-pink-700 font-semibold">You are so talented!!</em>
      </p>
    </section>
  );
}
