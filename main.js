const input = require('sync-input');
const items = [
    {
        "Name": "Teddy Bear",
        "Price": 10,
        "ID": 1
    },
    {
        "Name": "Big Red Ball",
        "Price": 5,
        "ID": 2
    },
    {
        "Name": "Huge Bear",
        "Price": 50,
        "ID": 3
    },
    {
        "Name": "Candy",
        "Price": 8,
        "ID": 4
    },
    {
        "Name": "Stuffed Tiger",
        "Price": 15,
        "ID": 5
    },
    {
        "Name": "Stuffed Dragon",
        "Price": 30,
        "ID": 6
    },
    {
        "Name": "Skateboard",
        "Price": 100,
        "ID": 7
    },
    {
        "Name": "Toy Car",
        "Price": 25,
        "ID": 8
    },
    {
        "Name": "Basketball",
        "Price": 20,
        "ID": 9
    },
    {
        "Name": "Scary Mask",
        "Price": 75,
        "ID": 10
    }
];

function getUserNumericInput(promptMessage) {
    let userInput;
    do {
        userInput = input(promptMessage);
        if (isNaN(userInput)) {
            console.log("Please enter a valid number!");
        }
    } while (isNaN(userInput));
    return userInput;
}

function totalTix () {
    console.log(`Total tickets: ${tickets}`)
}

function repeatUser () {
    userAction = input("\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n");
}
let tickets = 0;

function checkGiftsAvailable() {
    return items.some(item => item !== null);
}

function buyGift() {
    if (!checkGiftsAvailable()) {
        console.log("Wow! There are no gifts to buy.");
        repeatUser();
    }

    let userChoice = Number(getUserNumericInput("Enter the number of the gift you want to get: ")) - 1;

    if (items[userChoice]) {
        if (tickets >= items[userChoice].Price) {
            console.log(`Here you go, one ${items[userChoice].Name}!`);
            tickets -= items[userChoice].Price;
            delete items[userChoice];
        } else {
            console.log("You don't have enough tickets to buy this gift.")
            totalTix();
        }
    } else {
        console.log("There is no gift with that number!");
    }
}

function tixAdd(ticketAdd) {
    if (!isNaN(ticketAdd) && ticketAdd >= 0 && ticketAdd <= 1000) {
        tickets += ticketAdd;
        totalTix();
    } else {
        console.log("Please enter a valid number between 0 and 1000.");
    }
}

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:\n`);
showGifts();
function showGifts () {
    for (let i in items) {
        console.log(items[i].ID + "- " + items[i].Name + ", Cost: " + items[i].Price + " tickets");
    }
}

let userAction = input("\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n");


while (userAction !== "5") {
    switch (userAction) {
        case "1":
            buyGift();
            totalTix();
            repeatUser();
            break;
        case "2":
            let ticketAdd = Number(input("Enter the ticket amount: "));
            tixAdd(ticketAdd);
            repeatUser();
            break;
        case "3":
            totalTix();
            repeatUser();
            break;
        case "4":
            console.log(`Here's the list of gifts:\n`)
            showGifts();
            repeatUser();
            break;
        default:
            console.log("Please enter a valid number!\n");
            repeatUser();
            break
    }

}
console.log("Have a nice day!")