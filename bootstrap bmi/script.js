document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    let bmi = weight / (height * height);
    let bodyFatPercentage = (1.2 * bmi) + (0.23 * 30 - 10.8 - 5.4); // Body Fat Percentage Formula

    let bmiResult = `
      <h4>Your BMI is: ${bmi.toFixed(2)}</h4>
      <h4>Your Body Fat Percentage is: ${bodyFatPercentage.toFixed(2)}%</h4>`;

    let healthyMessage = "";
    if (bmi < 18.5) {
      healthyMessage = "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      healthyMessage = "You are within a healthy weight range.";
    } else if (bmi >= 25 && bmi < 29.9) {
      healthyMessage = "You are overweight.";
    } else {
      healthyMessage = "You are obese.";
    }

    let resultContainer = document.getElementById('result');
    resultContainer.innerHTML = bmiResult + "<p>" + healthyMessage + "</p>";
    resultContainer.classList.add('fadeInAnimation'); // Add the animation class
  });
