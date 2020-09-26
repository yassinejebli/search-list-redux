import React from 'react';
import {Provider} from "react-redux";
import Header from "./components/containers/Header";
import TextItemList from "./components/containers/TextItemList";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <TextItemList/>
        </Provider>
    );
}

export default App;
