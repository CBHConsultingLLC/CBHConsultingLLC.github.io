function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((section) => section.classList.remove("active"));
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelector(`.nav-link[data-section='${id}']`).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners for navigation
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section");
      showSection(sectionId);
    });
  });


  document.querySelectorAll(".inventory-preview").forEach(function (img) {
    img.addEventListener("click", function () {
      var largeImg = this.getAttribute("data-img");
      document.getElementById("inventoryModalImg").src = largeImg;
    });
  });

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
