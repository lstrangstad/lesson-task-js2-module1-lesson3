export function noResultMessage(message) {
  const noResults = document.querySelector(".noResults");

  console.log(message);

  noResults.innerHTML = `<div class="noResults">${message}</div>`;
}
