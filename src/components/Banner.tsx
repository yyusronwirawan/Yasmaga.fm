import { FaRegSquare } from "react-icons/fa"; 
import bgBanner from "../assets/content.webp";
import { IoPlayOutline, IoShareSocialOutline } from "react-icons/io5";
import { SlEarphones } from "react-icons/sl";
import { BsChatRightText } from "react-icons/bs";
import { useAtom } from "jotai";
import { storePlayPause } from "../store";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io"; 
import newsIcon from "../assets/news.svg"; 
import { useState, useRef } from "react";

const Banner = () => {
  const [isActive, setIsActive] = useAtom(storePlayPause);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showNotification, setShowNotification] = useState(false); 
  const audioRef = useRef(null); // Use useRef to store the audio instance

  const streamUrl = "https://stream-152.zeno.fm/kfp2ghnat18uv";

  const play = () => {
    setIsActive(!isActive);
    if (!isActive) {
      // Play the stream
      audioRef.current = new Audio(streamUrl);
      audioRef.current.play();
    } else {
      // Pause the stream
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(streamUrl); 
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); 
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center relative lg:bg-center bg-no-repeat px-[5%]"
      style={{ backgroundImage: `url(${bgBanner})`, backgroundSize: "100%" }}
    >
      <div className="absolute inset-0 bg-gradientMobile md:bg-gradientDesktop" />

      <div className="relative flex flex-col gap-5 w-full">
        <div className="w-[130px] h-[130px] mt-32 mx-auto overflow-hidden rounded-lg">
          <img src={bgBanner} alt="Banner" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div
            onClick={play}
            className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer text-black"
          >
            {isActive ? <FaRegSquare size={32} /> : <IoPlayOutline size={32} />}
          </div>
          <p className="text-xl font-bold text-center text-white">
            Radio Yasmaga 96.90 FM Mhz
          </p>
        </div>
        <p className="text-sm text-center text-white">
          Radio Yasmaga 96.90 FM Ponorogo adalah salah satu stasiun radio FM yang ada di wilayah kabupaten Ponorogo. Yasmaga 96.90 FM menjadi alternatif pilihan radio yang memberi hiburan, informasi dan edukasi, sehingga radio ini memiliki banyak pendengar setia.
        </p>

        <div className="flex items-center w-full text-white gap-5 md:gap-10 mt-10">
          <div
            onClick={toggleFavorite}
            className="flex items-center justify-center gap-4 border border-white w-full py-2 rounded-[4px] cursor-pointer"
          >
            {isFavorited ? (
              <IoIosHeart className="text-red-500 transition-transform duration-300 transform scale-125" />
            ) : (
              <IoIosHeartEmpty className="text-white transition-transform duration-300" />
            )}
            <p className="text-xs font-bold uppercase">FAVORIT</p>
          </div>

          <label
            onClick={handleShare}
            className="flex items-center justify-center gap-4 border border-white w-full py-2 rounded-[4px] cursor-pointer"
          >
            <IoShareSocialOutline />
            <p className="text-xs font-bold uppercase">BAGIKAN</p>
          </label>
        </div>

        <div className="w-full bg-[#202020] rounded-lg flex items-center p-3 lg:px-20 lg:py-5 gap-3 lg:gap-20">
          <div className="min-w-20 w-20 h-20 overflow-hidden rounded-lg">
            <img src={bgBanner} alt="Mini Banner" className="w-full h-full object-cover" />
          </div>
          <div className="text-white flex flex-col gap-3">
            <div className="flex items-start gap-[10px]">
              <p className="rounded-lg border border-[#FAD810] text-[#F9CF5F] text-[10px] font-bold capitalize py-[2px] px-1">
                Live
              </p>
              <p className="text-sm font-bold text-Gainsboro">
                Radio Yasmaga 96.90 FM
              </p>
            </div>
            <p className="text-xs text-Gainsboro/70 mb-4">
              Radio Yasmaga 96.90 FM Ponorogo adalah salah satu stasiun radio FM yang ada di wilayah kabupaten Ponorogo. Yasmaga 96.90 FM menjadi alternatif pilihan radio yang memberi hiburan, informasi dan edukasi, sehingga radio ini memiliki banyak pendengar setia.
            </p>
            <div className="flex items-center gap-5 text-xs text-Gainsboro/70">
              <div className="flex items-center gap-1">
                <SlEarphones className="text-Gainsboro/70" />
                <p className="text-Gainsboro/70">2</p>
              </div>
              <div className="flex items-center gap-1">
                <BsChatRightText className="text-Gainsboro/70" />
                <p className="text-Gainsboro/70">0</p>
              </div>
            </div>
          </div>
        </div>

        <p className="capitalize font-bold text-Gainsboro text-xl my-4">
          Setelah ini
        </p>
        <div className="flex flex-col items-center gap-4 mt-4 mb-10">
          <img src={newsIcon} alt="Ikon Jadwal" className="w-6 h-6" />
          <p className="text-base font-bold text-Gainsboro">
            Jadwal Program Belum Tersedia
          </p>
          <p className="text-xs capitalize font-bold text-Gainsboro text-yellow-500">
            Coba lagi di lain hari ya
          </p>
        </div>

        {showNotification && (
          <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-[#1f1f1f] text-white rounded-lg px-4 py-2 shadow-lg">
            <p className="text-xs">Link telah disalin ke papan klip!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
