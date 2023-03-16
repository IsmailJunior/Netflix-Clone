import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const testSlice = createSlice( {
	name: 'test',
	initialState,
	reducers: {
		test: {
			reducer ( state, action )
			{
				console.log('Redux up and running!')
			}
		}
	}
} );

export default testSlice.reducer;