document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    document.getElementById("start").scrollIntoView({ behavior: "smooth" });
  });
});

