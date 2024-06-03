import React from 'react'
import Header from './Header'
// import { API_OPTIONS } from '../utils/constants';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNowPlayingMovies } from '../utils/moviesSlice';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();

 
  return (
    <div>
        <Header />
        {/* 
        -MainContainer
          - Video Background 
          - VideoTitle
        SecondaryContainer
         -MovieList * n
         -cards * n
        */}
        <MainContainer />
        <SecondaryContainer />
        
    </div>
  )
}

export default Browse