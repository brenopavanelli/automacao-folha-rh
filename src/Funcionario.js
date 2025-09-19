function converterParaNumero(valor) {
  // Se o valor for nulo ou indefinido, retorna 0
  if (valor == null) {
    return 0;
  }
  // Converte para string, substitui a vírgula por ponto, e então converte para número
  return parseFloat(String(valor).replace(',', '.'));
}

class Funcionario {
    nome;
    matricula;
    codigoRegimeTrabalho;
    diasDeLicenca;
    cargaSuplementar;
    horasMensais;
    diasTrabalhados;

    vb001;
    vb019;
    vb020;
    vb029;
    vb056;
    vb843;
    vb032;
    vb035;
    vb036;
    vb867;
    vb108;
    vb109;
    vb110;
    vb111;
    vb468;
    vb469;
    vb476;
    vb479;
    vb480;
    vb827;
    vb866;
    vb868;
    vb869;
    vb1500;
    vb1600;
    vb1601;
    vb1603;
    vb1606;
    vb1607;

    salario;
    insalubridade;
    subsidio;
    difPiso;
    periculosidade;
    quinquenio;
    sextaParte;
    adicionalDeCurso;
    ccs;
    fgs;
    licencas;

    diaTributado;
    diaNaoTributado;
    horaTributada;
    horaNaoTributada;
    
    faltasDiaTributado;
    faltasHoraTributado;
    faltasDiaNaoTributado;
    faltasHoraNaoTributado;
    faltasDiaMesAnterior;
    faltasHoraMesAnterior;
    dsrTributado;
    dsrNaoTributado;
    dsrMesAnterior;

    totalDeProventos;

    constructor(dadosEmJson, linha) {
        this.nome = dadosEmJson[linha].Nome_Funcionario;
        this.matricula = dadosEmJson[linha].Matricula;
        this.codigoRegimeTrabalho = dadosEmJson[linha].CdRegTrab;

        this.vb001 = { 
            qtde: converterParaNumero(dadosEmJson[linha].VB001_Qtde), 
            vlr: converterParaNumero(dadosEmJson[linha].VB001_Valor) 
        };
        this.vb019 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB019_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB019_Valor)
        }
        this.vb020 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB020_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB020_Valor)
        }
        this.vb029 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB029_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB029_Valor)
        }
        this.
        
        this.diasDeLicenca = 0;
        this.cargaSuplementar = 0;
        this.horasMensais = 0;

        

        
    }

    
}