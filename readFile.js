const fs = require('fs');
const dist = require('./dist');
class Ride {
  constructor({ start, finish, distence, mustStart, mustEnd, id }){
    this.start = start;
    this.finish = finish;
    this.distence = distence;
    this.mustStart = mustStart;
    this.mustEnd = mustEnd;
    this.id = id;
    this.carsTicks = {};
  }
}

module.exports = async (fileName) => {
  const text = await fs.readFileSync(`./input/${fileName}.in`, 'utf8');
  const array = text.split('\n');
  const [input] = array.splice(0, 1);
  array.splice(array.length - 1, array.length);
  const configArray = input.split(' ');
  const config = {
    R: Number(configArray[0]),
    C: Number(configArray[1]),
    F: Number(configArray[2]),
    N: Number(configArray[3]),
    B: Number(configArray[4]),
    T: Number(configArray[5]),
  };
  let maxPoits = 0
  const rides = array.reduce((arr, string, id) => {
    const rideArray = string.split(' ');
    const distence = dist(rideArray[0],rideArray[1],rideArray[2],rideArray[3]);
    const points = distence + config.B;
    if(points > maxPoits) maxPoits = points;
    arr.push(new Ride({
      start: {r: +rideArray[0], c: +rideArray[1]},
      finish: {r: +rideArray[2], c: +rideArray[3]},
      distence,
      mustStart: +rideArray[4],
      mustEnd: +rideArray[5],
      id: id
    }));
    return arr;
  }, []);
  config.maxPoints = maxPoits;
  return {
    rides, config,
  }
};