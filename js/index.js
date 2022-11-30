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

function clickEvent() {
  if ("ontouchstart" in document.documentElement) return "touchstart";
  return "click";
}

optionButtonList.forEach((optionButton) => {
  optionButton.addEventListener(clickEvent(), function () {
    optionButton.classList.toggle("bg-blue");
    optionButton.classList.toggle("text-white");
  });
});

function selectOptions(typeList, selectedList) {
  typeList.forEach((typeButton) => {
    typeButton.addEventListener(clickEvent(), function () {
      const type = typeButton.innerText;
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
  printRecommandations(recommandations);
  recommandation.classList.remove("hidden");
});

function printRecommandations(list) {
  const recommandationList = document.querySelector(".recommandation-list");
  for (let i = 0; i < list.length; i++) {
    recommandationList.innerHTML += `<li class="flex flex-col items-center w-half">
      <div class="aspect-4/3 overflow-hidden rounded">
        <img class="w-full h-full object-cover" src="./assets/img/img-food-${list[i].name}.jpg" alt="${list[i].name}" />
      </div>
      <strong class="font-normal">${list[i].name}</strong>
    </li>`;
  }
}
