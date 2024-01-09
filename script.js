let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  console.log('Guess checked!');
  var inputElement = document.getElementById('guess');
  var feedbackElement = document.getElementById('feedback');
  let guess = Number(inputElement.value);
  if (guess === randomNumber) {
    feedbackElement.innerHTML =
      '<strong>Congratulations! You got it right!</strong>';
    feedbackElement.style.color = 'green';
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = '<em>Too low! Try again.</em>';
    feedbackElement.style.color = 'red';
  } else {
    feedbackElement.innerHTML = '<em>Too high! Try again.</em>';
    feedbackElement.style.color = 'red';
  }
}