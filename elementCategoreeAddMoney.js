import ItemDataAddMoney from "./classAddMoney.js";

const urlCategoryAddMoney = {
    salary: './img/newImg/wages.png',
    other: './img/newImg/money.png',

}


export const categoryAddMoneySalary = new ItemDataAddMoney('Зарплата', urlCategoryAddMoney.salary);
export const categoryAddMoneyOther = new ItemDataAddMoney('Інше', urlCategoryAddMoney.other);
