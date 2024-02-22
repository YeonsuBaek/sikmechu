import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

async function getMenu() {
  try {
    const collectionRef = collection(db, 'sikmechu')
    const docRef = doc(collectionRef, 'menu')
    const response = await getDoc(docRef)
    const menu = response.data()['menu']
    return menu
  } catch (error) {
    return null
  }
}

export { getMenu }
