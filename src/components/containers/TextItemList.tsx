import React from 'react';
import styled from 'styled-components';
import TextItem from "../elements/TextItem";
import {useSelector} from "react-redux";
import {State} from "../../reducers";

export default function TextItemList() {
    const {allTextItems, filteredTextItems} = useSelector<State, State>(state => state);

    console.log({allTextItems, filteredTextItems})
    return <Wrapper>
        {filteredTextItems.map((textItem: string, index: number) => (
            <TextItem key={index} text={textItem}/>
        ))}
    </Wrapper>
}

const Wrapper = styled.div`
  padding: 8px;
`
