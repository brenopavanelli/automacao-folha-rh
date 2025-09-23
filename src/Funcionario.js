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
        this.vb056 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB056_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB056_Valor)
        }
        this.vb843 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB843_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB843_Valor)
        }
        this.vb032 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB032_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB032_Valor)
        }
        this.vb035 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB035_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB035_Valor)
        }
        this.vb036 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB036_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB036_Valor)
        }
        this.vb867 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB867_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB867_Valor)
        }
        this.vb108 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB108_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB108_Valor)
        }
        this.vb109 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB109_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB109_Valor)
        }
        this.vb110 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB110_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB110_Valor)
        }
        this.vb111 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB111_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB111_Valor)
        }
        this.vb468 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB468_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB468_Valor)
        }
        this.vb469 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB469_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB469_Valor)
        }
        this.vb476 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB476_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB476_Valor)
        }
        this.vb479 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB479_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB479_Valor)
        }
        this.vb480 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB480_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB480_Valor)
        }
        this.vb827 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB827_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB827_Valor)
        }
        this.vb866 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB866_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB866_Valor)
        }
        this.vb868 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB868_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB868_Valor)
        }
        this.vb869 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB869_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB869_Valor)
        }
        this.vb1500 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB1500_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB1500_Valor)
        }
        this.vb1600 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB1600_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB1600_Valor)
        }
        this.vb1601 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB1601_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB1601_Valor)
        }
        this.vb1603 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB1603_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB1603_Valor)
        }
        this.vb1606 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB1606_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB1606_Valor)
        }
        this.vb1607 = {
            qtde: converterParaNumero(dadosEmJson[linha].VB1607_Qtde),
            vlr: converterParaNumero(dadosEmJson[linha].VB1607_Valor)
        }
        
        
        this.diasDeLicenca = 0;
        this.cargaSuplementar = 0;
        this.horasMensais = 0;

        

        
    }

    
}