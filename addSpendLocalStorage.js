

function addSpendLocalStorage () {

    const input = document.querySelector('.input-control');
    const inputBtn = document.querySelector('.btn-submit');
    const date = new Date().toLocaleString()

   
    inputBtn.addEventListener('click', ()=> {
        const inputValue = parseFloat(input.value)

        if (isNaN(inputValue)) {
            alert('Некоректно введені дані')
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
    })
   //console.log(dateAndSum);
}

addSpendLocalStorage()




