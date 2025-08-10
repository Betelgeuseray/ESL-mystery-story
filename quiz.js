function checkAnswer() {
  const answer = document.getElementById("q1").value;
  const feedback = document.getElementById("feedback");

  if (answer === "correct") {
    feedback.textContent = "✅ Correct! The lights flicker again... and something moves in the shadows. Continue to Chapter 2.";
    feedback.style.color = "lightgreen";
    // Optionally redirect to next chapter
    // window.location.href = "chapter2.html";
  } else if (answer === "wrong") {
    feedback.textContent = "❌ Not quite. Try again to uncover the mystery.";
    feedback.style.color = "tomato";
  } else {
    feedback.textContent = "⚠️ Please select an answer.";
    feedback.style.color = "orange";
  }
}