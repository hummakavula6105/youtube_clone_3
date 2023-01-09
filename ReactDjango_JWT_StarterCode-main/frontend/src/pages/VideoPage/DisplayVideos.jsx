import Video from "../../components/Videos/Video";
import DisplayComment from "./DisplayComments";
import React from "react";

// const DisplayVideo = (video) => {
//   return (
//     <div className="table">
//       <div>
//         {video.parentEntries.filter(video=>
//          video.title.includes(video.query) || 
//          video.description.includes(video.query))
//          .map((video) => {
//           return (
//             <div>
//               <Video video={video} key = {video.id} />
//               <DisplayComment />
//             </div>
//             );
//         })};
//       </div>
//     </div>
//   );
// };

const DisplayVideo = ({ videos }) => {
  
  return (
    <div className="table">
      <div>
        {videos.map((video) => {
          return (
            <div>
              <Video title={video.title} description={video.description} key={video.id} imgURL={video.imgURL} videoURL={video.videoURL} altText={video.altText} />
              {/* <DisplayComment /> */}
            </div>
            );
        })};
      </div>
    </div>
  );
};

export default DisplayVideo;
