import AddComment from "../../components/Videos/Comment";
import React from "react";

const DisplayComment = (comment) => {
  return (
    <div className="table">
      <div>
        {comment.parentEntries.filter(comment=>
         comment.title.includes(comment.query) || 
         comment.description.includes(comment.query))
         .map((comment) => {
          return <AddComment comment={comment} key = {comment.id} />;
         })}
      </div>
    </div>
  );
};

export default DisplayComment;