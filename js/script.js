document.getElementById("engravingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let userName = document.getElementById("userName").value;
  let messageArea = document.getElementById("messageArea");

  messageArea.textContent = "Hi " + userName + "! Your custom laser engraving idea would make a great personalized project.";
});