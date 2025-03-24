const details = {
    my: "name",
    is: "Rudolf",
    the: "reindeer"
};

let sentence = "";
for (let key in details) {
    sentence += details[key] + " ";
}
console.log(sentence.trim()); 
