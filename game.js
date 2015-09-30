var question1 = prompt('First Question. Have I lived outside the USA? Yes/No');
if (question1.toUpperCase() === "YES" ||
    question1.toUpperCase() ==="Y" ||
    question1.toUpperCase() === "YEAH"){
  alert("Good Job! You got it right!");
  } else {
    alert("You guessed wrong.")
  }




var question2 = prompt('Next question. Do you like spam?');
if (question2.toUpperCase() === "YES" ||
    question2.toUpperCase() ==="Y" ||
    question2.toUpperCase() === "YEAH"){
  alert("Awesome! Spam is great!");
  } else {
    alert("Wrong answer. Spam is great.")
  }

var question3 = prompt('Final question. Do I have any siblings?');
if (question3.toUpperCase() === "YES" ||
    question3.toUpperCase() === "Y" ||
    question3.toUpperCase() === "YEAH") {
  alert("Correct! I have a sister and 2 brothers.")
} else {
  alert("Wong. I have a sister and 2 brothers")
}

console.log('Question 1 response: ' + question1);
console.log('Question 2 response: ' + question2);
console.log('Question 3 response: ' + question3);

