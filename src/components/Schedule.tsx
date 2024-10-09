import { useState } from "react";
import bgBanner from "../assets/content.webp";
import yasmagaLogo from "../assets/yasmaga_1.png"; // Import logo
import { day, schedule } from "../utils/dummyData";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(day[0]);
  const filteredSchedule = schedule.filter((item) => item.day === selectedDay);

  return (
    <div className="bg-[#202020] px-[5%] pt-5 pb-20">
      {/* Header */}
      <h1 className="capitalize font-bold text-lg text-white mb-4">
        Radio Yasmaga 96.9 FM
      </h1>

      {/* Bagian Profil */}
      <div className="flex items-center gap-5 text-white mb-6">
        <img
          src={bgBanner}
          alt="Radio Yasmaga 96.9 FM"
          className="w-16 h-16 rounded-lg"
        />
        <p className="text-xs text-Gainsboro/70">
          Radio 96.9 Yasmaga FM Ponorogo adalah salah satu stasiun radio FM yang
          ada di wilayah kabupaten Ponorogo. Yasmaga 96.9 FM menjadi alternatif
          pilihan radio yang memberi hiburan, informasi dan edukasi, sehingga
          radio ini memiliki banyak pendengar setia.
        </p>
      </div>

      {/* Konten Jadwal Siaran */}
      <p className="capitalize font-bold text-lg text-white mb-4">
        Jadwal Radio Yasmaga 96.9 FM
      </p>

      {/* Navigasi Hari */}
      <div className="flex items-center gap-5 text-white mt-8 overflow-x-auto pb-4">
        {day.map((item, index) => (
          <p
            key={index}
            className={`cursor-pointer border-b-2 ${
              item === selectedDay
                ? "border-b-[#FAD810]"
                : "border-b-transparent"
            }`}
            onClick={() => setSelectedDay(item)}
          >
            {item}
          </p>
        ))}
      </div>

      {/* Daftar Jadwal Berdasarkan Hari yang Dipilih */}
      <div className="mt-5 space-y-4">
        {filteredSchedule.map((item, index) => (
          <div key={index}>
            {/* Waktu Siaran */}
            <div className="bg-Gainsboro/5 text-white px-[4%] md:px-[1%] h-9 flex items-center rounded-md">
              {/* Menambahkan `rounded-md` untuk memperhalus sudut */}
              <p>
                {item.startTime} WIB - {item.endTime} WIB
              </p>
            </div>

            {/* Detail Program */}
            <div className="flex items-center gap-3 bg-[#2A2A2A] p-3 rounded-md min-h-18">
              {/* Menambahkan `rounded-md` ke seluruh card */}
              <img
                src={bgBanner}
                alt={item.title}
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="text-xs text-Gainsboro">{selectedDay}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src={yasmagaLogo}
            alt="Yasmaga Logo"
            className="w-24 h-auto md:w-32 mb-4" // Responsive width for logo + added margin bottom
          />
          <p className="text-xs text-Gainsboro/70">
            © 2024 Radio Yasmaga 96.9 FM v1.1.0
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Schedule;
