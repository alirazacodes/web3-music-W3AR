document.addEventListener("DOMContentLoaded", function () {
  // Card and footer link hover effect
  const hoverElements = document.querySelectorAll(
    ".artist-card, .organizer-card, .inscription-card, .footer-nav a"
  );

  hoverElements.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.style.transform = "scale(1.05)";
    });

    element.addEventListener("mouseout", function () {
      element.style.transform = "scale(1)";
    });
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", function () {
      card.style.transform = "scale(1)";
    });
  });

  //   // Fullscreen toggle button logic
  //   const fullscreenBtn = document.createElement("button");
  //   fullscreenBtn.innerText = "Fullscreen";
  //   fullscreenBtn.style.position = "fixed";
  //   fullscreenBtn.style.bottom = "10px";
  //   fullscreenBtn.style.right = "10px";
  //   fullscreenBtn.style.opacity = "0";
  //   fullscreenBtn.style.transition = "opacity 0.3s";
  //   document.body.appendChild(fullscreenBtn);

  // Fullscreen toggle button logic
  const fullscreenBtn = document.getElementById("fullscreenToggle");

  fullscreenBtn.addEventListener("mouseenter", function () {
    fullscreenBtn.style.opacity = "1";
  });

  fullscreenBtn.addEventListener("mouseleave", function () {
    fullscreenBtn.style.opacity = "0";
  });

  fullscreenBtn.addEventListener("click", function () {
    console.log("Fullscreen button clicked!"); // Log for debugging
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Neon Text Zoom In/Out Logic
  const neonText = document.getElementById("neonText");

  neonText.addEventListener("wheel", function (event) {
    if (event.ctrlKey) {
      event.preventDefault();
      const scale = event.deltaY < 0 ? 1.1 : 0.9;
      const currentSize = parseFloat(
        window.getComputedStyle(neonText).fontSize
      );
      neonText.style.fontSize = currentSize * scale + "px";
    }
  });
});
