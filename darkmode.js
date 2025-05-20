/* let darkMode = localStorage.getItem("darkMode");
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
    signatureImg.src = "LOGO-WHITE.png";
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
    signatureImg.src = "LOGO-BLACK.png";
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
  } else {
    disableDarkMode();
  }
});

darkModeToggleMobile.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
 */


document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.querySelector("#dark-mode-toggle");
  const darkModeToggleMobile = document.querySelector("#dark-mode-toggle-mobile");
  const darkModeIcon = document.querySelector("#dark-mode-icon");
  const darkModeIconMobile = document.querySelector("#dark-mode-icon-mobile");
  const signatureImg = document.querySelector("#signature-image");

  let darkMode = localStorage.getItem("darkMode");

  const setIcon = (iconElement, toSun) => {
    if (!iconElement) return;
    iconElement.style.opacity = "0";
    setTimeout(() => {
      iconElement.classList.remove(toSun ? "fa-moon" : "fa-sun");
      iconElement.classList.add(toSun ? "fa-sun" : "fa-moon");
      iconElement.style.opacity = "1";
    }, 150);
  };

  const updateSignatureImage = (src) => {
    if (!signatureImg) return;
    signatureImg.style.opacity = "0";
    setTimeout(() => {
      signatureImg.src = src;
      signatureImg.style.opacity = "1";
    }, 150);
  };

  const enableDarkMode = () => {
    document.documentElement.classList.add("darkmode");
    console.log("DARK");
    localStorage.setItem("darkMode", "enabled");
    updateSignatureImage("LOGO-WHITE.png");
    setIcon(darkModeIcon, true);
    setIcon(darkModeIconMobile, true);
  };

  const disableDarkMode = () => {
    document.documentElement.classList.remove("darkmode");
    console.log("BRIGHT");
    localStorage.setItem("darkMode", null);
    updateSignatureImage("LOGO-BLACK.png");
    setIcon(darkModeIcon, false);
    setIcon(darkModeIconMobile, false);
  };

  const toggleDarkMode = () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  };

  // Initialize dark mode state on page load
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  // Event listeners
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }

  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener("click", toggleDarkMode);
  }
});
