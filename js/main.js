// To change Background Image
function changeBackground(bg) {
    document.getElementById("main_page").style.backgroundImage = "url(img/" + bg + ".jpg)";
};

// To make DropDown List Work
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
  