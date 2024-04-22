function differenceInDays(date1, date2) {
  const oneDayMs = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const timeDiffMs = Math.abs(date2.getTime() - date1.getTime());
  const daysDiff = Math.floor(timeDiffMs / oneDayMs);
  return daysDiff;
}


const startDate = new Date('2024-04-10');
Date.prototype.daysTo =function (nextTime){

  console.log(nextTime)
  console.log(this)
  return differenceInDays(this,nextTime)
}
const difInDays  = startDate.daysTo(new Date)
console.log(difInDays);

