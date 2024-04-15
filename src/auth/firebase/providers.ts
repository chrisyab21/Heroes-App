

import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FireBaseAuth, FireBaseDB, storage } from "./config";
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { HeroeFormData } from "../../heroes/components/heroeForm/HeroeForm";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Heroe } from "../../context/contexts/HeroeContext";



const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FireBaseAuth, googleProvider)

        const credentials = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;

        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode)

        return {

            ok: false,
            errorMessage,

        }
    }

}


type LoginData = {

    email: string,
    password: string

}

export type CreateData = {

    nombre: string,
    email: string,
    password: string,
    gender: string

}



export const registerUserWithEmailPassword = async (datos: CreateData) => {

    try {

        const response = await createUserWithEmailAndPassword(FireBaseAuth, datos.email, datos.password);

        await updateProfile(response.user, {

            displayName: datos.nombre

        });

        const { uid, photoURL, displayName, email } = response.user;

        const collRef = collection(FireBaseDB, 'usuarios');

        const docRef = doc(collRef, uid);

        await setDoc(docRef, { nombre: displayName, email: email });

        //const docRef2 = await addDoc(collRef, { username: uid, email: email });


        console.log(response.user.displayName);

        return {
            ok: true,
            displayName: displayName,
            email,
            uid: uid,
            photoURL: photoURL
        }


    } catch (error: any) {

        return {
            ok: false,
            errorMessage: error.message,
        }

    }


}



export const loginWithEmailPassword = async (datos: LoginData) => {


    try {

        const response = await signInWithEmailAndPassword(FireBaseAuth, datos.email, datos.password);


        const { uid, photoURL, displayName, email } = response.user;

        console.log(response.user.displayName);

        return {
            ok: true,
            displayName: displayName,
            email,
            uid: uid,
            photoURL: photoURL
        }



    } catch (error: any) {

        return {
            ok: false,
            errorMessage: error.message,
        }
    }


}



export const logoutFireBase = async () => {


    return await FireBaseAuth.signOut();

}




export const getHeroes = async (uid: string) => {


    try {

        const collRef = collection(FireBaseDB, 'usuarios', uid, 'heroes');

        const querySnapshot = await getDocs(collRef);

        const heroes = querySnapshot.docs.map((doc) => {


            const hero = { ...doc.data() };

            return hero;
            
        });

        return {

            ok: true,
            heroes: heroes
        }

    } catch (error: any) {


        return {

            ok: false,
            error: error.message
        }

    }

}



//TODO: Add heroe a fireBase
export const addHeroe = async (uid: string, heroeData: HeroeFormData) => {


    try {

        const storageRef = ref(storage, `usuarios/${uid}/héroes/${heroeData.image?.name}`);

        const snapshot = await uploadBytes(storageRef, heroeData.image!);

        const url = await getDownloadURL(snapshot.ref);

        console.log('La url de descarga es: ', url);

        const collRef = collection(FireBaseDB, 'usuarios', uid, 'heroes');

        const docRef = doc(collRef, heroeData.name);

        const { image, ...datos } = heroeData;

        const heroe: Heroe = { ...datos, imageUrl: url };


        await setDoc(docRef, { ...heroe });



        return {

            ok: true,

        }




    } catch (error: any) {


        return {

            ok: false,
            error: error.message
        }

    }

}


export const updateHeroe = async (uid: string, heroeData: HeroeFormData) => {


    try {

        const storageRef = ref(storage, `usuarios/${uid}/héroes/${heroeData.image?.name}`);

        const snapshot = await uploadBytes(storageRef, heroeData.image!);

        const url = await getDownloadURL(snapshot.ref);

        console.log('La url de descarga es: ', url);

        const collRef = collection(FireBaseDB, 'usuarios', uid, 'heroes');

        const docRef = doc(collRef, heroeData.name);

        const { image, ...datos } = heroeData;

        const heroe: Heroe = { ...datos, imageUrl: url };


        await setDoc(docRef, { ...heroe });



        return {

            ok: true,

        }




    } catch (error: any) {


        return {

            ok: false,
            error: error.message
        }

    }

}


export const deleteHeroeByName = async (uid: string, name:string) => {


    try {

        const collRef = collection(FireBaseDB, 'usuarios', uid, 'heroes');

        const docRef = doc(collRef, name);
        
        await deleteDoc(docRef);


        return {

            ok: true,
            message: 'Heroe Eliminado',
        }

    } catch (error: any) {


        return {

            ok: false,
            error: error.message
        }

    }

}




export const getHeroesByPublisher = async (uid: string, publisher:string) => {


    try {

        const collRef = collection(FireBaseDB, 'usuarios', uid, 'heroes');

        const q = query(collRef, where("publisher", "==", publisher));
        
        const querySnapshot = await getDocs(q);
   
        const heroes = querySnapshot.docs.map((doc) => {


            const hero = { ...doc.data() };

            return hero;
            
        });

        return {

            ok: true,
            heroes: heroes
        }

    } catch (error: any) {


        return {

            ok: false,
            error: error.message
        }

    }

}




export const searchHeroeByName = async (uid: string, name:string) => {


    try {

        const collRef = collection(FireBaseDB, 'usuarios', uid, 'heroes');

        const q = query(collRef, where("name", "==", name));
        
        const querySnapshot = await getDocs(q);
   
        const heroes = querySnapshot.docs.map((doc) => {


            const hero = { ...doc.data() };

            return hero;
            
        });

        return {

            ok: true,
            heroes: heroes
        }

    } catch (error: any) {


        return {

            ok: false,
            error: error.message
        }

    }

}

