import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { hideLoading, showLoading } from '../components/modal/loading'

async function getMenu() {
  try {
    showLoading()
    const collectionRef = collection(db, 'sikmechu')
    const docRef = doc(collectionRef, 'menu')
    const response = await getDoc(docRef)
    const menu = response.data()['menu']
    return menu
  } catch (error) {
    return null
  } finally {
    hideLoading()
  }
}

export { getMenu }
