import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config/axios';
import requests from '../request';

const initialState = {
	title: 'Movie Title',
	description: 'Movie Description',
	banner: 'Movie Banner Image'
};

export const getTrending = createAsyncThunk( 'movies/getTrending', async () =>
{
	try
	{
		const request = await axios.get( requests.fetchNetflixOriginals );
		const res = request.data.results[ Math.floor( Math.random() * request.data.results.length - 1 ) ];
		return res;

	} catch ( error )
	{
		console.error( error );
	}
} );

const movieSlice = createSlice( {
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers ( builder )
	{
		builder
			.addCase( getTrending.rejected, ( state, action ) =>
			{
				console.log( 'Request Failed' );
			} )
			.addCase( getTrending.fulfilled, ( state, action ) =>
			{
				const original_title = action.payload?.original_title;
				const title = action.payload?.title;
				const name = action.payload?.name;
				const overview = action.payload?.overview;
				const backdrop_path = action.payload?.backdrop_path;

				state.title = original_title || name || title;
				state.description = overview;
				state.banner = backdrop_path;
			} );
	}
} );

export const selectTitle = ( state ) => state.movies.title;
export const selectDescription = ( state ) => state.movies.description;
export const selectBanner = ( state ) => state.movies.banner;
export default movieSlice.reducer;