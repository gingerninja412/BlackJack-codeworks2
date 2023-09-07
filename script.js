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

//The two below functions are to visualise the card on the screen, two functions are used in order to show the users hand face up and the computers hand face down
function displayPlayerCard(card){
    //Takes in the card parameter which is a reference to the deck of cards list with a specific index corresponding to a card
    let newCard = $("<img>")
    // a new image element is created
    newCard.attr("src", card.image)
    // The source attribute is added with the image path already added to it
    newCard.addClass("card")
    // The card class is added to it to make it fit into the hand division
    playerHand.append(newCard)
    // the new card element is added to the hand
}

function displayComputerHand(){
    let newCard = $("<img>")
    newCard.attr("src", String.raw`images\playing_card_back.png`)
    newCard.addClass("card")
    computerArea.append(newCard)
    //the above function is the same as the one for the player only this one has a hardcoded path
}
    
//Deals a singular card to the user
function dealCard (player){
    //player refers to the hand that the cards are being dealt to
    let index = Math.floor((Math.random() * 52))
    //generates a random index between one and 52
    while (deckOfCards[index].picked == true){
        index = Math.floor((Math.random() * 52))
    }
    // checks that the card is not already picked, if it is the process repeats until one is found that has not already been dealt
    player.push(deckOfCards[index])
    //pushes the card into the hand list of the relevant player
    deckOfCards[index].picked = true
    //sets the picked flag to true
    if(player == userHand){
        displayPlayerCard(deckOfCards[index])
    } else if(player == computerHand){
        displayComputerHand()
    }
    //decides where to display the card
}

//calculates the total value of a hand
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

//this function starts the game
function startGame(){
    instructions.removeClass("instructionsDown")
    instructions.addClass("instructionsUp")
    //the instructions are animated off the screen
    actions.css("display", "flex")
    //shoes all of the action buttons
    for(let i = 0; i < 2; i++){
        dealCard(userHand)
        dealCard(computerHand)
    }
    //Deals two cards to each user
    messageArea.text("You have been dealt two cards choose an option on the left")
    //Tells the user what has just happened
    console.log(`user total: ${calculateTotal(userHand)}`)
    console.log(`computer total: ${calculateTotal(computerHand)}`)
}

//This function resets the game and brings back the help prompt
function help(){
    instructions.removeClass("instructionsUp")
    instructions.addClass("instructionsDown")
    //animates the instructions back onscreen
    actions.css("display", "none")
    //removes all of the action buttons
    //TODO reset player and computer hands 
}

//Deals a card to the user provided the game has not ended
function hit(){
    dealCard(userHand)
    //calls the deal card function to deal a card
    messageArea.text("You have been dealt a new card")
    //tells the user what has just happened
    console.log(calculateTotal(userHand))
}


//This brings down the instructions then the game starts
window.onload = () => {
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
}
