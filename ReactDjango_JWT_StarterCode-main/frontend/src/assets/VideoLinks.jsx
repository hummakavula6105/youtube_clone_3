import React from "react";

const VideoLinks = (videoLink) => {

    return (
        <video>{videoLink}
            <iframe id="video1" title="amish_paradise" type="text/html" width="640" height="360"
            src="https://youtu.be/lOfZLb33uCg"
            frameborder="0">
            </iframe>
        </video>
    );
};

export default VideoLinks;