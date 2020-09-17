import { noResultMessage } from "./noResultMessage.js";
import { renderCards } from "./renderCards.js";

export function filterNames(json) {
  const search = document.querySelector(".input");

  search.onkeyup = function () {
    //console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredAuthors = json.filter(function (book) {
      if (book.author.toLowerCase().startsWith(searchValue)) {
        return true;
      } else {
        noResultMessage("No results...");
      }
    });

    renderCards(filteredAuthors);
  };
}
