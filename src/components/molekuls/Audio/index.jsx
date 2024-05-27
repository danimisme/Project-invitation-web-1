import { useEffect, useRef, useState } from "react";

export function autoPlay() {
  const audio = document.getElementById("song");
  console.log(audio);
  audio.play();
}

export default function Audio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      playAudio();
    } else {
      pauseAudio();
    }
  }, [isPlaying]);

  const playAudio = () => {
    audioRef.current.play();
    console.log("play");
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    console.log("pause");
  };

  return (
    <div className="audio-container">
      <audio id="song" ref={audioRef} autoPlay loop>
        <source src="/audio/audio1.mp3" type="audio/mp3" />
      </audio>

      <div
        className="audio-icon-wrapper"
        style={{ display: "" }}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <i className="bi bi-disc"></i>
      </div>
    </div>
  );
}
