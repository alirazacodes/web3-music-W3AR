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

  cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", function () {
      card.style.transform = "scale(1)";
    });
  });

  // Bubbles effect
  const bubbleCount = 20;
  const container = document.querySelector(".container");

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Randomize size, position and animation duration of each bubble
    bubble.style.width = `${Math.random() * 100 + 50}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.bottom = `${Math.random() * 100}vh`;
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;

    container.appendChild(bubble);
  }

  // Modal pop-up for Wallet Connect
  const modal = document.getElementById("walletModal");
  const showModalBtn = Array.from(document.querySelectorAll("nav a")).find(
    (a) => a.textContent === "Wallet Connect"
  );
  const closeModalBtn = document.querySelector(".close-modal");

  showModalBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle dropdown for wallet downloads
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close dropdown if clicked outside
  window.addEventListener("click", function (e) {
    if (
      !dropdownContent.contains(e.target) &&
      !dropdownBtn.contains(e.target)
    ) {
      dropdownContent.style.display = "none";
    }
  });

  // Countdown Timer
  const dayElem = document.querySelector(".days");
  const hourElem = document.querySelector(".hours");
  const minuteElem = document.querySelector(".minutes");
  const secondElem = document.querySelector(".seconds");

  let timeRemaining = {
    days: 10,
    hours: 20,
    minutes: 30,
    seconds: 0,
  };

  function updateTimerDisplay() {
    dayElem.textContent = timeRemaining.days;
    hourElem.textContent = timeRemaining.hours;
    minuteElem.textContent = timeRemaining.minutes;
    secondElem.textContent = timeRemaining.seconds;
  }

  function countdown() {
    if (timeRemaining.seconds > 0) {
      timeRemaining.seconds--;
    } else if (timeRemaining.minutes > 0) {
      timeRemaining.minutes--;
      timeRemaining.seconds = 59;
    } else if (timeRemaining.hours > 0) {
      timeRemaining.hours--;
      timeRemaining.minutes = 59;
      timeRemaining.seconds = 59;
    } else if (timeRemaining.days > 0) {
      timeRemaining.days--;
      timeRemaining.hours = 23;
      timeRemaining.minutes = 59;
      timeRemaining.seconds = 59;
    }
    updateTimerDisplay();
  }

  setInterval(countdown, 1000);
});

function startCountdown() {
  let daysElem = document.querySelector(".days");
  let hoursElem = document.querySelector(".hours");
  let minutesElem = document.querySelector(".minutes");
  let secondsElem = document.querySelector(".seconds");

  let days = parseInt(daysElem.textContent);
  let hours = parseInt(hoursElem.textContent);
  let minutes = parseInt(minutesElem.textContent);
  let seconds = parseInt(secondsElem.textContent);

  setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          hours = 23;
          days--;
          if (days < 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
          }
        }
      }
    }

    daysElem.textContent = days;
    hoursElem.textContent = hours.toString().padStart(2, "0");
    minutesElem.textContent = minutes.toString().padStart(2, "0");
    secondsElem.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
}

startCountdown();
