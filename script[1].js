document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("tenisky-container");
      data.forEach((teniska) => {
        const div = document.createElement("div");
        div.className = "teniska";
        div.innerHTML = `
          <h2>${teniska.nazov}</h2>
          <img src="${teniska.obrazok}" alt="${teniska.nazov}" />
          <p><strong>Dostupná veľkosť:</strong> ${teniska.velkost}</p>
          <p class="${teniska.na_sklade ? 'na-sklade' : 'vypredane'}">
            ${teniska.na_sklade ? "Na sklade" : "Vypredané"}
          </p>
        `;
        container.appendChild(div);
      });
    });
});