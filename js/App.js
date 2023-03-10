import foods from '../assets/data/foods.js';

export default class App {
  #selectedOptions;

  constructor() {
    this.#selectedOptions = [];
  }

  recommand(selectedList) {
    const eatType = this.hasOption(selectedList.eat, foods);
    const foodType = this.hasOption(selectedList.food, eatType);
    const carbsType = this.hasOption(selectedList.carbs, foodType);
    const spicyType = this.hasOption(selectedList.spicy, carbsType);
    const meatType = this.hasOption(selectedList.meat, spicyType);
    this.#selectedOptions = meatType;
    return this.#selectedOptions;
  }

  hasOption(options, list) {
    const selectedList = list.filter((food) => {
      const selectedMenu = options.filter((option) =>
        food.options.includes(option)
      );
      if (selectedMenu.length !== 0) {
        return selectedMenu;
      }
    });
    if (selectedList.length === 0) {
      return list;
    }
    return selectedList;
  }
}
