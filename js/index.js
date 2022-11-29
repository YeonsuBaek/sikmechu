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

optionButtonList.forEach((optionButton) => {
  optionButton.addEventListener("click", function () {
    optionButton.classList.toggle("bg-blue");
    optionButton.classList.toggle("text-white");
  });
});

function selectOptions(typeList, selectedList) {
  typeList.forEach((typeButton) => {
    typeButton.addEventListener("click", function () {
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
  recommandation.classList.remove("hidden");
});
