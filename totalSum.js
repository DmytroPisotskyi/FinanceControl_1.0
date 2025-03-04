
import { categoryHous, categoryTransport, categoryFood, 
    categoryByTime, categoryTrip, categoryCinema, 
    categoryFasgion, categoryCompGames, 
    categoryHealth, categoryHonny } from "./elementCategoree.js";


import { categoryAddMoneySalary, 
      categoryAddMoneyOther } from "./elementCategoreeAddMoney.js";

import { getSum } from "./getDataLocalStorage.js";


export const arrSpend = [categoryHous, categoryTransport, categoryFood, 
                    categoryByTime, categoryTrip, categoryCinema, 
                    categoryFasgion, categoryCompGames, 
                    categoryHealth, categoryHonny]

export const arrAddMoney = [categoryAddMoneySalary, 
                    categoryAddMoneyOther]


export function getTotalSumSpend(arr) {
    return arr.reduce((total, item) => {
        return total + getSum(item)
    }, 0)
}


export function getTotalSumAddMoney(arr) {
    return arr.reduce((total, item) => {
        return total + getSum(item)
    }, 0)
}












