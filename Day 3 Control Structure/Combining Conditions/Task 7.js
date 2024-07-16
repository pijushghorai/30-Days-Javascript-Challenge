function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is Leap Year`);
  } else {
    console.log(`${year} is Not Leap Year`);
  }
}

isLeapYear(2024)