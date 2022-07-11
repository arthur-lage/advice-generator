const adviceId = document.querySelector("#advice-id");
const adviceText = document.querySelector("#advice-text");
const newAdviceButton = document.querySelector("#new-advice");

async function fetchAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const json = await res.json();

  adviceId.innerHTML = json.slip.id;
  adviceText.innerHTML = json.slip.advice;
}

newAdviceButton.addEventListener("click", () => {
  fetchAdvice();
});

window.addEventListener("load", () => {
  fetchAdvice();
});
