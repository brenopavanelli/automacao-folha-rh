let botaoGerarLaudo = document.querySelector(".btn-resultado");
let resultado = document.querySelector(".resultado");

botaoGerarLaudo.addEventListener("click", () => {
  console.log("Botão clicado!");
  resultado.innerHTML += "<p>Resultado do laudo</p>";
});
