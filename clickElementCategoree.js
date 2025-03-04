
//import { allDateAndSum, allAddMoneyDateAndSum } from "./localStorage.js"

export function clickElementAndCreateObjInLocalStorag() {
    
const categoryItem = document.querySelectorAll('.category-group__item')

categoryItem.forEach(item => {
    item.addEventListener('click', function () {
        window.location.href = '/inputData.html'
        const categoreeName = this.dataset.name

        const newDateAndSum = {
            categoree: categoreeName,
        }
       
        let allDateAndSum = [];//==============
        
        const sevedSum = localStorage.getItem('dateAndSum')
        if (sevedSum) {
            allDateAndSum = JSON.parse(sevedSum)
        }
        allDateAndSum.push(newDateAndSum)
        localStorage.setItem('dateAndSum', JSON.stringify(allDateAndSum))
        
        
    })
})

}

clickElementAndCreateObjInLocalStorag()









