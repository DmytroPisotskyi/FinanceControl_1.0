import ItemData from "./class.js"

const urlCategory = {
    house: "./img/newImg/house.png",
    transport: "./img/newImg/public-transport.png",
    food: "./img/newImg/diet.png",
    byTime: "./img/newImg/dance.png",
    cinema: './img/newImg/cinema.png',
    trip: "./img/newImg/flight.png",
    fashion: './img/newImg/laundry.png',
    compGames: './img/newImg/game-console.png',
    health: './img/newImg/healthcare.png',
    hobby: './img/newImg/hobby.png',
};



export const categoryHous = new ItemData('Дім', urlCategory.house)
export const categoryTransport = new ItemData('Транспорт', urlCategory.transport)
export const categoryFood = new ItemData('Продукти', urlCategory.food)
export const categoryByTime = new ItemData('Дозвілля', urlCategory.byTime)
export const categoryTrip = new ItemData('Подорожі', urlCategory.trip)
export const categoryCinema = new ItemData('Кінотеатр',urlCategory.cinema)
export const categoryFasgion = new ItemData('Одяг', urlCategory.fashion)
export const categoryCompGames = new ItemData(`Ігри`, urlCategory.compGames)
export const categoryHealth = new ItemData('Аптека/Лікарня', urlCategory.health)
export const categoryHonny = new ItemData('Хобі', urlCategory.hobby)

