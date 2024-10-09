import { FaRegSquare } from "react-icons/fa"; // Menggunakan ikon kotak kosong
import bgBanner from "../assets/content.webp";
import { IoPlayOutline, IoShareSocialOutline } from "react-icons/io5";
import { SlEarphones } from "react-icons/sl";
import { BsChatRightText } from "react-icons/bs";
import { useAtom } from "jotai";
import { storePlayPause } from "../store";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io"; // Mengimpor ikon hati penuh dan hati kosong
import newsIcon from "../assets/news.svg"; // Mengimpor ikon SVG dari assets
import { useState } from "react";

const Banner = () => {
  const [isActive, setIsActive] = useAtom(storePlayPause);
  const [isFavorited, setIsFavorited] = useState(false); // State untuk menandakan apakah sudah favorit

  const play = () => {
    setIsActive(!isActive);
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center relative lg:bg-center bg-no-repeat px-[5%]"
      style={{ backgroundImage: `url(${bgBanner})`, backgroundSize: "100%" }}
    >
      <div className="absolute inset-0 bg-gradientMobile md:bg-gradientDesktop" />

      <div className="relative flex flex-col gap-5 w-full">
        {/* Menghilangkan rounded pada gambar banner */}
        <div className="w-[130px] h-[130px] mt-32 mx-auto overflow-hidden">
          <img src={bgBanner} alt="Banner" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div
            onClick={play}
            className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer text-black"
          >
            {isActive ? <IoPlayOutline size={32} /> : <FaRegSquare size={32} />}
          </div>
          <p className="text-xl font-bold text-center text-white">
            Radio Yasmaga 96.9 FM
          </p>
        </div>
        <p className="text-sm text-center text-white">
          Radio 96.9 Yasmaga FM Ponorogo adalah salah satu stasiun radio FM yang ada di wilayah kabupaten Ponorogo. Yasmaga 96.9 FM menjadi alternatif pilihan radio yang memberi hiburan, informasi dan edukasi, sehingga radio ini memiliki banyak pendengar setia.
        </p>

        <div className="flex items-center w-full text-white gap-5 md:gap-10 mt-10">
          <div
            onClick={toggleFavorite}
            className="flex items-center justify-center gap-4 border border-white w-full py-2 rounded-[4px] cursor-pointer"
          >
            {isFavorited ? (
              <IoIosHeart className="text-red-500 transition-transform duration-300 transform scale-125" /> // Hati penuh dengan animasi
            ) : (
              <IoIosHeartEmpty className="text-white transition-transform duration-300" />
            )}
            <p className="text-xs font-bold uppercase">FAVORIT</p>
          </div>

          <label
            htmlFor="my_modal_6"
            className="flex items-center justify-center gap-4 border border-white w-full py-2 rounded-[4px] cursor-pointer"
          >
            <IoShareSocialOutline />
            <p className="text-xs font-bold uppercase">BAGIKAN</p>
          </label>
        </div>

        <div className="w-full bg-[#202020] rounded-lg flex items-center p-3 lg:px-20 lg:py-5 gap-3 lg:gap-20">
          <div className="min-w-20 w-20 h-20 overflow-hidden">
            <img src={bgBanner} alt="Mini Banner" className="w-full h-full" />
          </div>
          <div className="text-white flex flex-col gap-3">
            <div className="flex items-start gap-[10px]">
              <p className="rounded-lg border border-[#FAD810] text-[#F9CF5F] text-[10px] font-bold capitalize py-[2px] px-1">
                Live
              </p>
              <p className="text-sm font-bold text-Gainsboro">
                Radio Yasmaga 96.9 FM
              </p>
            </div>
            <p className="text-xs text-Gainsboro/70 mb-4">
              Radio 96.9 Yasmaga FM Ponorogo adalah salah satu stasiun radio FM yang ada di wilayah kabupaten Ponorogo. Yasmaga 96.9 FM menjadi alternatif pilihan radio yang memberi hiburan, informasi dan edukasi, sehingga radio ini memiliki banyak pendengar setia.
            </p>
            <div className="flex items-center gap-5 text-xs text-white">
              <div className="flex items-center gap-1">
                <SlEarphones />
                <p>0</p>
              </div>
              <div className="flex items-center gap-1">
                <BsChatRightText />
                <p>0</p>
              </div>
            </div>
          </div>
        </div>

        <p className="capitalize font-bold text-Gainsboro text-xl my-4">
          Setelah ini
        </p>
        <div className="flex flex-col items-center gap-4 mt-4 mb-10">
          <img src={newsIcon} alt="Ikon Jadwal" className="w-10 h-10" />
          <p className="text-base font-bold text-Gainsboro">
            Jadwal Program Belum Tersedia
          </p>
          <p className="text-xs capitalize font-bold text-Gainsboro">
            Coba lagi di lain hari ya
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
