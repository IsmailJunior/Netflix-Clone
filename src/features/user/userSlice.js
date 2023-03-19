import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const initialState = {
	user: null
};

export const register = createAsyncThunk( 'user/register', async ( { email, password } ) =>
{
	await createUserWithEmailAndPassword( auth, email, password );
} );

export const signIn = createAsyncThunk( 'user/signIn', async ( { email, password } ) =>
{
	await signInWithEmailAndPassword( auth, email, password );
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
		}
	},
	extraReducers ( builder )
	{
		builder
			.addCase( register.rejected, ( state, action ) =>
			{
				console.log( 'Erro in register' );
			} )
			.addCase( register.fulfilled, ( state, action ) =>
			{
				console.log( 'Register Successfully' );
			} )
			.addCase( signIn.fulfilled, ( state, action ) =>
			{
				console.log( 'Sign in Successfully' );
			} );
	}
} );

export const selectUser = ( state ) => state.user.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;