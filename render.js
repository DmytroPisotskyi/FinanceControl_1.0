
import { categoryHous, categoryTransport, categoryFood, 
    categoryByTime, categoryTrip, categoryCinema, 
    categoryFasgion, categoryCompGames, 
    categoryHealth, categoryHonny } from "./elementCategoree.js";


import { getSum } from "./getDataLocalStorage.js";


function renderElement(item) {
    const categoryGroup = document.querySelector('.category-group')
    const categoryGroupItem = document.createElement('div');
    categoryGroupItem.setAttribute('data-name', item.title);
    categoryGroupItem.id = 'cardItem';
    categoryGroupItem.classList.add('category-group__item')
    const titleItem = document.createElement('div');
    titleItem.classList.add('title-item');
    titleItem.innerText = item.title;
    const imgItem = document.createElement('div');
    imgItem.classList.add('img-item');
    const img = document.createElement('img');
    img.src = item.img;
    const spendInfo = document.createElement('h4');
    spendInfo.innerText = `${getSum(item)}, грн`
    imgItem.appendChild(img);
    categoryGroupItem.append(titleItem, imgItem, spendInfo);
    categoryGroup.appendChild(categoryGroupItem);

}


renderElement(categoryHous)
renderElement(categoryTransport)
renderElement(categoryFood)
renderElement(categoryHealth)
renderElement(categoryByTime)
renderElement(categoryHonny)
renderElement(categoryCompGames)
renderElement(categoryCinema)
renderElement(categoryFasgion)
renderElement(categoryTrip)



