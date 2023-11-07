//Variables...

const dice = document.querySelector('.dice');
const diceRoll = document.querySelector('.roll-btn');


diceRoll.addEventListener('click',function(){
    const min =1;
    const max = 6;
    let randomNum = Math.floor(Math.random() *(max-min+1))+min;
    dice.innerHTML = randomNum;
})