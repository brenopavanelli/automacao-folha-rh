const inputDeArquivo = document.querySelector('.arquivo');

inputDeArquivo.addEventListener('change', (e) => {
    const arquivo = e.target.files[0];
    const leitor = new FileReader();

    leitor.onload = (e) => {
        const dados = new Uint8Array(e.target.result);
        const planilha = XLSX.read(dados, { type: 'array' });
        console.log(planilha);
    }       
    
    leitor.readAsArrayBuffer(arquivo);


});

