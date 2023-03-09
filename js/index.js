import App from './App.js';

// 모든 옵션 버튼
const optionButtonList = document.querySelectorAll('.option-button');

// 타입별 선택한 옵션
let selectedList = {
  eat: [],
  food: [],
  carbs: [],
  spicy: [],
  meat: [],
};

// 타입별 옵션 버튼
const eatTypeList = document.querySelectorAll('.eat-type');
const foodTypeList = document.querySelectorAll('.food-type');
const carbsTypeList = document.querySelectorAll('.carbs-type');
const spicyTypeList = document.querySelectorAll('.spicy-type');
const meatTypeList = document.querySelectorAll('.meat-type');

// 기타 버튼
const sendButton = document.querySelector('.send-button');
const recommandation = document.querySelector('.recommandation');
const headerLogo = document.querySelector('.header-logo');

// 옵션 버튼 클릭 시 바뀔 스타일
optionButtonList.forEach((optionButton) => {
  optionButton.addEventListener('pointerup', () => {
    optionButton.classList.toggle('bg-blue');
    optionButton.classList.toggle('bg-gray');
    optionButton.classList.toggle('text-white');
  });
});

// 옵션 버튼 클릭 시 해당 리스트 안에 추가
const selectOptions = (typeList, selectedItem) => {
  typeList.forEach((typeButton) => {
    typeButton.addEventListener('pointerup', () => {
      const type = typeButton.firstElementChild.innerText;
      if (!selectedItem.includes(type)) {
        selectedItem.push(type);
      }
    });
  });
};

selectOptions(eatTypeList, selectedList.eat);
selectOptions(foodTypeList, selectedList.food);
selectOptions(carbsTypeList, selectedList.carbs);
selectOptions(spicyTypeList, selectedList.spicy);
selectOptions(meatTypeList, selectedList.meat);

sendButton.addEventListener('click', () => {
  const recommandations = new App().recommand(selectedList);
  recommandation.classList.add('hidden');
  printLoadingSection();
  setTimeout(() => {
    printRecommandations(recommandations);
    recommandation.classList.remove('hidden');
  }, '1000');
});

const printLoadingSection = () => {
  const loadingSection = document.querySelector('.loading');
  loadingSection.classList.remove('hidden');
  setTimeout(() => {
    loadingSection.classList.add('hidden');
  }, '1000');
};

const printRecommandations = (list) => {
  const recommandationList = document.querySelector('.recommandation-list');
  recommandationList.replaceChildren();
  for (const item in list) {
    const content = `<li class="flex flex-col items-center py-2 w-half bg-gray">
      <strong class="font-normal">${list[item].name}</strong>
    </li>`;
    recommandationList.insertAdjacentHTML('beforeend', content);
  }

  if (list.length === 0) {
    const alert = `<strong class="font-normal">해당 옵션에 대한 메뉴는 존재하지 않아요!<br />다른 옵션을 선택해주세요...</strong>`;
    recommandationList.insertAdjacentHTML('beforeend', alert);
  }
};

headerLogo.addEventListener('pointerup', () => {
  location.reload();
});
