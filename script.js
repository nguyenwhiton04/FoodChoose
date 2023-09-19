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

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
        .then(data => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        });
};
btn.addEventListener("click", getQuote);
