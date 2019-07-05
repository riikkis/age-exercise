//get age and convert it to number (prompt always returns a string)
var age = Number(prompt("How old are you?"));

if (age < 0) {
    prompt("You haven't even been born yet!")
} else if (age >= 0 && age < 18) {
    prompt("You are not old enough to enter.")
} else if (age >= 18 && age < 21) {
    prompt("You can enter, but you cannot drink.")
} else if (age === 21) {
    prompt("Happy 21st birthday! You can enter and drink too :)")
} else {
    prompt("Come on in, and you can drink too :)")
}