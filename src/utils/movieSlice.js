import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trendingMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpComingMovies, addTrendingMovies} = movieSlice.actions;

export default movieSlice.reducer;