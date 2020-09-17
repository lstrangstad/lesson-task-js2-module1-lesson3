import { url } from "./constants/url.js";
import { renderCards } from "./components/renderCards.js";
import { filterNames } from "./components/filterNames.js";
import { noResultMessage } from "./components/noResultMessage.js";

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const books = json.data;
    console.log(books);
    renderCards(books);
    filterNames(books);
  } catch (error) {
    console.log(error);
  }
}

makeApiCall();
