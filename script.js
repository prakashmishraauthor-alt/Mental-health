const themeButton = document.querySelector(".theme-toggle");
const form = document.querySelector(".subscribe-form");

themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeButton.querySelector(".sun").style.display = isLight ? "none" : "inline";
  themeButton.querySelector(".moon").style.display = isLight ? "inline" : "none";
  localStorage.setItem("aura-theme", isLight ? "light" : "dark");
});

if (localStorage.getItem("aura-theme") === "light") {
  document.body.classList.add("light");
  themeButton?.querySelector(".sun") && (themeButton.querySelector(".sun").style.display = "none");
  themeButton?.querySelector(".moon") && (themeButton.querySelector(".moon").style.display = "inline");
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  if (!input.value.trim()) {
    input.focus();
    return;
  }
  const button = form.querySelector("button");
  button.textContent = "You're on the list ✓";
  input.value = "";
  button.disabled = true;
});
