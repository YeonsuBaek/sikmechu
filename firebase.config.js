import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDb4j2DL8AeL56VGdPZdmR2Qq_Y3CIcx3A',
  authDomain: 'sikmechu.firebaseapp.com',
  projectId: 'sikmechu',
  storageBucket: 'sikmechu.appspot.com',
  messagingSenderId: '525254543685',
  appId: '1:525254543685:web:53debbd88a0ab03c37162c',
  measurementId: 'G-046WX0GT3W',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()
export { app, db }
