import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get, child, update, remove, onValue, set } from 'firebase/database'
import dotenv from "dotenv";
import { SendEmail } from "./EmailTMD.js";


dotenv.config();

const firebaseConfig = { apiKey: process.env.FIREBASE_KEY, authDomain: "my-urban-limos-cffed.firebaseapp.com", databaseURL: "https://my-urban-limos-cffed-default-rtdb.firebaseio.com", projectId: "my-urban-limos-cffed", storageBucket: "my-urban-limos-cffed.firebasestorage.app", messagingSenderId: "380095853229", appId: "1:380095853229:web:fb105edfac7c39d6884c24", measurementId: "G-1DZRDQEFTJ" }

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app);

async function BookReservations(reservations, res) {
    const idTokken = Math.floor(Math.random() * 999999 );
    if (typeof reservations == "object") {
        await set(ref(db, "reservations" + "/" + reservations.user_name+idTokken), {
            reservations,
        });
        SendEmail(res,reservations);
        return reservations;
    }
}


export { BookReservations }