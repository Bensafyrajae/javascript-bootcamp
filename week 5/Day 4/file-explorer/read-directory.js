
const fs = require('fs');
const path = require('path');

function readDirectory(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);
    
    console.log(`\nContents of directory: ${directoryPath}`);
    console.log('='.repeat(40));
    
    if (files.length === 0) {
      console.log('Directory is empty.');
    } else {
      files.forEach((file, index) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        
        const isDirectory = stats.isDirectory();
        const fileSize = stats.size;
        const modifiedDate = stats.mtime.toLocaleString();
        
        console.log(`${index + 1}. ${file}`);
        console.log(`   Type: ${isDirectory ? 'Directory' : 'File'}`);
        if (!isDirectory) {
          console.log(`   Size: ${fileSize} bytes`);
        }
        console.log(`   Modified: ${modifiedDate}`);
        console.log('-'.repeat(40));
      });
    }
    
    return files;
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    return [];
  }
}

readDirectory('.');

