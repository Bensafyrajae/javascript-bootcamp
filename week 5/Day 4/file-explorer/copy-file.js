const fs = require('fs');

function copyFile(source, destination) {
  try {
    const content = fs.readFileSync(source, 'utf8');
    console.log(`Successfully read content from ${source}`);
    
    fs.writeFileSync(destination, content);
    console.log(`Successfully copied content to ${destination}`);
    
    return true;
  } catch (error) {
    console.error(`Error copying file: ${error.message}`);
    return false;
  }
}

copyFile('source.txt', 'destination.txt');

try {
  const destinationContent = fs.readFileSync('destination.txt', 'utf8');
  console.log('\nContent of destination.txt:');
  console.log(destinationContent);
} catch (error) {
  console.error(`Error reading destination file: ${error.message}`);
}