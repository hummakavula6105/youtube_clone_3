import React from 'react';
import VidPresenter from './VidPresenter';
import styled from 'styled-components';

const FlexContainer = styled.ul`
display:flex;
flex-wrap: wrap;
`

const VidMapper = ({vidArray}) => {
    return ( 
        <FlexContainer>
            {vidArray.map(el => <VidPresenter key={el.id.videoId} video = {el}/>)}
        </FlexContainer>
    );
}
 
export default VidMapper;