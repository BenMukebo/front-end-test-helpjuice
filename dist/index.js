const divContainer = document.querySelector(".h1-div-container");
console.log("div is: ", divContainer);
const editorInput = document.getElementById("editor-input");
console.log("editorInput is: ", editorInput);

editorInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const value = e.target.value.trim();

    if (value !== "") {
      const containerDiv = document.createElement("div");
      containerDiv.className = "flex items-center gap-3 my-4";

      const burgerSvg = document.createElement("div");
      burgerSvg.className = "w-5 -translate-y-1.5";
      burgerSvg.innerHTML = `
        <svg class="text-input-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      `;

      const h1 = document.createElement("h1");
      h1.className = "text-3xl font-bold capitalize";
      h1.innerText = value;

      containerDiv.appendChild(burgerSvg);
      containerDiv.appendChild(h1);
      divContainer.appendChild(containerDiv);

      e.target.value = "";
    }
  }
});
