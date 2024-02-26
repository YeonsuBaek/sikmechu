import { goto } from '../lib/router'
import { renderOptions, toggleOptionButton } from '../components/elements/option'
import { getOptions } from '../api/options'
import { arrayUnion, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

async function renderAddMenu() {
  document.querySelector('#app').innerHTML = `
    <main id="add-container" class="w-[calc(100% - 32px)] mx-4 mb-8 md:max-w-2xl md:mx-auto md:my-0">
      <h1 class="mt-4 mb-2">메뉴 이름</h1>
      <input id="menu-name" class="w-full outline-0 overflow-hidden" type='text' placeholder="예: 불고기, 새우볶음밥, 마라탕" />
      <h1 class="mt-4 mb-2">옵션 설정하기</h1>
      <section id="add-options"></section>
      <button id="save-button" class="mt-7 mb-2 primary-button" type="button">메뉴 추가하기</button>
      <button id="home-button" class="w-full py-3 secondary-button" type="button">홈으로 돌아가기</button>
    </main>
    `

  const optionsElement = document.querySelector('#add-options')
  const homeButton = document.querySelector('#home-button')
  const saveButton = document.querySelector('#save-button')

  const options = await getOptions()
  renderOptions(optionsElement, options)

  const selectionButtons = document.querySelectorAll('.selection-button')
  let selectedOptions = options.reduce((acc, option) => {
    acc[option.id] = []
    return acc
  }, {})

  toggleOptionButton(selectionButtons, selectedOptions)

  homeButton.addEventListener('click', () => {
    goto('/')
  })

  saveButton.addEventListener('click', () => {
    const menuName = document.querySelector('#menu-name').value

    if (menuName.trim() === '') {
      alert('메뉴 이름을 입력해주세요!')
    } else {
      const newMenu = {
        id: Math.round(Math.random() * 1000000),
        name: menuName,
        ...selectedOptions,
      }
      saveMenu(newMenu)
    }
  })
}

async function saveMenu(newMenu) {
  try {
    const collectionRef = collection(db, 'sikmechu')
    const docRef = doc(collectionRef, 'menu')
    await updateDoc(docRef, {
      menu: arrayUnion(newMenu),
    })
    goto('/')
  } catch (error) {
    setError(error)
    alert('메뉴를 추가하는 데 실패하였습니다.')
  }
}

export { renderAddMenu }
