window.addEventListener("load", () => {
  const form = document.querySelector("#novaPessoa");
  const input = document.querySelector("#participantes");
  const lista = document.querySelector("#lista");
  const main = document.querySelector("#main");
  const erro = document.querySelector("#erro");
  const buttonSorteio = document.querySelector("#buttonsorteio");

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
    
    console.log("O tamanho é " + lista.childNodes.length);
    console.log(listaParticipantes.childNodes[0].textContent);

  });
  
  buttonSorteio.addEventListener("click", () => {
  const vencedor = Math.floor(Math.random() * lista.childNodes.length);
    console.log(vencedor);
  const pessoa = lista.childNodes[vencedor].firstChild.innerText;
  console.log(pessoa);
});
    
});