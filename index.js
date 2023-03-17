// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2) 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (integer) => function (fare) {
  return fare * integer; 
}
const fareDoubler = (amount) => amount * 2 //doubles the fare
const fareTripler = (amount) => amount * 3 // tripples the fare
const selectDifferentDrivers = (drivers, driverSelector) => driverSelector(drivers) // returns either returnFirstTwoDrivers or returnLastTwoDrivers