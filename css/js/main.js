// JS limpio, listo para escalar

document.addEventListener("DOMContentLoaded", () => {
  // Navbar active link
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#26A17B";
      link.style.fontWeight = "600";
    }
  });
});