//TDO describe functions
let userHand = []
let computerHand = []
const deckOfCards = [
    {
        name: "ace of spades",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_Spades.png`
    },
    {
        name: "two of spades",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_Spades.png`
    },
    {
        name: "three of spades",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_Spades.png`
    },
    {
        name: "four of spades",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_spades.png`
    },
    {
        name: "five of spades",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_Spades.png`
    },
    {
        name: "six of spades",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_Spades.png`
    },
    {
        name: "seven of spades",
        value: 7,
        picked: false,
        image: String.raw`images\Seven_of_Spades.png`
    },
    {
        name: "eight of spades",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_Spades.png`
    },
    {
        name: "nine of spades",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Spades.png`
    },
    {
        name: "ten of spades",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Spades.png`
    },
    {
        name: "jack of spades",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_Spades.png`
    },
    {
        name: "queen of spades",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Spades.png`
    },
    {
        name: "king of spades",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Spades.png`
    },
    {
        name: "ace of clubs",
        value: "ace",
        picked: false,
        image: String.raw`images\ace_of_clubs.PNG`
    },
    {
        name: "two of clubs",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_clubs.PNG`
    },
    {
        name: "three of clubs",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_clubs.PNG`
    },
    {
        name: "four of clubs",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_Clubs.PNG`
    },
    {
        name: "five of clubs",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_clubs.PNG`
    },
    {
        name: "six of clubs",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_clubs.PNG`
    },
    {
        name: "seven of clubs",
        value: 7,
        picked: false,
        image: String.raw`images\Seven_of_clubs.PNG`
    },
    {
        name: "eight of clubs",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_clubs.PNG`
    },
    {
        name: "nine of clubs",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_clubs.PNG`
    },
    {
        name: "ten of clubs",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_clubs.PNG`
    },
    {
        name: "jack of clubs",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_clubs.PNG`
    },
    {
        name: "queen of clubs",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_clubs.PNG`
    },
    {
        name: "king of clubs",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_clubs.PNG`
    },
    {
        name: "ace of hearts",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_Hearts.png`
    },
    {
        name: "two of hearts",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_Hearts.png`
    },
    {
        name: "three of hearts",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_Hearts.png`
    },
    {
        name: "four of hearts",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_Hearts.png`
    },
    {
        name: "five of hearts",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_Hearts.png`
    },
    {
        name: "six of hearts",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_Hearts.png`
    },
    {
        name: "seven of hearts",
        value: 7,
        picked: false,
        image: String.raw`images\seven_of_Hearts.png`
    },
    {
        name: "eight of hearts",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_Hearts.png`
    },
    {
        name: "nine of hearts",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Hearts.png`
    },
    {
        name: "ten of hearts",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Hearts.png`
    },
    {
        name: "jack of hearts",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_Hearts.png`
    },
    {
        name: "queen of hearts",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Hearts.png`
    },
    {
        name: "king of hearts",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Hearts.png`
    },
    {
        name: "ace of diamonds",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_diamonds.PNG`
    },
    {
        name: "two of diamonds",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_diamonds.PNG`
    },
    {
        name: "three of diamonds",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_diamonds.PNG`
    },
    {
        name: "four of diamonds",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_diamonds.PNG`
    },
    {
        name: "five of diamonds",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_diamonds.PNG`
    },
    {
        name: "six of diamonds",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_diamonds.PNG`
    },
    {
        name: "seven of diamonds",
        value: 7,
        picked: false,
        image: String.raw`images\seven_of_diamonds.PNG`
    },
    {
        name: "eight of diamonds",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_diamonds.png`
    },
    {
        name: "nine of diamonds",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Diamonds.png`
    },
    {
        name: "ten of diamonds",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Diamonds.png`
    },
    {
        name: "jack of diamonds",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_DIamonds.png`
    },
    {
        name: "queen of diamonds",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Diamonds.png`
    },
    {
        name: "king of diamonds",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Diamonds.png`
    },
]

//screen elements
const instructions = $(".instructions");
const actions = $(".action");
const computerArea = $("#computerHand");
const playerHand = $("#playerHand");
const messageArea = $("#message")

function selectRandomCard(){
    let index = Math.floor((Math.random() * 52))
    return deckOfCards[index].name
}

function displayPlayerCard(card){
    //Takes in the card parameter which is a reference to the deck of cards list with a specific index of the selected card
    let newCard = $("<img>")
    newCard.attr("src", card.image)
    newCard.addClass("card")
    playerHand.append(newCard)
}

function displayComputerHand(){
    let newCard = $("<img>")
    newCard.attr("src", String.raw`images\playing_card_back.png`)
    newCard.addClass("card")
    computerArea.append(newCard)
}
    

function dealCard (player){
    let index = Math.floor((Math.random() * 52))
    while (deckOfCards[index].picked == true){
        index = Math.floor((Math.random() * 52))
    }
    player.push(deckOfCards[index])
    deckOfCards[index].picked = true
    if(player == userHand){
        displayPlayerCard(deckOfCards[index])
    } else if(player == computerHand){
        displayComputerHand()
    }
}

function calculateTotal(hand) {
    let total = 0;
    let aces = 0;
    for(let i = 0; i < hand.length; i++){
        if(hand[i].value == "ace"){
            aces += 1
        } else{
            total += hand[i].value
        }
    }
    if(aces != 0){
        if(aces == 1){
            if(total < 11){
                total += 11
            } else{
                total++
            }
        } else if(aces > 1){
            if(total < 11){
                total = total + (aces - 1)
            }
        }
    }
    return total
}

function startGame(){
    instructions.removeClass("instructionsDown")
    instructions.addClass("instructionsUp")
    actions.css("display", "flex")
    for(let i = 0; i < 2; i++){
        dealCard(userHand)
        dealCard(computerHand)
    }
    messageArea.text("You have been dealt two cards choose an option on the left")
    console.log(`user total: ${calculateTotal(userHand)}`)
    console.log(`computer total: ${calculateTotal(computerHand)}`)
}

function help(){
    instructions.removeClass("instructionsUp")
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
    //TODO reset player and computer hands 
}

function hit(){
    dealCard(userHand)
    messageArea.text("You have been dealt a new card")
    console.log(calculateTotal(userHand))
}

window.onload = () => {
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
}
