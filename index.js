// Code your solution in this file!
let driversNames =['Antonia', 'Nuru', 'Amari', 'Mo']
 const returnFirstTwoDrivers = function (driversNames){

    return driversNames.slice(0,2)
 }
 

 const returnLastTwoDrivers = function(driversNames){
    return driversNames.slice(2)
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 const createFareMultiplier = function  (num){
   return function (fare){
    return fare * num
   }
 }

 function fareDoubler(fare){
return fare * 2
 }

 function fareTripler(fare){
    return fare * 3
 }

 
  
  const selectDifferentDrivers = function(arrayOfDrivers, driverSelectorFunction) {
    return driverSelectorFunction(arrayOfDrivers);
  };