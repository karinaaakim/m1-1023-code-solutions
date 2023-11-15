/* exported countdown */
function countdown(numbers) {
  if (numbers > 0) {
    const countdownArray = [];
    for (let i = numbers; i >= 0; i--) {
      countdownArray.push(i);
    }
    return countdownArray;
  } else {
    return [];
  }
}
