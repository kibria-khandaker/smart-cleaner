import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBY0TURx4K2eTervoRIucciWjm1coyBELI",
    authDomain: "a-smart-cleaner.firebaseapp.com",
    projectId: "a-smart-cleaner",
    storageBucket: "a-smart-cleaner.appspot.com",
    messagingSenderId: "989718392054",
    appId: "1:989718392054:web:e71e5787d6e7883dd490d7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;