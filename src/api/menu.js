import { arrayUnion, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { hideLoading, showLoading } from '../components/modal/loading'
import { goto } from '../lib/router'
import { showToast } from '../components/block/toast'

/**
 * 데이터베이스에서 메뉴를 불러온다.
 *
 * @returns {Object.<string, (string | string[])>[]?} newMenu
 */
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

/**
 * 새로운 메뉴를 데이터베이스에 저장한다.
 *
 * @param {Object.<string, (string | string[])>} newMenu
 */
async function saveMenu(newMenu) {
  try {
    const collectionRef = collection(db, 'sikmechu')
    const docRef = doc(collectionRef, 'menu')
    await updateDoc(docRef, {
      menu: arrayUnion(newMenu),
    })
    showToast('메뉴를 추가하였습니다.', 'success')
    goto('/')
  } catch (error) {
    console.error(error)
    showToast('메뉴를 추가하는 데 실패하였습니다.', 'fail')
  }
}

export { getMenu, saveMenu }
