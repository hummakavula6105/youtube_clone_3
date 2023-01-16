import React from "react";
import styled from "styled-components";

const FlexContainer = styled.ul`
display:flex;
flex-wrap: wrap;
flex-direction: column;
place-content: top;
justify-content: flex-start;
align-content: flex start;
`

const DisplayComment = ({comments}) => {
  return (
      <FlexContainer>
        {comments.map(comment =>  <li key = {comment.id} >{comment.text}</li>) }
      </FlexContainer>
  );
};

export default DisplayComment;