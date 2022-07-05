import React from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Content from './Components/Content';

function Home(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
            <Header/>
            <SearchBar/>
            <Content/>
        </div>
    );
}

export default Home;