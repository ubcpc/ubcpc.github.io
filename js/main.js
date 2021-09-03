document.addEventListener("DOMContentLoaded", function(){
  var toggle = document.getElementById("scheme-toggle");
  var avatar = document.getElementById("avatar");

  var scheme = "light";
  var savedScheme = localStorage.getItem("scheme");

  var container = document.getElementsByTagName("html")[0];
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    scheme = "dark";
  }

  if(savedScheme) {
    scheme = savedScheme;
  }

  if(scheme == "dark") {
    darkscheme(toggle, container, avatar);
  } else {
    lightscheme(toggle, container, avatar);
  }

  toggle.addEventListener("click", () => {
    if (toggle.className === "light") {
      darkscheme(toggle, container, avatar);
    } else if (toggle.className === "dark") {
      lightscheme(toggle, container, avatar);
    }
  });
});

function darkscheme(toggle, container, avatar) {
  localStorage.setItem("scheme", "dark");
  toggle.innerHTML = feather.icons.sun.toSvg();
  toggle.className = "dark";
  container.className = "dark";
  avatar.src = "/logo-white.png";
}

function lightscheme(toggle, container, avatar) {
  localStorage.setItem("scheme", "light");
  toggle.innerHTML = feather.icons.moon.toSvg();
  toggle.className = "light";
  container.className = "";
  avatar.src = "/logo-main.png";
}
