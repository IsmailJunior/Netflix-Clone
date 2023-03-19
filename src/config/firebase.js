import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: "AIzaSyBa4rN3ujPp25Rqr7aXOhzacGPgB6CeEhM",
	authDomain: "netflix-c75e3.firebaseapp.com",
	projectId: "netflix-c75e3",
	storageBucket: "netflix-c75e3.appspot.com",
	messagingSenderId: "57079108051",
	appId: "1:57079108051:web:6606e13c7ebd5f38f3df26"
};

const app = initializeApp( firebaseConfig );
export const bank = getFirestore( app );
export const auth = getAuth( app );