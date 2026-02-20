const headings = document.querySelectorAll("h2");

headings.forEach(function(heading) {
  heading.addEventListener("click", function() {
    alert("You clicked a section heading!");
  });
});