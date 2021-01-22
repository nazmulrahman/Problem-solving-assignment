//(1) kilometerToMeter
function kilometerToMeter(value) {
    if (value < 0) { // for negative value
        value = Math.abs(value);
        console.log("You entered a negative value. Since distance cannot be negative, it is shown as positive");
    }
    var meter = value * 1000;
    return meter;
}



//(3) hotelCost
function hotelCost(days) {
    var rent = 0;
    if (days <= 10) {
        rent = days * 100;
    } else if (days <= 20) {
        var firstOffer = 10 * 100;
        var remaining = days - 10;
        var secondOffer = remaining * 80;
        rent = firstOffer + secondOffer;
    } else {
        var firstOffer = 10 * 100;
        var secondOffer = 10 * 80;
        var remaining = days - 20;
        var thirdOffer = remaining * 50;
        rent = firstOffer + secondOffer + thirdOffer;
    }
    return rent;
}



//(4) megaFriend

function megaFriend(friends) {
    var bigName = ''; // largest element will store here
    for (var i = 0; i < friends.length; i++) {
        var elements = friends[i];
        if (elements.length > bigName.length) {
            bigName = elements;
        }
    }
    return bigName;
}