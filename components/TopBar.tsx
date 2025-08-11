// components/TopBar.tsx
export default function TopBar() {
  return (
    <header className="bg-pink-200 p-4 flex items-center justify-between rounded-b-2xl shadow-md">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1 rounded-full border border-pink-300 bg-white text-sm focus:outline-none"
        />
        <button className="text-pink-600 text-xl">🏠</button>
      </div>
      <h1 className="font-bold text-pink-700 text-lg">KHAY’S WEB</h1>
      <img
        src="/images/profile.jpg"
        className="w-8 h-8 rounded-full border-2 border-white"
        alt="avatar"
      />
    </header>
  );
}
