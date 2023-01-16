import React, { useState } from "react";
import axios from "axios";
import "./ButtonHandler";

import ButtonHandler from "./ButtonHandler";
import useAuth from "../../hooks/useAuth";


const AddComment = ({ getVideoComments, videoId }) => {
  const [comment, setComment] = useState("");
  const [user, token] = useAuth();

  const handleSubmit = async(event)=> {
    event.preventDefault();
    let newComment = {
      user_id: user.id,
      video_id: videoId,
      text: comment,
      likes: 0,
      dislikes: 0,
    };
    let response = await axios.post(`http://127.0.0.1:8000/api/comments/` , newComment , {headers:{Authorization: `Bearer ${token}`}})
    console.log(response.data);
    getVideoComments();
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <section className="main section">
        <div>
          <label>Add Comment</label>
          <input
            type="text"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <div>
          <ButtonHandler
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "1em" }}
          >
            Add Comment
          </ButtonHandler>
          <div></div>
        </div>
      </section>
    </form>
  );
};

export default AddComment;
