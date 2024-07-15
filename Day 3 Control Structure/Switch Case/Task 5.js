let score = 99

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("A");
        break;
    case (score >= 80 && score <= 89):
        console.log("B");
        break;
    case (score >= 70 && score <= 79):
        console.log("C");
        break;
    case (score >= 60 && score <= 69):
        console.log("D");
        break;
    case (score <= 59):
        console.log("F");
        break;
    default:
        console.log("Please enter valid markes");
        break;
}