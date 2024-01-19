import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import perfumeProducts from "../data/perfumeProducts";

const initializeFirebase = async () => {
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
        appId: import.meta.env.VITE_FIREBASE_APPID
    };

    console.log('se conecto');

    // Inicialización de Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Iterar y agregar productos a Firestore
    perfumeProducts.forEach(async (producto) => {
        try {
            const docRef = await addDoc(collection(db, 'productos'), producto);
            console.log(`se agregó el documento con id: ${docRef.id}`);
        } catch (error) {
            console.error(error);
        }
    });
};

initializeFirebase();
