


export let allDateAndSum = [];


const sevedSum = localStorage.getItem('dateAndSum')
if (sevedSum) {
    allDateAndSum = JSON.parse(sevedSum)
} else {
    localStorage.setItem('dateAndSum', JSON.stringify(allDateAndSum))
}


