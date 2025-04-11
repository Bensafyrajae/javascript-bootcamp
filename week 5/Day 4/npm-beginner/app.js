import chalk from "chalk";

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

console.log('\n' + chalk.bgYellow.black(' NODE.JS LEARNING ') + '\n');

console.log(chalk.green('✓ Success:') + ' Operation completed successfully');
console.log(chalk.yellow('⚠ Warning:') + ' This action might have consequences');
console.log(chalk.red('✗ Error:') + ' Something went wrong');

console.log('\n' +
  chalk.red('N') +
  chalk.yellow('o') +
  chalk.green('d') +
  chalk.blue('e') +
  chalk.magenta('.') +
  chalk.cyan('j') +
  chalk.white('s') +
  ' is awesome!'
);


