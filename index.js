// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  // return [drivers[0], drivers[1]]
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  // return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
  return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int)=> {
  return function(multi){
    return multi * int
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, driversToReturn)=> {
  return driversToReturn(drivers)
}