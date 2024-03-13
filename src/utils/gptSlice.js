import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        gptMovieNames: null,
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.gptMovies = movieResults;
            state.gptMovieNames = movieNames;
        },
        clearMovies: (state) => {
            state.gptMovies = null;
            state.gptMovieNames = null;
        }
    },
})

export const {toggleGptSearchView, addGptMovieResults, clearMovies} = gptSlice.actions;

export default gptSlice.reducer;