import logaResultado from "./buscaDados.js"

const botaoGerarLaudo = document.querySelector(".btn-resultado");
const resultado = document.querySelector(".resultado");
const linhaDoFuncionario = document.querySelector("#linha")

botaoGerarLaudo.addEventListener("click", () => {
  console.log("Botão clicado!");
  resultado.innerHTML += "<p>Resultado do laudo</p>";
});

const inputDeArquivo = document.querySelector('.arquivo');

inputDeArquivo.addEventListener('change', (e) => {
    const arquivo = e.target.files[0];
    const leitor = new FileReader();

    leitor.onload = (e) => {
        const dados = new Uint8Array(e.target.result);
        const planilha = XLSX.read(dados, { type: 'array' });
        const dadosEmJson = XLSX.utils.sheet_to_json(planilha.Sheets[planilha.SheetNames[0]]);
      
        logaResultado(linhaDoFuncionario.value-2, dadosEmJson);
    }       

    leitor.readAsArrayBuffer(arquivo);

  
});
