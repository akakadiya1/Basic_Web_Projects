// Get the required elements from the DOM
var bDateInput = document.getElementById('birthdate');
var calculateButton = document.getElementById('calculate-btn');
var result = document.getElementById('result');

// Add click event listener to the calculate button
calculateButton.addEventListener('click', calculateAge);

// Function to calculate the age
function calculateAge() {
  var bDate = new Date(bDateInput.value);
  var today = new Date();
  
  // Calculate the age in miliseconds and convert it to years
  var ageInMilliseconds = today - bDate;
  var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  
  // Display the result
  if(ageInYears >= 0) {
      result.textContent = `You're ${ageInYears} years old!`;
  }
  else {
    result.textContent = 'Not valid input';
  }
}