// JavaScript para adicionar efeito de rolagem suave ao clicar nos links do menu de navegação
var navLinks = document.querySelectorAll("nav a");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    var target = event.target.getAttribute("href");
    var element = document.querySelector(target);
    var top = element.offsetTop;

    window.scroll({
      top: top,
      behavior: "smooth"
    });
  });
}
