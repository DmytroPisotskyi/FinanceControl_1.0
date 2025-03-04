
import { categoryHous, categoryTransport, categoryFood, 
    categoryByTime, categoryTrip, categoryCinema, 
    categoryFasgion, categoryCompGames, 
    categoryHealth, categoryHonny } from "./elementCategoree.js";


import { categoryAddMoneySalary, 
      categoryAddMoneyOther } from "./elementCategoreeAddMoney.js";

import { getSum } from "./getDataLocalStorage.js";

import { arrSpend, arrAddMoney, getTotalSumSpend, getTotalSumAddMoney } from "./totalSum.js";



const ctx = document.getElementById('myChart-1')
const ctx2 = document.getElementById('myChart-2')
const ctx3 = document.getElementById('myChart-3')    
  

new Chart(ctx, {
            type: 'pie',
            data: {
              labels: [categoryHous.title, categoryTransport.title, 
                categoryFood.title, categoryByTime.title, categoryTrip.title, categoryCinema.title,
            categoryFasgion.title, categoryCompGames.title, categoryHealth.title, categoryHonny.title,],
              datasets: [{
                label: 'грн',
                data: [getSum(categoryHous), getSum(categoryTransport), getSum(categoryFood),
                    getSum(categoryByTime), getSum(categoryTrip), getSum(categoryCinema), getSum(categoryFasgion),
                getSum(categoryCompGames), getSum(categoryHealth), getSum(categoryHonny), ],
                backgroundColor: ['#0505b2', '#1a9bd1', '#800058', '#28a915',
                  '#92a915', '#a97015', '#bf2e14', '#144350', '#1468bf', '#12a26c'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });



      
          new Chart(ctx2, {
            type: 'pie',
            data: {
              labels: [categoryAddMoneySalary.title, categoryAddMoneyOther.title,],
              datasets: [{
                label: 'грн',
                data: [getSum(categoryAddMoneySalary), getSum(categoryAddMoneyOther),],
                backgroundColor: ['#0505b2', '#1a9bd1',],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });



      
          new Chart(ctx3, {
            type: 'pie',
            data: {
              labels: ['Витрати', 'Надходження',],
              datasets: [{
                label: 'грн',
                data: [getTotalSumSpend(arrSpend), getTotalSumAddMoney(arrAddMoney),],
                backgroundColor: ['#0505b2', '#1a9bd1',],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });