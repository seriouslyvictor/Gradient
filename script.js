const bodyEl = document.querySelector("body");
const toggleEl = document.querySelector(".icone--tema");

toggleEl.addEventListener("click", trocarTema);

function trocarTema() {
  bodyEl.classList.toggle("light");
  toggleEl.src = toggleEl.src.includes("moon") ? "img/icon-sun.svg" : "img/icon-moon.svg";
}

function atualizarIcone(lightMode) {
  toggleEl.src = lightMode ? "img/icon-sun.svg" : "img/icon-moon.svg";
}

function trocarTimeAuto() {
  let hora = new Date().getHours();
  let lightMode = hora >= 6 && hora < 18;
  console.log(
    `Disparei a função automática às ${hora} horas e ${new Date().getMinutes()} minutos`
  );
  lightMode ? bodyEl.classList.add("light") : bodyEl.classList.remove("light");
  atualizarIcone(lightMode);
}

trocarTimeAuto();
setInterval(trocarTimeAuto, 60000);
