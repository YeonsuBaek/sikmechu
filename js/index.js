const optionButtonList = document.querySelectorAll(".option-button");

optionButtonList.forEach((optionButton) => {
  optionButton.addEventListener("click", function () {
    optionButton.classList.toggle("bg-blue");
    optionButton.classList.toggle("text-white");
  });
});
