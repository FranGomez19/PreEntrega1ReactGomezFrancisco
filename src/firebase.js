// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvTWp3SzI3F9tP0gGzkFQXyshIP6myons",
  authDomain: "ecommerce-react-productos.firebaseapp.com",
  projectId: "ecommerce-react-productos",
  storageBucket: "ecommerce-react-productos.appspot.com",
  messagingSenderId: "521779365956",
  appId: "1:521779365956:web:f236841ef580717b025411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getFirestore(app)

export async function getSingleProduct(id) {
    const documentRef = doc(db, "products", id)

    try{
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        }else{
            console.log("el documento no existe")
        }
    }catch(error){
        console.error("Error al obtener el documento: ", error);   
    }
}

export async function getProducts(id) {
    try{
        const querySnapshot = await getDocs(collection(db, "products"))
        if (querySnapshot.size !== 0){
            const productsList = querySnapshot.docs.map(docu => {
                return{
                    id: docu.id,
                    ...docu.data()
                }
            })
            return productsList;
        }else{
            console.log("No hay productos en la coleccion.");
            
        }
        
    }catch(error){
        console.error("Error al obtener el documento: ", error);   
    }
}

export async function sendOrder(order) {
    const orderCollection= collection(db, "orders");

    try{
        const docRef = await addDoc(orderCollection, order);
        console.log("Nueva orden generada: "+docRef.id);
        return docRef.id
    }catch(error){
        console.error("Error al obtener el documento: ", error);   
    }
}