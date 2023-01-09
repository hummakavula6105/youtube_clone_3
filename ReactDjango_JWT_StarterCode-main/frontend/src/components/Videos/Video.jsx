import React from 'react';
// import VideoPresenter from './VideoPresenter';
import ButtonHandler from './ButtonHandler';
import VideoLinks from '../../assets/VideoLinks';

const Video = (props) => {
    
    return (
        <div>
            <a href={props.videoURL}>
                <div>
                    <img src={props.url} alt={props.altText} width='50'></img>
                </div>

                <div>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </a>
        </div>
        );
    };
  
  export default Video;