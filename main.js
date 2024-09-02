function getSleepHours(day){
    switch (day){
      case 'monday':
      return 7;
      break;
      case 'tuesday':
      return 9;
      break;
      case 'wednesday':
      return 8;
      break;
      case 'thursday':
      return 6;
      break;
      case 'friday':
      return 7;
      break;
      case 'saturday':
      return 8;
      break;
      case 'sunday':
      return 9;
      break;
    }
  }
  function getActualSleepHours(){
    var totalHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') +getSleepHours('saturday') + getSleepHours('sunday');
    console.log('Total hours slept this weeek: ' + totalHours);
    var idealHours = 56;
    var sleepDebt = idealHours;
    console.log("Ideal hours to sleep: " + idealHours)
    console.log("Your sleep debt is: " + sleepDebt)
  getActualSleepHours();
  }
