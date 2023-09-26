const foodList = [];

renderFoodList();

function renderFoodList(){
    let foodListHTML = '';

    for(let i = 0; i < foodList.length; i++){
        const food = foodList[i];
        const html = `
            <div>${food}</div>
            <button
                onclick= "
                    foodList.splice(${i}, 1);
                    renderFoodList();"
                    class = "delete-button"
                >Delete</button>`;
        foodListHTML += html;
    }
    document.querySelector('.food-list').innerHTML = foodListHTML;
}

function addFood(){
    const inputElement = document.querySelector('.food-input');
    const food = inputElement.value;
    if(food === ''){
        return;
    }
    foodList.push(food);
    inputElement.value ='';
    renderFoodList();
}

function randomizeFood(){
    if(foodList.length === 0){
        document.querySelector('.food-result').innerHTML = '';
        return;
    }
    let randomNumber = Math.floor(Math.random() * foodList.length);
    let result = foodList[randomNumber];
    document.querySelector('.food-result').innerHTML = `The result is: ${result}`;
}



let getQuote = () => {
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    const url = "https://api.quotable.io/random";

    fetch(url)
        .then(data => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        });
};



let getRestaurant = () => {

    const userInputElement = document.querySelector('.zip-code-input');
    const userZipCode = userInputElement.value;
    console.log(userZipCode);
    const restaurantUrl = `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${userZipCode}/0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '95d03f0e01msh0c3cf2866530f4cp1b0696jsn4e9ed3d00504',
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };

    fetch(restaurantUrl, options)
        .then(resp => resp.json())
        .then((item) => {
            let restaurantListHTML = '';
            for(let i = 0; i < 10; i++){
                const restaurantOption = item.restaurants[i].restaurantName;
                const html = `<div>${restaurantOption}</div>`;
                restaurantListHTML += html;
            }
            document.querySelector('.restaurant-list').innerHTML = restaurantListHTML;
        });
    
};
