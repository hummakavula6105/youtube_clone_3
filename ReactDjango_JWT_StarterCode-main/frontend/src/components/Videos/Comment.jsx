import React, { useState } from 'react';
import './ButtonHandler'
import VideoPresenter from "../../pages/VideoPage/DisplayVideos";

import ButtonHandler from './ButtonHandler';
import VideoLinks from '../../assets/VideoLinks';

const AddComment = ({addNewComment}) => {

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        let newComment = {
            username: username,
            comment: comment,
        };
        console.log(newComment);
        addNewComment(newComment)
    }

    return (
        <body>
            <video className="video">
                <VideoPresenter video={VideoLinks} altText="Video"/>
            </video>
            <form onSubmit={handleSubmit} className='form-grid'>
                <section class='main section'>
                    <div>
                        <label>Title</label>
                        <input type="text" value={username} onChange={(event) => setUsername((event.target.value))} />
                    </div>
                    <div>
                        <label>Comment</label>
                        <input type='text' value={comment} onChange={(event) => setComment(event.target.value)}/>
                    </div>
                    <div>
                        <ButtonHandler type='submit' className='btn btn-primary' style={{marginTop: '1em'}}>Add Comment</ButtonHandler>
                    <div>
                    </div>
                    </div>
                </section>
            </form>
        </body>
    )
}

export default AddComment;