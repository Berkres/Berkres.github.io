let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const darkModeToggleMobile = document.querySelector("#dark-mode-toggle-mobile");

const darkModeIcon = document.querySelector("#dark-mode-icon");

const darkModeIconMobile = document.querySelector("#dark-mode-icon-mobile");

let signatureImg = document.querySelector("#signature-image");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");

  localStorage.setItem("darkMode", "enabled");

  signatureImg.style.opacity = "0";
  setTimeout(() => {
    signatureImg.src = "Signature-Transparent-dark-mode.png";
    signatureImg.style.opacity = "1";
  }, 150);

  darkModeIcon.style.opacity = "0";
  setTimeout(() => {
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
    darkModeIcon.style.opacity = "1";
  }, 150);

  darkModeIconMobile.style.opacity = "0";
  setTimeout(() => {
    darkModeIconMobile.classList.remove("fa-moon");
    darkModeIconMobile.classList.add("fa-sun");
    darkModeIconMobile.style.opacity = "1";
  }, 150);
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");

  localStorage.setItem("darkMode", null);

  signatureImg.style.opacity = "0";
  setTimeout(() => {
    signatureImg.src = "Signature-Transparent.png";
    signatureImg.style.opacity = "1";
  }, 150);

  darkModeIcon.style.opacity = "0";
  setTimeout(() => {
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
    darkModeIcon.style.opacity = "1";
  }, 150);

  darkModeIconMobile.style.opacity = "0";
  setTimeout(() => {
    darkModeIconMobile.classList.remove("fa-sun");
    darkModeIconMobile.classList.add("fa-moon");
    darkModeIconMobile.style.opacity = "1";
  }, 150);
};

if (darkMode === "enabled") {
  enableDarkMode();
};

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
/*     console.log("dark ON"); */
  } else {
    disableDarkMode();
/*     console.log("dark OFF"); */
  }
});

darkModeToggleMobile.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
/*     console.log("dark ON"); */
  } else {
    disableDarkMode();
/*     console.log("dark OFF"); */
  }
});