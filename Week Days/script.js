function showWeekday() {
    let number = parseInt(prompt("Enter a number between (1-7) for the day of the week"));
    let day;
    switch (number) {
        case 1: day = "Sunday"; break;
        case 2: day = "Monnday"; break;
        case 3: day = "Tuesday"; break;
        case 4: day = "Wednesday"; break;
        case 5: day = "Thursday"; break;
        case 6: day = "Friday"; break;
        case 7: day = "Saturday"; break;
        default: day = "Invalid number!please enter the between 1 and 7";
    }
    document.getElementById("output").innerHTML = day;
}
