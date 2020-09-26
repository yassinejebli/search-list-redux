import React from 'react';
import styled from 'styled-components';
import TextItem from "../elements/TextItem";
import {useSelector} from "react-redux";
import {State} from "../../reducers";

export default function TextItemList() {
    const textItems = useSelector<State, string[]>(state => state.textItems);
    console.log({textItems})
    return <Wrapper>
        {textItems.map((textItem: string, index: number) => (
            <TextItem key={index} text={textItem}/>
        ))}
    </Wrapper>
}

const Wrapper = styled.div`
  padding: 8px;
`
