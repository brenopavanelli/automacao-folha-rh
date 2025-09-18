function converterParaNumero(valor) {
  if (valor == null) {
    return 0;
  }
  return parseFloat(String(valor).replace(',', '.'));
}

export default function computaFuncionario(linha, dadosEmJson) {
  const v001Qtde = converterParaNumero(dadosEmJson[linha].VB001_Qtde);
  const v001Vlr = converterParaNumero(dadosEmJson[linha].VB001_Valor);
  const v019Qtde = converterParaNumero(dadosEmJson[linha].VB019_Qtde);
  const v019Vlr = converterParaNumero(dadosEmJson[linha].VB019_Valor);
  const v020Qtde = converterParaNumero(dadosEmJson[linha].VB020_Qtde);
  const v020Vlr = converterParaNumero(dadosEmJson[linha].VB020_Valor);
  const v029Qtde = converterParaNumero(dadosEmJson[linha].VB029_Qtde);
  const v029Vlr = converterParaNumero(dadosEmJson[linha].VB029_Valor);
  const v056Qtde = converterParaNumero(dadosEmJson[linha].VB056_Qtde);
  const v056Vlr = converterParaNumero(dadosEmJson[linha].VB056_Valor);
  const v843Qtde = converterParaNumero(dadosEmJson[linha].VB843_Qtde);
  const v843Vlr = converterParaNumero(dadosEmJson[linha].VB843_Valor);
  const v032Qtde = converterParaNumero(dadosEmJson[linha].VB032_Qtde);
  const v032Vlr = converterParaNumero(dadosEmJson[linha].VB032_Valor);
  const v035Qtde = converterParaNumero(dadosEmJson[linha].VB035_Qtde);
  const v035Vlr = converterParaNumero(dadosEmJson[linha].VB035_Valor);
  const v036Qtde = converterParaNumero(dadosEmJson[linha].VB036_Qtde);
  const v036Vlr = converterParaNumero(dadosEmJson[linha].VB036_Valor);
  const v867Qtde = converterParaNumero(dadosEmJson[linha].VB867_Qtde);
  const v867Vlr = converterParaNumero(dadosEmJson[linha].VB867_Valor);

  const v108Qtde = converterParaNumero(dadosEmJson[linha].VB108_Qtde);
  const v108Vlr = converterParaNumero(dadosEmJson[linha].VB108_Valor);
  const v109Qtde = converterParaNumero(dadosEmJson[linha].VB109_Qtde);
  const v109Vlr = converterParaNumero(dadosEmJson[linha].VB109_Valor);
  const v110Qtde = converterParaNumero(dadosEmJson[linha].VB110_Qtde);
  const v110Vlr = converterParaNumero(dadosEmJson[linha].VB110_Valor);
  const v111Qtde = converterParaNumero(dadosEmJson[linha].VB111_Qtde);
  const v111Vlr = converterParaNumero(dadosEmJson[linha].VB111_Valor);
  const v468Qtde = converterParaNumero(dadosEmJson[linha].VB468_Qtde);
  const v468Vlr = converterParaNumero(dadosEmJson[linha].VB468_Valor);
  const v469Qtde = converterParaNumero(dadosEmJson[linha].VB469_Qtde);
  const v469Vlr = converterParaNumero(dadosEmJson[linha].VB469_Valor);
  const v476Qtde = converterParaNumero(dadosEmJson[linha].VB476_Qtde);
  const v476Vlr = converterParaNumero(dadosEmJson[linha].VB476_Valor);
  const v479Qtde = converterParaNumero(dadosEmJson[linha].VB479_Qtde);
  const v479Vlr = converterParaNumero(dadosEmJson[linha].VB479_Valor);
  const v480Qtde = converterParaNumero(dadosEmJson[linha].VB480_Qtde);
  const v480Vlr = converterParaNumero(dadosEmJson[linha].VB480_Valor);
  const v827Qtde = converterParaNumero(dadosEmJson[linha].VB827_Qtde);
  const v827Vlr = converterParaNumero(dadosEmJson[linha].VB827_Valor);
  const v866Qtde = converterParaNumero(dadosEmJson[linha].VB866_Qtde);
  const v866Vlr = converterParaNumero(dadosEmJson[linha].VB866_Valor);
  const v868Qtde = converterParaNumero(dadosEmJson[linha].VB868_Qtde);
  const v868Vlr = converterParaNumero(dadosEmJson[linha].VB868_Valor);
  const v869Qtde = converterParaNumero(dadosEmJson[linha].VB869_Qtde);
  const v869Vlr = converterParaNumero(dadosEmJson[linha].VB869_Valor);
  const v1500Qtde = converterParaNumero(dadosEmJson[linha].VB1500_Qtde);
  const v1500Vlr = converterParaNumero(dadosEmJson[linha].VB1500_Valor);
  const v1600Qtde = converterParaNumero(dadosEmJson[linha].VB1600_Qtde);
  const v1600Vlr = converterParaNumero(dadosEmJson[linha].VB1600_Valor);
  const v1601Qtde = converterParaNumero(dadosEmJson[linha].VB1601_Qtde);
  const v1601Vlr = converterParaNumero(dadosEmJson[linha].VB1601_Valor);
  const v1603Qtde = converterParaNumero(dadosEmJson[linha].VB1603_Qtde);
  const v1603Vlr = converterParaNumero(dadosEmJson[linha].VB1603_Valor);
  const v1606Qtde = converterParaNumero(dadosEmJson[linha].VB1606_Qtde);
  const v1606Vlr = converterParaNumero(dadosEmJson[linha].VB1606_Valor);
  const v1607Qtde = converterParaNumero(dadosEmJson[linha].VB1607_Qtde);
  const v1607Vlr = converterParaNumero(dadosEmJson[linha].VB1607_Valor);

  const faltaDiaTributadaQtde = converterParaNumero(dadosEmJson[linha].VB171_Qtde);
  const faltaDiaTributadaVlr = converterParaNumero(dadosEmJson[linha].VB171_Valor);
  const faltaHoraTributadaQtde = converterParaNumero(dadosEmJson[linha].VB172_Qtde);
  const faltaHoraTributadaVlr = converterParaNumero(dadosEmJson[linha].VB172_Valor);
  const faltaDiaNaoTributadaQtde = converterParaNumero(dadosEmJson[linha].VB471_Qtde);
  const faltaDiaNaoTributadaVlr = converterParaNumero(dadosEmJson[linha].VB471_Valor);
  const faltaHoraNaoTributadaQtde = converterParaNumero(dadosEmJson[linha].VB472_Qtde);
  const faltaHoraNaoTributadaVlr = converterParaNumero(dadosEmJson[linha].VB472_Valor);
  const dsrTributadoQtde = converterParaNumero(dadosEmJson[linha].VB504_Qtde);
  const dsrTributadoVlr = converterParaNumero(dadosEmJson[linha].VB504_Valor);
  const dsrNaoTributadoQtde = converterParaNumero(dadosEmJson[linha].VB604_Qtde);
  const dsrNaoTributadoVlr = converterParaNumero(dadosEmJson[linha].VB604_Valor);
  const faltaDiaMesAnteriorQtde = converterParaNumero(dadosEmJson[linha].VB871_Qtde);
  const faltaDiaMesAnteriorVlr = converterParaNumero(dadosEmJson[linha].VB871_Valor);
  const faltaHoraMesAnteriorQtde = converterParaNumero(dadosEmJson[linha].VB872_Qtde);
  const faltaHoraMesAnteriorVlr = converterParaNumero(dadosEmJson[linha].VB872_Valor);
  const dsrMesAnteriorQtde = converterParaNumero(dadosEmJson[linha].VB510_Qtde);
  const dsrMesAnteriorVlr = converterParaNumero(dadosEmJson[linha].VB510_Valor);

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

  let diaTributado = 0;
  let diaNaoTributado = 0;
  let horaTributada = 0;
  let horaNaoTributada = 0;

  if (diasTrabalhados > 0) {
      if (codigoRegimeTrabalho === 2 || codigoRegimeTrabalho === 9) {
          diaTributado = (salario + insalubridade + subsidio + difPiso + periculosidade + quinquenio + sextaParte + adicionalDeCurso + ccs + fgs + licencas) / diasTrabalhados;
          if (horasMensais > 0) {
            horaTributada = diaTributado * diasTrabalhados / horasMensais;
          }
      } else if (codigoRegimeTrabalho === 3 || codigoRegimeTrabalho === 11) {
          diaTributado = (salario + quinquenio + sextaParte + subsidio + difPiso + licencas) / diasTrabalhados;
          diaNaoTributado = (insalubridade + periculosidade  + adicionalDeCurso + ccs + fgs) / diasTrabalhados;
          if (horasMensais > 0) {
            horaTributada = diaTributado * diasTrabalhados / horasMensais;
            horaNaoTributada = diaNaoTributado * diasTrabalhados / horasMensais;
          }
      }
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

  const totalDeProventos = salario + insalubridade + subsidio + difPiso + periculosidade + quinquenio + sextaParte + adicionalDeCurso + ccs + fgs + licencas;


}