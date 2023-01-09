import React from 'react';

const VideoPresenter = ({video, altText}) => {
    return ( 
        <div>
           <video src={video} className="float-middle" alt={altText} />
        </div>
     );
}
 
export default VideoPresenter;