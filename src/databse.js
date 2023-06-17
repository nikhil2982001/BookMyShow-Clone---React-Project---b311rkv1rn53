import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./Firebase";
const db = getFirestore(app);

function addToUsesFavorites(movie, user) {
    const docRef = doc(db, "favorites", movie.id);
    setDoc(docRef, movie);
}

// await setDoc(doc(db, "cities", "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   });

// await setDoc(doc(db, "cities", "new-city-id"), data);
