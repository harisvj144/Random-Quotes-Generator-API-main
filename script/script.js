// elements

const nameEl = document.querySelector(".author-name");
const quotesEl = document.querySelector(".quotes");
const diceEl = document.getElementById("dice");

// functions
function showAdvice() {
  // api url
  let url = "https://api.quotable.io/random";
  fetch(url).then((resp) => {
    resp.json().then((data) => {
      // getting data
      let quotes = data.content;
      let author = data.author;

      // to show
      quotesEl.innerText = `“ ${quotes} ”`;
      nameEl.innerText = `- ${author}`;
    });
  });
}

// event listneres
diceEl.addEventListener("click", showAdvice);

// loading animation
window.addEventListener("load", () => {
  const load = document.querySelector(".loader");
  load.style.display = "none";
});
