// Code your solutions in this file

const cards = [];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

    return cards;
}



function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i--);
    }
}
countDown(10);