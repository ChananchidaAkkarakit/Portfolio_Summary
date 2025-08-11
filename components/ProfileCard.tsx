export default function ProfileCard() {
  return (
    <section
      className="m-4  h-full rounded-xl shadow-sm border border-pink-200 relative bg-[url('/images/107.png')] bg-cover bg-center text-white overflow-hidden"
    >
      {/* พื้นหลัง overlay + blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl z-0" />

      {/* เนื้อหาด้านหน้า */}
      <div className="relative z-10 p-4 h-full flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold">@jaehyukngitis</p>
          <p className="text-sm">
            khay ☁︎ sagittarius, tume (kadang boongan)<br />
            jaehyukngitis + bim /hj
          </p>
        </div>
        <a href="#" className="text-blue-200 text-sm underline mt-2">
          main spotify dump pin
        </a>
      </div>
    </section>
  );
}
