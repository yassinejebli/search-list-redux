import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import Header from "./components/containers/Header";
import TextItemList from "./components/containers/TextItemList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <TextItemList />
      </Container>
    </Provider>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 24px auto;
`;

export default App;
