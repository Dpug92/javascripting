var dice = process.argv.slice(2);

function rolledDice(dice) {
var amount = [];

   for (var i = 0; i < dice; i++) {
     var randomNumber = (" " + Math.floor(Math.random()*6));
    amount.push(randomNumber);
// console.log(`Rolled ${dice} dice: ${randomNumber}`);
    }
return `Rolled ${dice} dice: ${amount.join(",")}`
}

console.log(rolledDice(dice));
