// kilometerToMeter
function kilometerToMeter(value) {
    if (value < 0) { // for negative value
        value = Math.abs(value);
        console.log("You entered a negative value. Since distance cannot be negative, it is shown as positive");
    }
    var meter = value * 1000;
    return meter;
}