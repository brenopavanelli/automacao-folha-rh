// Passo 1: Importar as bibliotecas necessárias
// A biblioteca 'xlsx' é o próprio SheetJS
// A biblioteca 'fs' (File System) é nativa do Node.js e serve para ler e escrever arquivos no computador
import XLSX from 'xlsx';
import fs from 'fs';

console.log("Iniciando o script de processamento...");

// --- LEITURA DO ARQUIVO DE ENTRADA ---
const caminhoInput = 'FaltasCSV.csv';
console.log(`Lendo o arquivo ${caminhoInput}`);
console.log(`------------------------------------`);

// Usamos o 'fs' para ler o arquivo e o SheetJS para interpretar os dados
const buffer = fs.readFileSync(caminhoInput);
const workbook = XLSX.read(buffer, { type: 'buffer' });

// --- MANIPULAÇÃO DOS DADOS ---
// Pega o nome da primeira aba
const nomeDaPrimeiraAba = workbook.SheetNames[0];
const worksheet = workbook.Sheets[nomeDaPrimeiraAba];

// Converte a planilha para JSON, o formato mais fácil de trabalhar em JS
const dadosEmJson = XLSX.utils.sheet_to_json(worksheet);

function logaResultado(linha) {
  const v001Qtde = (dadosEmJson[linha].VB001_Qtde/100000) ?? 0;
  const v001Vlr = dadosEmJson[linha].VB001_Valor ?? 0;
  const v019Qtde = dadosEmJson[linha].VB019_Qtde ?? 0;
  const v019Vlr = dadosEmJson[linha].VB019_Valor ?? 0;
  const v020Qtde = dadosEmJson[linha].VB020_Qtde ?? 0;
  const v020Vlr = dadosEmJson[linha].VB020_Valor ?? 0;
  const v029Qtde = dadosEmJson[linha].VB029_Qtde ?? 0;
  const v029Vlr = dadosEmJson[linha].VB029_Valor ?? 0;
  const v056Qtde = dadosEmJson[linha].VB056_Qtde ?? 0;
  const v056Vlr = dadosEmJson[linha].VB056_Valor ?? 0;
  const v843Vlr = dadosEmJson[linha].VB843_Valor ?? 0;
  const v032Vlr = dadosEmJson[linha].VB032_Valor ?? 0;
  const v035Vlr = dadosEmJson[linha].VB035_Valor ?? 0;
  const v036Vlr = dadosEmJson[linha].VB036_Valor ?? 0;
  const v108Vlr = dadosEmJson[linha].VB108_Valor ?? 0;
  const v109Vlr = dadosEmJson[linha].VB109_Valor ?? 0;
  const v110Vlr = dadosEmJson[linha].VB110_Valor ?? 0;
  const v111Vlr = dadosEmJson[linha].VB111_Valor ?? 0;
  const v468Vlr = dadosEmJson[linha].VB468_Valor ?? 0;
  const v469Vlr = dadosEmJson[linha].VB469_Valor ?? 0;
  const v476Vlr = dadosEmJson[linha].VB476_Valor ?? 0;
  const v479Vlr = dadosEmJson[linha].VB479_Valor ?? 0;
  const v480Vlr = dadosEmJson[linha].VB480_Valor ?? 0;
  const v827Vlr = dadosEmJson[linha].VB827_Valor ?? 0;
  const v866Vlr = dadosEmJson[linha].VB866_Valor ?? 0;
  const v867Vlr = dadosEmJson[linha].VB867_Valor ?? 0;
  const v868Vlr = dadosEmJson[linha].VB868_Valor ?? 0;
  const v869Vlr = dadosEmJson[linha].VB869_Valor ?? 0;
  const v1500Vlr = dadosEmJson[linha].VB1500_Valor ?? 0;
  const v1600Vlr = dadosEmJson[linha].VB1600_Valor ?? 0;
  const v1601Vlr = dadosEmJson[linha].VB1601_Valor ?? 0;
  const v1603Vlr = dadosEmJson[linha].VB1603_Valor ?? 0;
  const v1606Vlr = dadosEmJson[linha].VB1606_Valor ?? 0;
  const v1607Vlr = dadosEmJson[linha].VB1607_Valor ?? 0;

  const nome = dadosEmJson[linha].Nome_Funcionario;
  const matricula = dadosEmJson[linha].Matricula;
  const codigoRegimeTrabalho = dadosEmJson[linha].CdRegTrab;
  const diasDeLicenca = (dadosEmJson[linha].VB1500_Qtde + dadosEmJson[linha].VB1600_Qtde + dadosEmJson[linha].VB1601_Qtde + dadosEmJson[linha].VB1603_Qtde + dadosEmJson[linha].VB1606_Qtde + dadosEmJson[linha].VB1607_Qtde) ?? 0;
  const cargaSuplementar = (dadosEmJson[linha].VB468_Qtde + dadosEmJson[linha].VB469_Qtde + dadosEmJson[linha].VB476_Qtde + dadosEmJson[linha].VB479_Qtde + dadosEmJson[linha].VB480_Qtde + dadosEmJson[linha].VB827_Qtde) ?? 0;
  const horasMensais = (dadosEmJson[linha].HrMen + cargaSuplementar) ?? 0;
  const diasTrabalhados = ((dadosEmJson[linha].VB001_Qtde + diasDeLicenca)/100000) ;

  const salario = v001Vlr/100;
  const insalubridade = v019Vlr/100;
  const subsidio = v020Vlr/100;
  const difPiso = (v029Vlr + v056Vlr + v843Vlr)/100;
  const periculosidade = v032Vlr/100;
  const quinquenio = v035Vlr/100;
  const sextaParte = v036Vlr/100;
  const adicionalDeCurso = (v108Vlr + v109Vlr + v110Vlr + v111Vlr)/100;
  const ccs = (v468Vlr + v469Vlr + v476Vlr + v479Vlr + v480Vlr + v827Vlr)/100;
  const fgs = (v866Vlr + v867Vlr + v868Vlr + v869Vlr)/100;
  const licenca = (v1500Vlr + v1600Vlr + v1601Vlr + v1603Vlr + v1606Vlr + v1607Vlr)/100;

  const totalDeProventos = salario + insalubridade + subsidio + difPiso + periculosidade + quinquenio + sextaParte + adicionalDeCurso + ccs + fgs + licenca

  console.log(`Nome: ${nome}`);
  console.log(`Matricula: ${matricula}`);
  console.log(`Código do Regime de Trabalho: ${codigoRegimeTrabalho}`);
  console.log(`Dias trabalhados: ${diasTrabalhados}`);
  console.log(`Horas mensais: ${horasMensais}h`);
  console.log(`Salário: R$ ${salario}`);
  console.log(`Insalubridade: R$ ${insalubridade}`);
  console.log(`Subsidio: R$ ${subsidio}`);
  console.log(`Dif. Piso: R$ ${difPiso}`);
  console.log(`Periculosidade: R$ ${periculosidade}`);
  console.log(`Quinquênio: R$ ${quinquenio}`);
  console.log(`Sexta Parte: R$ ${sextaParte}`);
  console.log(`Adicional de Curso: R$ ${adicionalDeCurso}`);
  console.log(`CCSP: R$ ${ccs}`);
  console.log(`FGs: R$ ${fgs}`);
  console.log(`Licenças: R$ ${licenca}`);
  console.log(' ')
  console.log(`Total de Proventos: R$ ${totalDeProventos}`);
  console.log(`------------------------------------`);
}

logaResultado(1956)


// for (let linha in dadosEmJson) {
//   logaResultado(linha)
// }

// console.log(`Nome: ${dadosEmJson[2].Nome_Funcionario}`);
// console.log(`Matricula: ${dadosEmJson[2].Matricula}`);
// console.log(`Dias trabalhados: ${dadosEmJson[2].VB001_Qtde/100000}`);
// console.log(`Salário: ${dadosEmJson[2].VB001_Valor/100}`);
// console.log(`------------------------------------------------`);
// console.log(`Nome: ${dadosEmJson[3].Nome_Funcionario}`);
// console.log(`Matricula: ${dadosEmJson[3].Matricula}`);
// console.log(`Dias trabalhados: ${dadosEmJson[3].VB001_Qtde/100000}`);
// console.log(`Salário: ${dadosEmJson[3].VB001_Valor/100}`);


// console.log((dadosEmJson[2].VB001_Valor/100) + (dadosEmJson[3].VB001_Valor/100))