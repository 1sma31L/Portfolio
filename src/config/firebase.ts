// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
	apiKey: "AIzaSyBbj8zyg5P35l5wt7buBizzmPvXuk19LM4",
	authDomain: "portfolio-22612.firebaseapp.com",
	projectId: "portfolio-22612",
	storageBucket: "portfolio-22612.appspot.com",
	messagingSenderId: "323222994948",
	appId: "1:323222994948:web:8884ec2de6bfcd73107551",
	measurementId: "G-QDY98356FF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
