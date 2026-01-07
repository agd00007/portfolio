// Ocultar todas las secciones al cargar
document.querySelectorAll(".section").forEach(section => {
  section.style.display = "none";
});


document.querySelector(".home").style.display = "block";


function showSection(sectionClass) {
  document.querySelectorAll(".section").forEach(section => {
    section.style.display = "none";
  });

  document.querySelector("." + sectionClass).style.display = "block";
}
