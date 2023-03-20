import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const initialState = {
	user: null,
	status: 'idle'
};

export const register = createAsyncThunk( 'user/register', async ( { email, password } ) =>
{
	try
	{
		await createUserWithEmailAndPassword( auth, email, password );
	} catch ( error )
	{
		console.log( error.message );
	}
} );

export const signIn = createAsyncThunk( 'user/signIn', async ( { email, password } ) =>
{
	try
	{
		await signInWithEmailAndPassword( auth, email, password );
	} catch ( error )
	{
		console.log( error.message );
	}
} );

const userSlice = createSlice( {
	name: 'user',
	initialState,
	reducers: {
		login: ( state, action ) =>
		{
			state.user = action.payload;
		},
		logout: ( state, action ) =>
		{
			signOut( auth );
			state.user = null;
			state.status = 'idle'
		}
	},
	extraReducers ( builder )
	{
		builder
			.addCase( register.pending, ( state, action ) =>
			{
				console.log( 'Loading' );
				state.status = 'loading';
			} )
			.addCase( register.rejected, ( state, action ) =>
			{
				console.log( 'Error in Register' );
				state.user = null;
				state.status = 'failed'
			} )
			.addCase( register.fulfilled, ( state, action ) =>
			{
				console.log( 'Register Successfully' );
				state.status = 'idle';
			} )
			.addCase( signIn.pending, ( state, action ) =>
			{
				console.log( 'Sign in Loading' );
				state.status = 'loading';
			} )
			.addCase( signIn.rejected, ( state, action ) =>
			{
				console.log( 'Failed to Sign in' );
				state.status = 'failed'
			} )
			.addCase( signIn.fulfilled, ( state, action ) =>
			{
				state.status = 'idle';
				console.log( state.status )
			} );
	}
} );
export const selectStatus = ( state ) => state.user.status;
export const selectUser = ( state ) => state.user.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;