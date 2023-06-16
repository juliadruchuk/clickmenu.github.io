document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});
