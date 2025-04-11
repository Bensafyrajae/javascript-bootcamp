const fs = require('fs');

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`Content of ${filePath}:`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return null;
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content);
    console.log(`Successfully wrote to ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error writing to file ${filePath}:`, error.message);
    return false;
  }
}

module.exports = {
  readFile,
  writeFile
};