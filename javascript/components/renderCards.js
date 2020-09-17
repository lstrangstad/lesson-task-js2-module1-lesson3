import { filterNames } from "./filterNames.js";
export function renderCards(json) {
  const resultContainer = document.querySelector(".resultContainer");

  resultContainer.innerHTML = "";
  json.forEach((data) => {
    resultContainer.innerHTML += `
    <div class="noResults"></div>
    <div class="card">
    <h2 class="card__title">"${data.title}"</h2>
    <p class="card__author">${data.author}</p>
    <p class="publisher">${data.publisher}</p>
    </div>`;
  });
}
