import React from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Content from './Components/Content';
import NetworkErrorDisplay from './NetworkErrorDisplay';
import { useStateValue } from './StateProvider';
import HomeInfo from './HomeInfo';
import LoadingDisplay from './LoadingDisplay';

function Home(props) {
    const [state, dispatch] = useStateValue();

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
            <Header/>
            <SearchBar/>
            {   
                state.wordContents === 'Default state'? (
                    state.loading ? (
                        <LoadingDisplay/>
                    ) : (
                        <HomeInfo/>
                    )
                ) : (
                    state.wordContents === 'Network Error' || state.wordContents === 'timeout exceeded' ? (
                        state.loading ? (
                            <LoadingDisplay/>
                        ) : (
                            <NetworkErrorDisplay/>
                        )
                    ) : (
                        state.loading ? (
                            <LoadingDisplay/>
                        ) : (
                            <Content/>
                        )          
                    )
                )
            }
        </div>
    );
}

export default Home;