import createBooks from "./createBooks.js";

export default function searchBooks(data, targetElement) {
    // get both search inputs
    const searchAuthors = document.querySelector("input#authors");
    const searchPublishers = document.querySelector("input#publishers");

    // this is the function that both inputs will call on keyup
    function filterBooks() {
        // get the field data attribute
        const field = event.target.dataset.field;

        // if the author input is active clear the publisher input
        if (field === "author") {
            searchPublishers.value = "";
        }

        // if the publisher input is active clear the author input
        if (field === "publisher") {
            searchAuthors.value = "";
        }

        // get the trimmed, lowercased input value
        const searchValue = event.target.value.trim().toLowerCase();

        // filter the data array
        // use square brackets to get the object property by the field variable
        const filteredData = data.filter(function (item) {
            if (item[field].toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        // render new html
        createBooks(filteredData, targetElement);
    }

    searchAuthors.addEventListener("keyup", filterBooks);
    searchPublishers.addEventListener("keyup", filterBooks);
}
