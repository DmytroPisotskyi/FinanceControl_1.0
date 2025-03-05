

function addSpendLocalStorage () {

    const input = document.querySelector('.input-control');
    const inputBtn = document.querySelector('.btn-submit');
    const infoResault = document.querySelector('.info-resault');
    const img = document.createElement('img')
    const date = new Date().toLocaleString()

   
    inputBtn.addEventListener('click', ()=> {
        const inputValue = parseFloat(input.value)

        if (isNaN(inputValue)) {
            alert('Некоректно введені дані')
        } else {
            img.src = './img/newImg/correct.png'
            infoResault.appendChild(img)
        }

        input.value = '';
        
        const dateAndSum = JSON.parse(localStorage.getItem('dateAndSum'))

        if (dateAndSum.length > 0) {
            const lastItem = dateAndSum[dateAndSum.length - 1];
            lastItem.date = date;
            lastItem.sum = inputValue
        } else {
            const newItem = {
                date: date,
                sum: inputValue,
            }
            dateAndSum.push(newItem)
        }

        localStorage.setItem('dateAndSum', JSON.stringify(dateAndSum))
        setTimeout(() => {
            infoResault.removeChild(img)
        }, 700)
    })
   //console.log(dateAndSum);
}

addSpendLocalStorage()




