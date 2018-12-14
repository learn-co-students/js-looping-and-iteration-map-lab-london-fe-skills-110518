// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase()
  });
}

function nameToAttributes(drivers) {
  const splitNames = drivers.map(function (driver) {
    const name = driver.split(" ");
    return {firstName: name[0], lastName: name[1]};
  })
  return splitNames;
  }
  
function attributesToPhrase(drivers) {
  let phrases = drivers.map (function (driver) {
    let phrase = `${driver.name} is from ${driver.hometown}`;
    return phrase;
  });
  return phrases;
}
    
  
