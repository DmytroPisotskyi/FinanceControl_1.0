

/*let test = JSON.parse(localStorage.getItem('dateAndSum'))

test = test.filter(item => item.categoree === 'Дім')

const totalSum = test.reduce((accumulator, currentValue)=>{
    const sumValue = currentValue.sum ? Number(currentValue.sum) : 0;
    
      return accumulator + sumValue;
}, 0)
console.log(totalSum);

console.log(test);*/

export function getSum (item) {
    let catogoreeValue = JSON.parse(localStorage.getItem('dateAndSum'))
    catogoreeValue = catogoreeValue.filter(element => element.categoree === item.title);
    const totalSum = catogoreeValue.reduce((accumulator, currentValue)=> {
        const sumValue = currentValue.sum ? Number(currentValue.sum) : 0;
        return accumulator + sumValue
    }, 0)

    return totalSum
}

