import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

async function getOptions() {
  try {
    const collectionRef = collection(db, 'sikmechu')
    const docRef = doc(collectionRef, 'options')
    const response = await getDoc(docRef)
    const options = response.data()['options']
    return options
  } catch (error) {
    return null
  }
}

export { getOptions }
