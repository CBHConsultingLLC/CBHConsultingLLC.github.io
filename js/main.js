function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((section) => section.classList.remove("active"));
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelector(`.nav-link[onclick*='${id}']`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".inventory-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("inventoryModalImg").src = largeImg;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Inventory Tracker already handled
  document.querySelectorAll(".ccl-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("cclModalImg").src = largeImg;
    });
  });
  document.querySelectorAll(".mpage-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("mpageModalImg").src = largeImg;
    });
  });
  document.querySelectorAll(".rrd-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("rrdModalImg").src = largeImg;
    });
  });
});
