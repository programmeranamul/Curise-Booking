// Frist-Class Incrice Button Event Handler
document.getElementById("frist-class-increase-button").addEventListener("click", function () {
    ticketChangeHandler("frist-class", true);
});

// Frist-Class Decrease Button Event Handler
document.getElementById("frist-class-decrease-button").addEventListener("click", function () {
    ticketChangeHandler("frist-class", false);
});

// Economy-Class Incrice Button Event Handler
document.getElementById("economy-class-increase-button").addEventListener("click", function () {
    ticketChangeHandler("economy-class", true);
});

// Economy-Class Decrease Button Event Handler
document.getElementById("economy-class-decrease-button").addEventListener("click", function () {
    ticketChangeHandler("economy-class", false);
});



//Ticket Change Function
function ticketChangeHandler(id, increase) {

    //Take Ticket Input
    const ticketInput = document.getElementById(id + "-tickets");
    const numberOfTickets = parseInt(ticketInput.value);

    let numberOfNewTickets = numberOfTickets;
    //User Can Increase Number Of Ticket
    if (increase == true) {
        numberOfNewTickets = numberOfTickets + 1;
    }
    //If User Try To Give A Negetive Number 
    if (increase == false && numberOfNewTickets > 0) {
        numberOfNewTickets = numberOfTickets - 1;
    }
    ticketInput.value = numberOfNewTickets;//Update Tiket Input Value

    calculateAndUpdateTotal("sub-total", "tax-value", "total-price");//call total price && update price function
}


//Calculate Total Price And Update Parice
function calculateAndUpdateTotal(subTotal, taxValue, total) {
    //Take Input Value 
    const fristClassTickets = getInputValue("frist-class");
    const economyClassTickets = getInputValue("economy-class");

    //Calculate Subtotal and Update Subtotal Value
    const subTotalPrice = fristClassTickets * 150 + economyClassTickets * 100;
    document.getElementById(subTotal).innerText = subTotalPrice;

    //calculate tax and update tax value
    const totalTax = subTotalPrice * 0.1;
    document.getElementById(taxValue).innerText = totalTax;

    //calculate total price and update total price
    const totalPrice = subTotalPrice + totalTax;
    document.getElementById(total).innerText = totalPrice;
}


// Input Value Function By Passing ID
function getInputValue(id) {
    //get input value and convert in number
    const inputValue = parseInt(document.getElementById(id + "-tickets").value);
    return inputValue;
}

//Show Pop Up Massege After Booking
document.getElementById("book-now").addEventListener("click", function () {
   
    //If User Buye Some Ticket
    if (getInputValue("frist-class") != 0 || getInputValue("economy-class") != 0) {

        document.getElementById("pop-up").style.display = "block";
        //update popup box frist class ticket value
        document.getElementById("popup-frist-class-ticket-value").innerText = getInputValue("frist-class");
        //update popup box economy class ticket value
        document.getElementById("popup-economy-ticket-value").innerText = getInputValue("economy-class");
        //update popup box subtotal, tax, and total using function
        calculateAndUpdateTotal("popup-sub-total", "popup-tax", "popup-total");
        
    } 
    // If User try to booking without buy ticket
    else {
        alert("You need to buy at least 1 ticket for booking");
    }
});

//Hide Pop Up Massege 
document.getElementById("ok").addEventListener("click", function () {
    document.getElementById("pop-up").style.display = "none";
})
