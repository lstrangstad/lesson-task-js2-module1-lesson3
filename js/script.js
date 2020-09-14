import { url } from "./constants/settings.js";
import createBooks from "./ui/createBooks.js";
import displayMessage from "./ui/displayMessage.js";
import searchBooks from "./ui/searchBooks.js";

const container = ".result-container";

async function fetchBooks() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const books = json.data;
        createBooks(books, container);
        searchBooks(books, container);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, container);
    }
}

fetchBooks();
