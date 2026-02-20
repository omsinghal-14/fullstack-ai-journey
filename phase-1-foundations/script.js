const headings = document.querySelectorAll("h2");

headings.forEach(function(heading) {
  heading.addEventListener("click", function() {
    heading.classList.toggle("active-heading");
  });
});