const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {    
    const textInput = event.currentTarget.value.trim();
    outputEl.textContent = (textInput)? textInput:"Anonymous"
});



//#region Стилізація по макету
inputEl.setAttribute(`style`, `font-family: "Montserrat", Regular; line-height: 150%; letter-spacing: 0.04em;`);
inputEl.style.color = "#2e2f42";
inputEl.style.width = "360px";
inputEl.style.padding = "8px 16px";

const h1El = document.querySelector("h1");
h1El.setAttribute(`style`, `font-family: "Montserrat", SamiBold; line-height: 133%; letter-spacing: 0.04em;font-weight: 600; font-size: 24px;`);
h1El.style.color = "#2e2f42";
//#endregion Стилізація по макету
