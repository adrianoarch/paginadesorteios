window.addEventListener("load", () => {
  const form = document.querySelector("#novaPessoa");
  const input = document.querySelector("#participantes");
  const lista = document.querySelector("#lista");
  const main = document.querySelector("#main");
  const boxInitial = document.querySelector("#initialbox");
  const erro = document.querySelector("#erro");
  const erroSorteio = document.querySelector("#errosorteio");
  const buttonSorteio = document.querySelector("#buttonsorteio");
  const erroReset = document.querySelector("#erroreset");
  const loadingResult = document.querySelector(".loading");

  const validaParticipante = () => {
    input.addEventListener("input", (event) => {
      erro.style.display = "none";
      erroSorteio.style.display = "none";
      erroReset.style.display = "none";
    });
  };

  validaParticipante();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pessoa = input.value.trim();

    if (!pessoa) {
      erro.style.display = "block";
      erroSorteio.style.display = "none";
      return;
    }

    const listaParticipantes = document.createElement("div");
    listaParticipantes.classList.add("participantesitem");

    const participantesAdicionados = document.createElement("p");
    participantesAdicionados.insertAdjacentHTML("beforeend", pessoa);

    const buttonremove = document.createElement("button");
    buttonremove.classList.add("removeritem");
    buttonremove.insertAdjacentHTML("beforeend", "Remover");

    listaParticipantes.appendChild(participantesAdicionados);
    listaParticipantes.appendChild(buttonremove);
    lista.appendChild(listaParticipantes);

    input.value = "";

    buttonremove.addEventListener("click", () => {
      lista.removeChild(listaParticipantes);
    });
  });

  buttonSorteio.addEventListener("click", () => {
    loadingResult.style.display = "flex";

    if (lista.childNodes.length < 2) {
      erroSorteio.style.display = "block";
      loadingResult.style.display = "none";
      return;
    }

    const vencedor = Math.floor(Math.random() * lista.childNodes.length);
    // console.log(vencedor);
    const pessoa = lista.childNodes[vencedor].firstChild.innerText;
    // console.log(pessoa);
    // console.log(lista.childNodes.length);

    const popup = document.querySelector(".popup-wrapper");
    const anuncioVencedorTexto = document.querySelector(".popup-content");

    // console.log(anuncioVencedorTexto.childNodes);
    // console.log(anuncioVencedorTexto.childNodes[3])
    // console.log(anuncioVencedorTexto.childNodes[3].childNodes[0]);

    const popupText = anuncioVencedorTexto.childNodes[3].childNodes[0];

    popupText.innerText = pessoa;

    setTimeout(() => {
      popup.style.display = "flex";
      loadingResult.style.display = "none";
    }, 3000);

    const fecharPopUp = document.querySelector(".material-icons");

    fecharPopUp.addEventListener("click", () => {
      popup.style.display = "none";
    });
  });
  const buttonLimpar = document.querySelector("#limparNomes");

  const limparTodosNomes = () => {
    lista.innerText = "";
  };

  buttonLimpar.addEventListener("click", () => {
    if (lista.childNodes.length === 0) {
      erroReset.style.display = "block";
      return;
    }
    limparTodosNomes();
  });
});
