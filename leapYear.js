// Find Leap Year
let findLeapYear = function (year) {
  if (year % 4 == 0) {

    if (year % 100 == 0) {

      if (year % 400 == 0) {
        return `${year} is a Leap year.`;
      } else {
        return `${year} is a not a Leap year.`;
      }

    } else {
      return `${year} is a Leap year.`;
    }

  } else {
    return `${year} is a not a Leap year.`;
  }
};

console.log(findLeapYear(2016));
