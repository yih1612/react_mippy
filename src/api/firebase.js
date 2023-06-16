import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// firebase관련된 전반적인 설정이 저장
const app = initializeApp(firebaseConfig);
// getAuth() 하면 firebase에서 설정된 값이 포함된 auth를 리턴해준다
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

// TODO: login
export function login() {
  signInWithPopup(auth, provider)
    // 콜백함수에서 전달하는 인자와 바로 호출하는 인자가 같으면 생략이 가능
    // error => console.error(error)
    .catch(console.error);
}

// TODO: logout
export function logout() {
  signOut(auth).catch(console.error);
}

// TODO: user state change
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

// TODO: check admin
async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}
