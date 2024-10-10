import yasmagaLogo from "../assets/yasmaga_1.png"; // Import logo
import { Phone } from "lucide-react"; // Menggunakan ikon dari lucide-react

const Header = () => {
  return (
    <div className="bg-[#141414] shadow-sm h-[70px] flex items-center justify-between px-5">
      {/* Kontainer untuk logo dan teks */}
      <div className="flex items-center">
        {/* Logo Yasmaga yang responsif (untuk logo vertikal) */}
        <img 
          src={yasmagaLogo} 
          alt="Logo Yasmaga" 
          className="w-16 h-auto sm:w-16 lg:w-20 mr-3" 
        />
      </div>
      {/* Penyesuaian tampilan teks dan ikon di sebelah kanan */}
      <div className="flex items-center text-sm font-normal">
        <Phone size={16} className="mr-2 text-yellow-500" />
        <span className="text-yellow-500">0811-3375-559</span> {/* Mengubah warna teks menjadi kuning */}
      </div>
    </div>
  );
};

export default Header;
