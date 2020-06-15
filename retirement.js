const name = "Thais";
const gender = "F";
const age = 28;
const contribution = 5;

if (gender == "M") {
    if (contribution >= 35 && age + contribution >= 95) {
        console.log(`${name}, you are able to retire!`)
    } else {
        console.log(`${name}, you are not able to retire!`)
    }
} else {
    if (contribution >= 30 && age + contribution >= 85) {
        console.log(`${name}, you are able to retire!`)
    } else {
        console.log(`${name}, you are not able to retire!`)
    }
}