// components/ProfileHeader.tsx
export default function ProfileHeader() {
  return (
    <header className="flex items-center gap-4 p-4 bg-white border-b-2 border-red-500">
      <img src="/images/profile.jpg" alt="Profile" className="w-16 h-16 rounded-full border-2 border-red-500" />
      <div>
        <h1 className="text-xl font-bold text-red-600">Chananchida Akkarakit</h1>
        <p className="text-sm text-gray-500">@chananchida</p>
      </div>
    </header>
  );
}
