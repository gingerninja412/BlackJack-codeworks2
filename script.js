let userHand = []
let computerHand = []
const deckOfCards = [
    {
        name: "ace of spades",
        value: "ace",
        picked: false,
        image: `images\Ace_of_Spades.png`
    },
    {
        name: "two of spades",
        value: 2,
        picked: false,
        image: `images\Two_of_Spades.png`
    },
    {
        name: "three of spades",
        value: 3,
        picked: false,
        image: `images\Three_of_Spades.png`
    },
    {
        name: "four of spades",
        value: 4,
        picked: false,
        image: `images\Four_of_spades.png`
    },
    {
        name: "five of spades",
        value: 5,
        picked: false,
        image: `images\Five_of_Spades.png`
    },
    {
        name: "six of spades",
        value: 6,
        picked: false,
        image: `images\Six_of_Spades.png`
    },
    {
        name: "seven of spades",
        value: 7,
        picked: false,
        image: `images\Seven_of_Spades.png`
    },
    {
        name: "eight of spades",
        value: 8,
        picked: false,
        image: `images\Eight_of_Spades.png`
    },
    {
        name: "nine of spades",
        value: 9,
        picked: false,
        image: `images\Nine_of_Spades.png`
    },
    {
        name: "ten of spades",
        value: 10,
        picked: false,
        image: `images\Ten_of_Spades.png`
    },
    {
        name: "jack of spades",
        value: 10,
        picked: false,
        image: `images\Jack_of_Spades.png`
    },
    {
        name: "queen of spades",
        value: 10,
        picked: false
    },
    {
        name: "king of spades",
        value: 10,
        picked: false
    },
    {
        name: "ace of clubs",
        value: "ace",
        picked: false
    },
    {
        name: "two of clubs",
        value: 2,
        picked: false
    },
    {
        name: "three of clubs",
        value: 3,
        picked: false
    },
    {
        name: "four of clubs",
        value: 4,
        picked: false
    },
    {
        name: "five of clubs",
        value: 5,
        picked: false
    },
    {
        name: "six of clubs",
        value: 6,
        picked: false
    },
    {
        name: "seven of clubs",
        value: 7,
        picked: false
    },
    {
        name: "eight of clubs",
        value: 8,
        picked: false
    },
    {
        name: "nine of clubs",
        value: 9,
        picked: false
    },
    {
        name: "ten of clubs",
        value: 10,
        picked: false
    },
    {
        name: "jack of clubs",
        value: 10,
        picked: false
    },
    {
        name: "queen of clubs",
        value: 10,
        picked: false
    },
    {
        name: "king of clubs",
        value: 10,
        picked: false
    },
    {
        name: "ace of hearts",
        value: "ace",
        picked: false
    },
    {
        name: "two of hearts",
        value: 2,
        picked: false
    },
    {
        name: "three of hearts",
        value: 3,
        picked: false
    },
    {
        name: "four of hearts",
        value: 4,
        picked: false
    },
    {
        name: "five of hearts",
        value: 5,
        picked: false
    },
    {
        name: "six of hearts",
        value: 6,
        picked: false
    },
    {
        name: "seven of hearts",
        value: 7,
        picked: false
    },
    {
        name: "eight of hearts",
        value: 8,
        picked: false
    },
    {
        name: "nine of hearts",
        value: 9,
        picked: false
    },
    {
        name: "ten of hearts",
        value: 10,
        picked: false
    },
    {
        name: "jack of hearts",
        value: 10,
        picked: false
    },
    {
        name: "queen of hearts",
        value: 10,
        picked: false
    },
    {
        name: "king of hearts",
        value: 10,
        picked: false
    },
    {
        name: "ace of diamonds",
        value: "ace",
        picked: false
    },
    {
        name: "two of diamonds",
        value: 2,
        picked: false
    },
    {
        name: "three of diamonds",
        value: 3,
        picked: false
    },
    {
        name: "four of diamonds",
        value: 4,
        picked: false
    },
    {
        name: "five of diamonds",
        value: 5,
        picked: false
    },
    {
        name: "six of diamonds",
        value: 6,
        picked: false
    },
    {
        name: "seven of diamonds",
        value: 7,
        picked: false
    },
    {
        name: "eight of diamonds",
        value: 8,
        picked: false
    },
    {
        name: "nine of diamonds",
        value: 9,
        picked: false
    },
    {
        name: "ten of diamonds",
        value: 10,
        picked: false
    },
    {
        name: "jack of diamonds",
        value: 10,
        picked: false
    },
    {
        name: "queen of diamonds",
        value: 10,
        picked: false
    },
    {
        name: "king of diamonds",
        value: 10,
        picked: false
    },
]

//screen elements
const instructions = $(".instructions");
const actions = $(".action");
const computerArea = $("#computerHand");
const playerHand = $("#playerHand");

function selectRandomCard(){
    let index = Math.floor((Math.random() * 52))
    return deckOfCards[index].name
}

function dealCard (player){
    let index = Math.floor((Math.random() * 52))
    while (deckOfCards[index].picked == true){
        index = Math.floor((Math.random() * 52))
        console.log("looping")
    }
    player.push(deckOfCards[index])
    deckOfCards[index].picked = true
}

function startGame(){
    instructions.removeClass("instructionsDown")
    instructions.addClass("instructionsUp")
    actions.css("display", "flex")
    for(let i = 0; i < 2; i++){
        dealCard(userHand)
        dealCard(computerHand)
    }
    console.log(userHand)
    console.log(computerHand)
}

function help(){
    instructions.removeClass("instructionsUp")
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
}

window.onload = () => {
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
}