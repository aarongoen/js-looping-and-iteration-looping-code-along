// Code your solutions in this file

const names = ["Lisa", "Kaitlin", "Jan"];
let event = "birthday"

function writeCards(names, event) {
   
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
}   

writeCards(names, event);

// let countDown = 0
// while (countDown > 0) {
//     console.log(countDown--);
// }
