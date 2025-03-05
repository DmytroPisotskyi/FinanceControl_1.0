

const buttonDeleteLastData = document.querySelector('.delete-last');
const buttonDeleteAllData = document.querySelector('.delete-all');
const infoResault = document.querySelector('.info-resault-menu');
const img = document.createElement('img')

buttonDeleteLastData.addEventListener('click', ()=> {

    const dateAndSum = JSON.parse(localStorage.getItem('dateAndSum'))
    dateAndSum.pop()
    localStorage.setItem('dateAndSum', JSON.stringify(dateAndSum))
    img.src = './img/newImg/correct.png'
    infoResault.appendChild(img)
    
    console.log(dateAndSum);

    /*setTimeout(()=> {
        infoResault.classList.add('info-resault-menu__close')
    }, 3800)*/

    setTimeout(() => {
        infoResault.removeChild(img)
        //infoResault.classList.remove('info-resault-menu__close')
    }, 700)
    
})


buttonDeleteAllData.addEventListener('click', ()=> {
    localStorage.clear()
    img.src = './img/newImg/correct.png'
    infoResault.appendChild(img)

    setTimeout(() => {
        infoResault.removeChild(img)
        //infoResault.classList.remove('info-resault-menu__close')
    }, 700)
    
})