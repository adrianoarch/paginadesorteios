window.addEventListener("load", () => {
  const form = document.querySelector("#novaPessoa");
  const input = document.querySelector("#participantes");
  const lista = document.querySelector("#lista");
  const main = document.querySelector("#main");
  const boxInitial = document.querySelector("#initialbox")
  const erro = document.querySelector("#erro");
  const buttonSorteio = document.querySelector("#buttonsorteio");
  const loadingResult = document.querySelector(".loading");


  const validaParticipante = () => {
    input.addEventListener("input", (event) => {
      erro.style.display = "none";
    });
  };

  validaParticipante();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pessoa = input.value;

    if (!pessoa) {
      erro.style.display = "block";
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

    const vencedor = Math.floor(Math.random() * lista.childNodes.length);
    console.log(vencedor);
    const pessoa = lista.childNodes[vencedor].firstChild.innerText;
    console.log(pessoa);

    const popup = document.querySelector(".popup-wrapper")
    const anuncioVencedorTexto = document.querySelector(".popup-content")

    console.log(anuncioVencedorTexto.childNodes);
    console.log(anuncioVencedorTexto.childNodes[3])
    console.log(anuncioVencedorTexto.childNodes[3].childNodes[0]);

    const popupText = anuncioVencedorTexto.childNodes[3].childNodes[0];

    popupText.innerText = pessoa

    setTimeout(() => {
      popup.style.display='flex';
      loadingResult.style.display="none";
  },
   3000)

   const fecharPopUp = document.querySelector(".material-icons")

   fecharPopUp.addEventListener('click', () => {
     popup.style.display='none'
   })
  });

});