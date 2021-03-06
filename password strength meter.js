document.addEventListener("DOMContentLoaded", function() {

  var strength = {
          0: "Worst ☹",
          1: "Bad ☹",
          2: "Weak ☹",
          3: "Good ☺",
          4: "Strong ☻"
  }

  var password = document.getElementById('password');
  var meter = document.getElementById('password-strength-meter');
  var text = document.getElementById('password-strength-text');

  password.addEventListener('input', function()
  {
      var val = password.value;
      var result = zxcvbn(val);

      // Update  password strength meter
      meter.value = result.score;

      // Update  text indicator
      if(val !== "") {
          text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
      }
      else {
          text.innerHTML = "";
      }
  });
});
