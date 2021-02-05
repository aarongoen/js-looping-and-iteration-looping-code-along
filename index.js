// Code your solutions in this file


function writeCards(names, event) {
    let newnames = []
    for (let i = 0; i < names.length; i++) {
        newnames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return newnames;
}   


function countDown(i) {
    while (i > -1) {
    console.log(i--);
    }
    i
}
