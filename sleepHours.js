const getSleepHours=day=>{
  if(day==='monday'){
    return 7
  }
  else if(day==='tuesday'){
    return 7
  }
  else if(day==='wednesday'){
    return 7
  }
  else if(day==='thursday'){
    return 7
  }
  else if(day==='friday'){
    return 7
  }
  else if(day==='saturday'){
    return 10
  }
  else if (day==='sunday'){
    return 10
  }
  else {
    return 'Error! please re-enter the day'
  }
}
/* console.log(getSleepHours('Tuesday')+' hours') */
const getActualSleepHours=()=> getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
  
console.log(getActualSleepHours())
function getIdealSleepHours(){
  let idealHours=8;
  return idealHours*7;
}
console.log(getIdealSleepHours())
const calculateSleepDebt=()=>{
  let actualSleepHours=getActualSleepHours();
  let idealSleepHours=getIdealSleepHours();
  let a=actualSleepHours-idealSleepHours
  if (actualSleepHours===idealSleepHours){
    console.log('You got the perfect amount of sleep');
  }
  else if  (actualSleepHours<idealSleepHours){
    console.log('you slept '+-a+' less.You should get some rest');
  }
  else {
    console.log("You got more "+ 
    a+" hours sleep than needed")
  }
}
calculateSleepDebt()