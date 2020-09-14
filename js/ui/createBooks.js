import displayMessage from "./displayMessage.js";
import { EMPTY_FILTER_RESULTS } from "../constants/messages.js";

export default function createBooks(data, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = "";

    if (data.length === 0) {
        displayMessage("", EMPTY_FILTER_RESULTS, targetElement);
    }

    for (let i = 0; i < data.length; i++) {
        element.innerHTML += `<div class="result">
                                <h4>${data[i].title}</h4>
                                <p>Author: <b>${data[i].author}</b></p>
                                <p>Publisher: <b>${data[i].publisher}</b></p>                                      
                            </div>`;
    }
}
