import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseKey from './firebaseKey'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const app = initializeApp(firebaseKey);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); 

export { auth, db, storage };
export default app;