
const fileManager = require('./fileManager');

const content = fileManager.readFile('Hello World.txt');


fileManager.writeFile('Bye World.txt', 'gggggggg');

fileManager.readFile('Bye World.txt');