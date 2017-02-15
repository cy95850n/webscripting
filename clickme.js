// JavaScript Documentfunction myFunction() {
    var text;
    var favDrink = prompt("Are you cool?", "Yes");
    switch(favDrink) {
        case "Yes":
        text = "What a lie!";
        break;
    case "No":
        text = "I agree";
        break;
        case "Maybe":
        text = "So uncool";
        break;
        default:
        text = "I have never heard of that one..";
    }
    document.getElementById("demo").innerHTML = text;
