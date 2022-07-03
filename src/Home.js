import React from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';

function Home(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Header/>
            <SearchBar/>
        </div>
    );
}

export default Home;