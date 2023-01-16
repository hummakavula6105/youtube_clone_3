import React from 'react';
import VidPresenter from './VidPresenter';
import styled from 'styled-components';

const FlexContainer = styled.ul`
display:flex;
flex-wrap: wrap;
`

const VidMapper = ({vidArray, changeVideo}) => {
    return ( 
        <FlexContainer>
            {vidArray.map(el => <VidPresenter key={el.id.videoId} video = {el} changeVideo={changeVideo}/>)}
        </FlexContainer>
    );
}
 
export default VidMapper;