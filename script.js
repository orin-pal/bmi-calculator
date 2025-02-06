// Function to calculate BMI
function calculateBMI(height, weight) {
  // Convert height from cm to meters
  const heightInMeters = height / 100;
  // Calculate BMI using the formula: weight (kg) / height (m)^2
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  return bmi;
}

// Function to determine BMI category and advice
function getBMICategoryAndAdvice(bmi) {
  if (bmi < 18.5) {
    return {
      category: "Underweight",
      advice:
        "You are underweight. Focus on eating nutrient-rich foods like fruits, vegetables, lean proteins, and whole grains. Consider consulting a dietitian for a personalized plan.",
    };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return {
      category: "Normal",
      advice:
        "You have a healthy weight. Maintain a balanced diet and regular exercise routine to stay fit and healthy!",
    };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return {
      category: "Overweight",
      advice:
        "You are overweight. Focus on a balanced diet with portion control and incorporate regular physical activity like walking, jogging, or yoga.",
    };
  } else {
    return {
      category: "Obese",
      advice:
        "You are obese. Consult a healthcare professional for a personalized weight management plan. Focus on a healthy diet and regular exercise.",
    };
  }
}

// Get references to DOM elements
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate-btn");
const bmiResult = document.getElementById("bmi-result");
const bmiCategory = document.getElementById("bmi-category");
const bmiAdvice = document.getElementById("bmi-advice");

// Add event listener to the calculate button
calculateBtn.addEventListener("click", () => {
  // Get input values
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Validate inputs
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight.");
    return;
  }

  // Calculate BMI
  const bmi = calculateBMI(height, weight);

  // Get BMI category and advice
  const { category, advice } = getBMICategoryAndAdvice(bmi);

  // Display results
  bmiResult.textContent = bmi;
  bmiCategory.textContent = category;
  bmiAdvice.textContent = advice;
});
