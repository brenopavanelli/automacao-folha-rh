import logaResultado from './logaResultado.js' 

function convertCsvToJsonPromise() {
  return new Promise((resolve, reject) => {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];

    if (!file) {
      // Rejeita a promessa se não houver arquivo
      reject(new Error("Por favor, selecione um arquivo CSV primeiro!"));
      return;
    }

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        // Resolve a promessa com os dados quando a conversão for bem-sucedida
        resolve(results.data);
      },
      error: function(error) {
        // Rejeita a promessa se ocorrer um erro
        reject(error);
      }
    });
  });
}

// Crie uma função async para ser o gatilho do botão
async function iniciarConversaoEArmazenar() {
    try {
        console.log("Iniciando conversão...");

        // Use 'await' para pausar a execução e esperar a promessa ser resolvida
        const dadosConvertidos = await convertCsvToJsonPromise();

        // A linha abaixo só será executada DEPOIS que a conversão terminar
        console.log("Dados armazenados na variável 'dadosConvertidos':", dadosConvertidos);
        logaResultado(1227, dadosConvertidos);
        alert(`Conversão concluída! ${dadosConvertidos.length} linhas foram processadas.`);

        // Agora você pode usar a variável 'dadosConvertidos' aqui
        // Ex: displayDataInTable(dadosConvertidos);

    } catch (error) {
        // O bloco 'catch' captura qualquer erro que acontecer na promessa (reject)
        console.error("Erro durante a conversão:", error);
        alert(error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // 2. Encontra o botão pelo ID que você definiu no HTML
    const convertButton = document.getElementById('convertButton');

    // 3. Adiciona o "ouvinte de evento" de clique.
    // Quando o botão for clicado, a função 'iniciarConversaoEArmazenar' será executada.
    convertButton.addEventListener('click', iniciarConversaoEArmazenar);
}); 



