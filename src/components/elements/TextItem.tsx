import React from 'react';
import styled from 'styled-components';

interface TextItemProps{
    text: string;
}

export default function TextItem({text}: TextItemProps){
    return <Wrapper>
        {text}
    </Wrapper>
}

const Wrapper = styled.div`
  padding: 6px;
  border-bottom: 1px solid #C1C1C1;
  
`
