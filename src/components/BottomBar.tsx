import { FaRegSquare, FaPlay, FaRegHeart } from "react-icons/fa";
import logoFM from "../assets/content.webp";
import { useAtom } from "jotai";
import { storePlayPause } from "../store";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5"; 
import { useState, useEffect, useRef } from "react";

const BottomBar = () => {
  const [isActive, setIsActive] = useAtom(storePlayPause);
  const [mute, setMute] = useState(true);
  const [volume, setVolume] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(31);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const websiteLink = "https://yourwebsite.com";
  const streamUrl = "https://stream-152.zeno.fm/kfp2ghnat18uv"; // URL streaming
  const audioRef = useRef<HTMLAudioElement | null>(null); // Ref untuk elemen audio

  // Load likes count from localStorage on mount
  useEffect(() => {
    const storedLikes = localStorage.getItem("likesCount");
    const storedLiked = localStorage.getItem("liked") === "true";

    if (storedLikes) {
      setLikesCount(Number(storedLikes));
    }
    setLiked(storedLiked);
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    setMute(newVolume === 0); // Set mute if volume is 0

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100; // Update volume pada elemen audio
    }
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(50);
      setMute(false);
    } else {
      setMute(!mute);
    }

    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted; // Mute/unmute elemen audio
    }
  };

  const play = () => {
    setIsActive(!isActive); // Toggle play/pause status

    if (audioRef.current) {
      if (isActive) {
        audioRef.current.pause(); // Pause audio
      } else {
        audioRef.current.play(); // Play audio
      }
    }
  };

  const toggleLike = () => {
    const newLikedStatus = !liked;
    setLiked(newLikedStatus); // Toggle like status

    // Update likes count and store in localStorage
    const newLikesCount = newLikedStatus ? likesCount + 1 : likesCount - 1;
    setLikesCount(newLikesCount);
    localStorage.setItem("likesCount", String(newLikesCount));
    localStorage.setItem("liked", String(newLikedStatus));
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(websiteLink); // Copy link to clipboard
      setShowNotification(true); // Show notification
      setTimeout(() => setShowNotification(false), 2000); // Hide after 2 seconds
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <div className="fixed bottom-0 w-full">
      {/* Audio Element */}
      <audio ref={audioRef} src={streamUrl} preload="metadata" />

      <div className="bg-[#1f1f1f] py-3 px-4 flex justify-between md:hidden">
        <div className="flex gap-5">
          <div className="w-10 rounded-[4px] overflow-hidden">
            <img src={logoFM} alt="Logo Radio" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-Gainsboro/70">Radio Yasmaga 96.90 FM Mhz (Ponorogo)</p>
            <div className="flex items-center text-red-500 text-xs">
              <GoDotFill />
              <p>Live</p>
            </div>
          </div>
        </div>
        <div
          onClick={play}
          className="w-8 h-8 flex justify-center items-center bg-gray-500/10 rounded-full cursor-pointer"
        >
          {isActive ? <FaRegSquare color="white" size={20} /> : <FaPlay color="white" size={20} />}
        </div>
      </div>
      <div className="bg-[#1f1f1f] p-4 md:flex justify-around items-center hidden">
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <FaBackwardStep className="text-Gainsboro/70" size={20} />
            {isActive ? (
              <FaRegSquare color="white" size={20} onClick={play} className="cursor-pointer" />
            ) : (
              <FaPlay color="white" size={20} onClick={play} className="cursor-pointer" />
            )}
            <FaForwardStep className="text-Gainsboro/70" size={20} />
          </div>
          <div className="flex items-center text-red-500 text-sm">
            <GoDotFill />
            <p>Live</p>
          </div>
        </div>
        <div className="flex items-center gap-5 relative">
          <div className="w-10 rounded-[4px] overflow-hidden">
            <img src={logoFM} alt="Logo Radio" />
          </div>
          <p className="text-xs text-Gainsboro/70">Radio Yasmaga 96.90 FM Mhz (Ponorogo)</p>
          <HiDotsVertical color="gray" className="cursor-pointer" onClick={() => setShowShareOptions(!showShareOptions)} />
          {showShareOptions && (
            <div className="absolute right-0 bottom-[calc(100%+8px)] bg-[#1f1f1f] text-white rounded-lg shadow-lg p-4 w-40">
              <div className="flex items-center cursor-pointer" onClick={handleShare}>
                <IoShareSocialOutline className="mr-2" color="gray" />
                <p className="text-xs text-Gainsboro/70">Bagikan</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center text-sm gap-2 text-Gainsboro/70 cursor-pointer">
          <div onClick={toggleLike} className={`transition duration-300 transform ${liked ? "scale-125" : ""}`}>
            <FaRegHeart color={liked ? "red" : "Gainsboro/70"} size={16} />
          </div>
          <p>{likesCount}</p> {/* Update to show dynamic likes count */}
        </div>
        <div className="flex items-center gap-3">
          <div onClick={toggleMute}>
            {mute ? (
              <IoMdVolumeOff color="white" size={20} className="cursor-pointer" />
            ) : (
              <IoMdVolumeHigh color="white" size={20} className="cursor-pointer" />
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

      {/* Notification Popup for Link Copied */}
      {showNotification && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-[#1f1f1f] text-white rounded-lg px-4 py-2 shadow-lg">
          <p className="text-xs">Link telah disalin ke papan klip!</p>
        </div>
      )}
    </div>
  );
};

export default BottomBar;
