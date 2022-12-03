import App from "./App.js";
const optionButtonList = document.querySelectorAll(".option-button");
let selectedList = {
  eat: [],
  food: [],
  carbs: [],
  spicy: [],
  meat: [],
};
const eatTypeList = document.querySelectorAll(".eat-type");
const foodTypeList = document.querySelectorAll(".food-type");
const carbsTypeList = document.querySelectorAll(".carbs-type");
const spicyTypeList = document.querySelectorAll(".spicy-type");
const meatTypeList = document.querySelectorAll(".meat-type");
const sendButton = document.querySelector(".send-button");
const recommandation = document.querySelector(".recommandation");
const headerLogo = document.querySelector(".header-logo");

optionButtonList.forEach((optionButton) => {
  optionButton.addEventListener("pointerup", function () {
    optionButton.classList.toggle("bg-blue");
    optionButton.classList.toggle("text-white");
  });
});

function selectOptions(typeList, selectedList) {
  typeList.forEach((typeButton) => {
    typeButton.addEventListener("pointerup", function () {
      const type = typeButton.firstElementChild.innerText;
      if (selectedList.includes(type)) {
        selectedList.splice(selectedList.indexOf(type), 1);
      } else {
        selectedList.push(type);
      }
    });
  });
}

selectOptions(eatTypeList, selectedList.eat);
selectOptions(foodTypeList, selectedList.food);
selectOptions(carbsTypeList, selectedList.carbs);
selectOptions(spicyTypeList, selectedList.spicy);
selectOptions(meatTypeList, selectedList.meat);

sendButton.addEventListener("click", function () {
  const recommandations = new App().recommand(selectedList);
  recommandation.classList.add("hidden");
  printLoadingSection();
  setTimeout(() => {
    printRecommandations(recommandations);
    recommandation.classList.remove("hidden");
  }, "1000");
});

function printLoadingSection() {
  const loadingSection = document.querySelector(".loading");
  loadingSection.classList.remove("hidden");
  setTimeout(() => {
    loadingSection.classList.add("hidden");
  }, "1000");
}

function printRecommandations(list) {
  const recommandationList = document.querySelector(".recommandation-list");
  recommandationList.replaceChildren();
  for (let i = 0; i < list.length; i++) {
    const content = `<li class="flex flex-col items-center py-2 w-half bg-gray">
      <strong class="font-normal">${list[i].name}</strong>
    </li>`;
    recommandationList.insertAdjacentHTML("beforeend", content);
  }

  if (list.length === 0) {
    const alert = `<strong class="font-normal">해당 옵션에 대한 메뉴는 존재하지 않아요!<br />다른 옵션을 선택해주세요...</strong>`;
    recommandationList.insertAdjacentHTML("beforeend", alert);
  }

  const survey = `<a class="block mt-4 text-center text-blue underline active:text-darkBlue" href="https://docs.google.com/forms/d/e/1FAIpQLSdOOKkABrSWTLfGuZ3-YlQYVwqTaFgxDEfR4vIBoXkwgQHBKA/viewform">사용 후기를 남겨주세요!</a>`;
  recommandation.insertAdjacentHTML("beforeend", survey);
}

headerLogo.addEventListener("pointerup", function () {
  location.reload();
});
