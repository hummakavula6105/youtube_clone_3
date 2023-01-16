import React from 'react';
import styled from "styled-components";

const colorArray=[
    "#003049",
    "#d62828",
    "#f77f00",
    "#fcbf49",
    "#eae2b7",
]

const Panel = styled.li`
width: 300px;
padding: 1rem;
display: grid;
place-content: center;
box-shadow: 2px 3px 8px -2px rgba(0, 0, 0, 0.253);
margin: 1rem;
border-radius: 3px;
font-size: 13px
`

const VidPresenter = ({video, changeVideo}) => {
    return ( 
        <Panel style={{backgroundColor: `${colorArray[Math.floor(Math.random()*colorArray)]}`}}>
            <button onClick={changeVideo}>
                <img 
                    src={video.snippet.thumbnails.high.url} 
                    height={video.snippet.thumbnails.high.height} 
                    width={video.snippet.thumbnails.high.width} 
                    id={video.id.videoId}
                    alt=""/>
                <h2 id={video.id.videoId}>{video.snippet.title}</h2>
            </button>
        </Panel>
     );
}
 
export default VidPresenter;