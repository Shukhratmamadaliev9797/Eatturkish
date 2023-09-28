import React from "react";
import {
  Player,
  BigPlayButton,
  PosterImage,
  LoadingSpinner,
} from "video-react";

export default function Video() {
  return (
    <div>
      <Player
        fluid={false}
        playsInline
        // poster="/image/grill.jpeg"
        src="/video/restaurant.mp4"
        height={800}
        width={"100%"}
      >
        <BigPlayButton className="video__layer" position="center" />
        <LoadingSpinner />
      </Player>
    </div>
  );
}
