export default function logaResultado(linha, dadosEmJson) {
  const v001Qtde = (dadosEmJson[linha].VB001_Qtde ?? 0) / 100000;
  const v001Vlr = (dadosEmJson[linha].VB001_Valor ?? 0) / 100;
  const v019Qtde = (dadosEmJson[linha].VB019_Qtde ?? 0) / 100000;
  const v019Vlr = (dadosEmJson[linha].VB019_Valor ?? 0) / 100;
  const v020Qtde = (dadosEmJson[linha].VB020_Qtde ?? 0) / 100000;
  const v020Vlr = (dadosEmJson[linha].VB020_Valor ?? 0) / 100;
  const v029Qtde = (dadosEmJson[linha].VB029_Qtde?? 0) / 100000;
  const v029Vlr = (dadosEmJson[linha].VB029_Valor ?? 0) / 100;
  const v056Qtde = (dadosEmJson[linha].VB056_Qtde ?? 0) / 100000;
  const v056Vlr = (dadosEmJson[linha].VB056_Valo ?? 0) / 100;
  const v843Qtde = (dadosEmJson[linha].VB843_Qtde ?? 0) / 100000;
  const v843Vlr = (dadosEmJson[linha].VB843_Valor ?? 0) / 100;
  const v032Qtde = (dadosEmJson[linha].VB032_Qtde ?? 0) / 100000;
  const v032Vlr = (dadosEmJson[linha].VB032_Valor ?? 0) / 100;
  const v035Qtde = (dadosEmJson[linha].VB035_Qtde ?? 0) / 100000;
  const v035Vlr = (dadosEmJson[linha].VB035_Valor ?? 0) / 100;
  const v036Qtde = (dadosEmJson[linha].VB036_Qtde ?? 0) / 100000;
  const v036Vlr = (dadosEmJson[linha].VB036_Valor ?? 0) / 100;
  const v108Qtde = (dadosEmJson[linha].VB108_Qtde ?? 0) / 100000;
  const v108Vlr = (dadosEmJson[linha].VB108_Valor ?? 0) / 100;
  const v109Qtde = (dadosEmJson[linha].VB109_Qtde ?? 0) / 100000;
  const v109Vlr = (dadosEmJson[linha].VB109_Valor ?? 0) / 100;
  const v110Qtde = (dadosEmJson[linha].VB110_Qtde ?? 0) / 100000;
  const v110Vlr = (dadosEmJson[linha].VB110_Valor ?? 0) / 100;
  const v111Qtde = (dadosEmJson[linha].VB111_Qtde ?? 0) / 100000;
  const v111Vlr = (dadosEmJson[linha].VB111_Valor ?? 0) / 100;
  const v468Qtde = (dadosEmJson[linha].VB468_Qtde ?? 0) / 100000;
  const v468Vlr = (dadosEmJson[linha].VB468_Valor ?? 0) / 100;
  const v469Qtde = (dadosEmJson[linha].VB469_Qtde ?? 0) / 100000;
  const v469Vlr = (dadosEmJson[linha].VB469_Valor ?? 0) / 100;
  const v476Qtde = (dadosEmJson[linha].VB476_Qtde ?? 0) / 100000;
  const v476Vlr = (dadosEmJson[linha].VB476_Valor ?? 0) / 100;
  const v479Qtde = (dadosEmJson[linha].VB479_Qtde?? 0) / 100000;
  const v479Vlr = (dadosEmJson[linha].VB479_Valor ?? 0) / 100;
  const v480Qtde = (dadosEmJson[linha].VB480_Qtde ?? 0) / 100000;
  const v480Vlr = (dadosEmJson[linha].VB480_Valor ?? 0) / 100;
  const v827Qtde = (dadosEmJson[linha].VB827_Qtde ?? 0) / 100000;
  const v827Vlr = (dadosEmJson[linha].VB827_Valor ?? 0) / 100;
  const v866Qtde = (dadosEmJson[linha].VB866_Qtde ?? 0) / 100000;
  const v866Vlr = (dadosEmJson[linha].VB866_Valor ?? 0) / 100;
  const v867Qtde = (dadosEmJson[linha].VB867_Qtde ?? 0) / 100000;
  const v867Vlr = (dadosEmJson[linha].VB867_Valor ?? 0) / 100;
  const v868Qtde = (dadosEmJson[linha].VB868_Qtde ?? 0) / 100000;
  const v868Vlr = (dadosEmJson[linha].VB868_Valor ?? 0) / 100;
  const v869Qtde = (dadosEmJson[linha].VB869_Qtde ?? 0) / 100000;
  const v869Vlr = (dadosEmJson[linha].VB869_Valor ?? 0) / 100;
  const v1500Qtde = (dadosEmJson[linha].VB1500_Qtde ?? 0) / 100000;
  const v1500Vlr = (dadosEmJson[linha].VB1500_Valor ?? 0) / 100;
  const v1600Qtde = (dadosEmJson[linha].VB1600_Qtde ?? 0) / 100000;
  const v1600Vlr = (dadosEmJson[linha].VB1600_Valor ?? 0) / 100;
  const v1601Qtde = (dadosEmJson[linha].VB1601_Qtde ?? 0) / 100000;
  const v1601Vlr = (dadosEmJson[linha].VB1601_Valor ?? 0) / 100;
  const v1603Qtde = (dadosEmJson[linha].VB1603_Qtde ?? 0) / 100000;
  const v1603Vlr = (dadosEmJson[linha].VB1603_Valor ?? 0) / 100;
  const v1606Qtde = (dadosEmJson[linha].VB1606_Qtde ?? 0) / 100000;
  const v1606Vlr = (dadosEmJson[linha].VB1606_Valor ?? 0) / 100;
  const v1607Qtde = (dadosEmJson[linha].VB1607_Qtde ?? 0) / 100000;
  const v1607Vlr = (dadosEmJson[linha].VB1607_Valor ?? 0) / 100;

  const faltaDiaTributadaQtde = (dadosEmJson[linha].VB171_Qtde ?? 0) / 100000;
  const faltaDiaTributadaVlr = (dadosEmJson[linha].VB171_Valor ?? 0) / 100;
  const faltaHoraTributadaQtde = (dadosEmJson[linha].VB172_Qtde ?? 0) / 100000;
  const faltaHoraTributadaVlr = (dadosEmJson[linha].VB172_Valor ?? 0) / 100;
  const faltaDiaNaoTributadaQtde = (dadosEmJson[linha].VB471_Qtde ?? 0) / 100000;
  const faltaDiaNaoTributadaVlr = (dadosEmJson[linha].VB471_Valor ?? 0) / 100;
  const faltaHoraNaoTributadaQtde = (dadosEmJson[linha].VB472_Qtde ?? 0) / 100000;
  const faltaHoraNaoTributadaVlr = (dadosEmJson[linha].VB472_Valor ?? 0) / 100;
  const dsrTributadoQtde = (dadosEmJson[linha].VB504_Qtde ?? 0) / 100000;
  const dsrTributadoVlr = (dadosEmJson[linha].VB504_Valor ?? 0) / 100;
  const dsrNaoTributadoQtde = (dadosEmJson[linha].VB604_Qtde ?? 0) / 100000;
  const dsrNaoTributadoVlr = (dadosEmJson[linha].VB604_Valor ?? 0) / 100;
  const faltaDiaMesAnteriorQtde = (dadosEmJson[linha].VB871_Qtde ?? 0) / 100000;
  const faltaDiaMesAnteriorVlr = (dadosEmJson[linha].VB871_Valor ?? 0) / 100;
  const faltaHoraMesAnteriorQtde = (dadosEmJson[linha].VB872_Qtde ?? 0) / 100000;
  const faltaHoraMesAnteriorVlr = (dadosEmJson[linha].VB872_Valor ?? 0) / 100;
  const dsrMesAnteriorQtde = (dadosEmJson[linha].VB510_Qtde ?? 0) / 100000;
  const dsrMesAnteriorVlr = (dadosEmJson[linha].VB510_Valor ?? 0) / 100;


  const nome = dadosEmJson[linha].Nome_Funcionario;
  const matricula = dadosEmJson[linha].Matricula;
  const codigoRegimeTrabalho = dadosEmJson[linha].CdRegTrab;
  const diasDeLicenca = v1500Qtde + v1600Qtde + v1601Qtde + v1603Qtde + v1606Qtde + v1607Qtde;
  const cargaSuplementar = v468Qtde + v469Qtde + v476Qtde + v479Qtde + v480Qtde + v827Qtde;
  const horasMensais = (dadosEmJson[linha].HrMen + cargaSuplementar) ?? 0;
  const diasTrabalhados = v001Qtde + diasDeLicenca;

  const salario = v001Vlr;
  const insalubridade = v019Vlr;
  const subsidio = v020Vlr;
  const difPiso = (v029Vlr + v056Vlr + v843Vlr);
  const periculosidade = v032Vlr;
  const quinquenio = v035Vlr;
  const sextaParte = v036Vlr;
  const adicionalDeCurso = (v108Vlr + v109Vlr + v110Vlr + v111Vlr);
  const ccs = (v468Vlr + v469Vlr + v476Vlr + v479Vlr + v480Vlr + v827Vlr);
  const fgs = (v866Vlr + v867Vlr + v868Vlr + v869Vlr);
  const licencas = (v1500Vlr + v1600Vlr + v1601Vlr + v1603Vlr + v1606Vlr + v1607Vlr);

  let diaTributado = '';
  let diaNaoTributado = '';
  let horaTributada = '';
  let horaNaoTributada = '';

  if (codigoRegimeTrabalho === 2 || codigoRegimeTrabalho === 9) {
    const diaTributado = (salario + insalubridade + subsidio + difPiso + periculosidade + quinquenio + sextaParte + adicionalDeCurso + ccs + fgs + licencas) / diasTrabalhados;
    diaNaoTributado = '';
    horaTributada = diaTributado * diasTrabalhados / horasMensais;
    horaNaoTributada = '';
  } else if (codigoRegimeTrabalho === 3 || codigoRegimeTrabalho === 11) {
    diaTributado = (salario + quinquenio + sextaParte + subsidio + difPiso + licencas) / diasTrabalhados;
    diaNaoTributado = (insalubridade + periculosidade  + adicionalDeCurso + ccs + fgs) / diasTrabalhados;
    horaTributada = diaTributado * diasTrabalhados / horasMensais;
    horaNaoTributada = diaNaoTributado * diasTrabalhados / horasMensais;
  }

  const faltasDiaTributadoCalcula = diaTributado * faltaDiaTributadaQtde;
  const faltasHoraTributadoCalcula = horaTributada * faltaHoraTributadaQtde;
  const faltasDiaNaoTributadoCalcula = diaNaoTributado * faltaDiaNaoTributadaQtde;
  const faltasHoraNaoTributadoCalcula = horaNaoTributada * faltaHoraNaoTributadaQtde;
  const faltasDiaMesAnteriorCalcula = diaTributado * faltaDiaMesAnteriorQtde;
  const faltasHoraMesAnteriorCalcula = horaTributada * faltaHoraMesAnteriorQtde;
  const dsrTributadoCalcula = diaTributado * dsrTributadoQtde;
  const dsrNaoTributadoCalcula = diaNaoTributado * dsrNaoTributadoQtde
  const dsrMesAnteriorCalcula = diaTributado * dsrMesAnteriorQtde;

  const totalDeProventos = salario + insalubridade + subsidio + difPiso + periculosidade + quinquenio + sextaParte + adicionalDeCurso + ccs + fgs + licencas

  console.log(`Nome: ${nome}`);
  console.log(`Matricula: ${matricula}`);
  console.log(`Código do Regime de Trabalho: ${codigoRegimeTrabalho}`);
  console.log(`Dias trabalhados: ${diasTrabalhados}`);
  console.log(`Horas mensais: ${horasMensais}h`);
  console.log(`Salário: R$ ${salario}`);
  console.log(' ')
  console.log(`Insalubridade: R$ ${insalubridade}`);
  console.log(`Subsidio: R$ ${subsidio}`);
  console.log(`Dif. Piso: R$ ${difPiso}`);
  console.log(`Periculosidade: R$ ${periculosidade}`);
  console.log(`Quinquênio: R$ ${quinquenio}`);
  console.log(`Sexta Parte: R$ ${sextaParte}`);
  console.log(`Adicional de Curso: R$ ${adicionalDeCurso}`);
  console.log(`CCSP: R$ ${ccs}`);
  console.log(`FGs: R$ ${fgs}`);
  console.log(`Licenças: R$ ${licencas}`);
  console.log(' ')
  console.log(`Dia Tributado: R$ ${diaTributado.toFixed(2)}`)
  console.log(`Dia Não Tributado: R$ ${diaNaoTributado.toFixed(2)}`)
  console.log(`Hora Tributada: R$ ${horaTributada.toFixed(2)}`)
  console.log(`Hora Não Tributada: R$ ${horaNaoTributada.toFixed(2)}`)
  console.log(' ')
  console.log('--- Faltas ---');
  console.log(`DT: ${faltaDiaTributadaQtde} dias R$ ${faltaDiaTributadaVlr}`);
  console.log(`HT: ${faltaHoraTributadaQtde} horas R$ ${faltaHoraTributadaVlr}`);
  console.log(`DNT: ${faltaDiaNaoTributadaQtde} dias R$ ${faltaDiaNaoTributadaVlr}`);
  console.log(`HNT: ${faltaHoraNaoTributadaQtde} horas R$ ${faltaHoraNaoTributadaVlr}`);
  console.log(`DMA: ${faltaDiaMesAnteriorQtde} dias R$ ${faltaDiaMesAnteriorVlr}`);
  console.log(`HMA: ${faltaHoraMesAnteriorQtde} horas R$ ${faltaHoraMesAnteriorVlr}`);
  console.log(' ')
  console.log('--- DSR ---');
  console.log(`DSRT: ${dsrTributadoQtde} dias R$ ${dsrTributadoVlr}`);
  console.log(`DSRNT: ${dsrNaoTributadoQtde} dias R$ ${dsrNaoTributadoVlr}`);
  console.log(`DSRMA: ${dsrMesAnteriorQtde} dias R$ ${dsrMesAnteriorVlr}`)
  console.log(' ')
  console.log('----- Conferência -----');
  console.log('--- Faltas ---');
  console.log(`DT: R$ ${faltasDiaTributadoCalcula.toFixed(2)}`);
  console.log(`HT: R$ ${faltasHoraTributadoCalcula.toFixed(2)}`);
  console.log(`DNT: R$ ${faltasDiaNaoTributadoCalcula.toFixed(2)}`);
  console.log(`HNT: R$ ${faltasHoraNaoTributadoCalcula.toFixed(2)}`);
  console.log(`DMA: R$ ${faltasDiaMesAnteriorCalcula.toFixed(2)}`);
  console.log(`HMA: R$ ${faltasHoraMesAnteriorCalcula.toFixed(2)}`);
  console.log(' ')
  console.log('--- DSR ---');
  console.log(`DSRT: R$ ${dsrTributadoCalcula.toFixed(2)}`);
  console.log(`DSRNT: R$ ${dsrNaoTributadoCalcula.toFixed(2)}`);
  console.log(`DSRMA: R$ ${dsrMesAnteriorCalcula.toFixed(2)}`);

  console.log(' ')
  console.log(`Total de Proventos: R$ ${totalDeProventos.toFixed(2)}`);
  console.log(`------------------------------------`);
}