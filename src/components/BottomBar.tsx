import { FaPause, FaPlay, FaRegHeart } from "react-icons/fa";
import logoFM from "../assets/content.webp";
import { useAtom } from "jotai";
import { storePlayPause } from "../store";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { useState } from "react";

const BottomBar = () => {
  const [isActive, setIsActive] = useAtom(storePlayPause);
  const [mute, setMute] = useState(true);
  const [volume, setVolume] = useState(0);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    setMute(newVolume === 0);
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(50);
      setMute(false);
    } else {
      setMute(!mute);
    }
  };

  const play = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed bottom-0 w-full">
      <div className="bg-[#1f1f1f] py-3 px-4 flex justify-between md:hidden">
        <div className="flex gap-5">
          <div className="w-10 rounded-[4px] overflow-hidden">
            <img src={logoFM} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-white">Radio Yasmaga 96.9 FM (Ponorogo)</p>
            <div className="flex items-center text-red-500 text-xs">
              <GoDotFill />
              <p>Live</p>
            </div>
          </div>
        </div>
        <div
          onClick={play}
          className="w-8 h-8 flex justify-center items-center bg-Gainsboro/10 rounded-full cursor-pointer"
        >
          {isActive ? <FaPlay color="white" /> : <FaPause color="white" />}
        </div>
      </div>
      <div className="bg-[#1f1f1f] p-4 md:flex justify-around items-center hidden">
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <FaBackwardStep className="text-Gainsboro/50" size={20} />
            {isActive ? (
              <FaPlay
                color="white"
                size={28}
                onClick={play}
                className="cursor-pointer"
              />
            ) : (
              <FaPause
                color="white"
                size={28}
                onClick={play}
                className="cursor-pointer"
              />
            )}
            <FaForwardStep className="text-Gainsboro/50" size={20} />
          </div>
          <div className="flex items-center text-red-500 text-sm">
            <GoDotFill />
            <p>Live</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-10 rounded-[4px] overflow-hidden">
            <img src={logoFM} alt="" />
          </div>
          <p className="text-xs text-white">Radio Yasmaga 96.9 FM (Ponorogo)</p>
          <HiDotsVertical color="white" className="cursor-pointer" />
        </div>
        <div className="flex items-center text-sm gap-2 text-Gainsboro/70 cursor-pointer">
          <FaRegHeart />
          <p>31</p>
        </div>
        <div className="flex items-center gap-3">
          <div onClick={toggleMute}>
            {mute ? (
              <IoMdVolumeOff
                color="white"
                size={20}
                className="cursor-pointer"
              />
            ) : (
              <IoMdVolumeHigh
                color="white"
                size={20}
                className="cursor-pointer"
              />
            )}
          </div>
          <input
            type="range"
            className="bg-white cursor-pointer h-1"
            value={volume}
            onChange={handleVolumeChange}
            min="0"
            max="100"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
