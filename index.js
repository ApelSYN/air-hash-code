const readFile = require('./readFile');
const writeFile = require( './writeFIle' );
const _ = require('lodash');

async function process(fileName) {
  let {rides, config} = await readFile(fileName);
  return writeFile(cars, fileName);
}
