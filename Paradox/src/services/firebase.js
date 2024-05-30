import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth';
import { collection, getDocs, doc, getDoc, setDoc, arrayUnion, updateDoc  } from 'firebase/firestore';
import { auth, db, storage } from './firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const SignIn = async (dataUser) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, dataUser.email, dataUser.password);
    
    // Guardar el usuario en la base de datos
    await createUserInDatabase(userCredential.user, dataUser);

    return userCredential.user;
  } catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
};



export const LogIn = async (dataUser) => {
  try {
    console.log('Attempting login with:', dataUser);
    const userCredential = await signInWithEmailAndPassword(auth, dataUser.email, dataUser.password);
    return userCredential.user;
  } catch (error) {
    console.error('Error logging in: ', error);
    throw error;
  }
};


const createUserInDatabase = async (user, dataUser) => {
  try {
    const { confirmPassword, password, image, ...data } = dataUser;

    let imageUrl = '';
    if (image) {
      const imageRef = ref(storage, `images/profiles/${user.uid}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }
    console.log(imageUrl)

    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      uid: user.uid,
      ...data,
      imageUrl
    });

    console.log('User added to database successfully');
  } catch (error) {
    console.error('Error adding user to database: ', error);
    throw error;
  }
};

export const getUserData = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data: ', error);
    throw error;
  }
};


export const getAllUsersData = async () => {
  try {
    const usersCollection = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCollection);
    
    const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return usersList;
  } catch (error) {
    console.error('Error fetching all users data: ', error);
    throw error;
  }
};


export const createProyect = async (data) => {
  const uniqueName = `${Date.now()}-${data.image?.name || 'no-image'}`;
  const { image, participants, ...projectData } = data;
  
  const id = crypto.randomUUID()

  try {
    let imageUrl = '';

    if (image) {
      const imageRef = ref(storage, `images/projects/${uniqueName}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    for (const uid of participants) {

      const userRef = doc(db, 'users', uid);

      await updateDoc(userRef, {
        projects: arrayUnion({
          ...projectData,
          imageUrl,
          id,
        }),
      });
    }

    const userRef2 = doc(db, 'projects', id);

    await setDoc(userRef2, {
      ...projectData,
      imageUrl,
      id,
    });

    console.log('Project added to users successfully');
  } catch (error) {
    console.error('Error adding project to users: ', error);
    throw error;
  }
};


export const getAllProjects = async () => {
  try {
    const projectsCollection = collection(db, 'projects');
    const projectsSnapshot = await getDocs(projectsCollection);

    const projectList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return projectList;

  } catch (error) {
    console.error('Error fetching user data: ', error);
    throw error;
  }

};


export const getProyect = async (id) => {
  try {
    const projectRef = doc(db, 'projects', id);
    const projectSnap = await getDoc(projectRef);

    // Verificar si el documento existe
    if (projectSnap.exists()) {
      return projectSnap.data();
    } else {
      console.log('No such project!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching project data: ', error);
    throw error;
  }
};