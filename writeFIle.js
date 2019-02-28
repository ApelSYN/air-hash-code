const fs = require('fs');
module.exports = (obj, fileName) => {
  let points = 0;
  const stings = Object.keys(obj).map((key) => {
    const car = obj[key];
    points += car.points;
    return `${car.rides.length} ${car.rides.join(' ')}`;
  })
  console.log(points)
  fs.writeFile(`./output/${fileName}.out`, stings.join('\n'), function (err) {
    if (err) {
      // append failed
    } else {
      // done
    }
  })
  return points;
}