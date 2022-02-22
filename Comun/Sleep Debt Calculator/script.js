const day = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  
  let getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day) {
      case "monday":
        return 6;
        break;
      case "tuesday":
        return 7;
        break;
      case "wednesday":
        return 8;
        break;
      case "thursday":
        return 7;
        break;
      case "friday":
        return 8;
        break;
      case "saturday":
        return 6;
        break;
      case "sunday":
        return 7;
        break;
      default:
        return 0;
    }
  };
  
  let getActualSleepHours = () => {
    let somaHours = 0;
    for (let i in day) {
      somaHours = somaHours + getSleepHours(day[i]);
    }
    return somaHours;
  };
  
  const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
  };
  
  let calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    actualSleepHours === idealSleepHours
      ? console.log("Bom trabalho dormindo")
      : actualSleepHours > idealSleepHours ? console.log("Tente Dormir um pouco menos")
      : console.log("talvez voce precise de um pouco mais de sono");
  };
  
  calculateSleepDebt();
  console.log(getActualSleepHours());