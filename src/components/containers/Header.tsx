import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {filterTextItems} from "../../actions";
import {State} from "../../reducers";
export default function Header(){
    const dispatch = useDispatch();
    const searchText = useSelector<State, string>(state => state.searchText);


    const onFilter = ({target:{value}}: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterTextItems(value))
    }
    return <Wrapper>
        <SearchInput value={searchText} onChange={onFilter} type="search" placeholder="Search" />
        <VerticalLine />
        <AddButton>+</AddButton>
    </Wrapper>
}

const Wrapper = styled.div`
  padding: 6px;
  display: flex;
  
`

const SearchInput = styled.input`
  padding: 8px;
  width: 100%;
`

const VerticalLine = styled.div`
  border-left: 1px solid #000;
  margin: 0 16px;
`;
const AddButton = styled.button`
  font-size: 30px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background-color: rgba(137, 176, 240, 0.1);
  }
  &:focus {
    outline:0;
  }
 
`
