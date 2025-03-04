
const tabsNavBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item');


tabsNavBtn.forEach(item => {
    item.addEventListener('click', ()=> {
        let allBtn = item
        let tabId = allBtn.getAttribute('data-tab');
        let allItem = document.querySelector(tabId)
    if(!allBtn.classList.contains('active-tab')) {
        tabsNavBtn.forEach(item => {
            item.classList.remove('active-tab')
        })
        tabsItem.forEach(item => {
            item.classList.remove('active')
        })
        
        allBtn.classList.add('active-tab')
        allItem.classList.add('active')

        
    }
        
    })
})