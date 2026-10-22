const fs = require("fs");
const path = require("path");



// const finalpath = path.join(__dirname,"data","notes.txt")->{This is not a right way }

const commond = process.argv[2];
const filepath = process.argv[3];

const data = fs.readFileSync(filepath,"utf8")

if (commond === "words") {
    wordsCounter();
} else if (commond === "letters"){
    lettersCounter();
}

function wordsCounter (){
    const wordCount = data.split(" ").length - 1;
    console.log("The number of words in this notes :", wordCount);
}

function lettersCounter () {
    const letterCount = data.length;
    console.log("The number of letters in this notes :",letterCount);
}