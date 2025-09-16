export default function convertCsvToJson() {
  const fileInput = document.getElementById('csvFileInput');
  const jsonOutput = document.getElementById('jsonOutput');
  const file = fileInput.files[0]; // Obtém o primeiro arquivo selecionado

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const csvContent = e.target.result;
      const lines = csvContent.split('\n'); // Divide o conteúdo do arquivo em linhas
      const result = [];
      const headers = lines[0].split(','); // Assume que a primeira linha é o cabeçalho

      for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j].trim()] = currentLine[j] ? currentLine[j].trim() : '';
        }
        result.push(obj);
      }

      jsonOutput.textContent = JSON.stringify(result, null, 2);
    };

    reader.onerror = function(err) {
      console.error("Erro ao ler o arquivo:", err);
    };

    reader.readAsText(file); // Lê o arquivo como texto
  } else {
    jsonOutput.textContent = "Por favor, selecione um arquivo CSV.";
  }
}