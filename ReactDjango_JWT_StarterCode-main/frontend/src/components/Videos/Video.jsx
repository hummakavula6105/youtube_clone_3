import React from "react";

const Video = ({ title='video', src }) => {
  return (
    <>
      <iframe
        id="ytplayer"
        title= {title}
        type="text/html"
        width="940"
        height="600"
        align-items="center"
        src={src}
      ></iframe>
    </>
  );
};

export default Video;