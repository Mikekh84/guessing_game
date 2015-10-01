// define variables to display response on page
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

var tally = 0; //This is the number they would have gotten correct

var userName = prompt('Please enter your name')
alert('Hi ' + userName +'!' + ' Welcome to my guessing game.')

function ques1() {
  var question1 = prompt('First Question. Have I lived outside the USA? Yes/No');
  if (question1.toUpperCase() === 'YES' ||
      question1.toUpperCase() ==='Y' ||
      question1.toUpperCase() === 'YEAH'){
    one.innerHTML = 'Good Job! You got it right!';
    tally++;
  } else {
    one.innerHTML = 'You guessed wrong.';
  }
}

function ques2() {
  var question2 = prompt('Next question. Do you like spam? Yes/No');
  if (question2.toUpperCase() === 'YES' ||
      question2.toUpperCase() === 'Y' ||
      question2.toUpperCase() === 'YEAH'){
    two.innerHTML = 'Awesome! Spam is great!';
    tally++;
  } else {
    two.innerHTML = 'Wrong answer. Spam is great.';
  }
}

function ques3() {
  var question3 = prompt('Final question. Do I have any siblings? Yes/No');
  if (question3.toUpperCase() === 'YES' ||
      question3.toUpperCase() === 'Y' ||
      question3.toUpperCase() === 'YEAH') {
    three.innerHTML = 'Correct! I have a sister and 2 brothers.';
    tally++;
  } else {
    three.innerHTML = 'Wrong. I have a sister and 2 brothers.';
  }
}

ques1();
ques2();
ques3();

alert("Hi " + userName + "! " +
  " You got " + tally +
  " correct out of 3. \nThank you for playing.");

console.log('The players name: ' + userName)
console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);
console.log('Total correct:' + tally);

