function stringDateToDate(dateString) {
    let dia = dateString.slice(0, 2);
    let mes = dateString.slice(3, 5);
    let ano = dateString.slice(6, 10);
    return new Date(`${ano}/${mes}/${dia}`);
}

module.exports.DataPorExtenso = (date, tipo) => {
    let hoje;
    /*  if (tipo == 1) { // tipo um recebe uma string com a data e é transformado em um tipo date; == '15/12/2000'
          hoje = stringDateToDate(date);'
      } else if (tipo == 2) { //Recebe um tipo data
          let hoje = date;
      } */
    if (date instanceof Date) {
        ''
        hoje = date;
    } else {
        hoje = stringDateToDate(date);
    }

    let meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    let semana = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
    let nomenclatura_dia = new Array("primeiro dia", "segundo dia", "terceiro dia", "quarto dia", "quinto dia", "sexto dia", "sétimo dia", "oitavo dia", "nono dia", "dez dias", "onze dias", "doze dias", "treze dias", "quartoze dias", "quinze dias", "dezesseis dias", "dezessete dias", "dezoito dias", "dezenove dias", "vinte dias", "vinte e um dias", "vinte e dois dias", "vinte e três dias", "vinte e quatro dias", "vinte e cinco dias", "vinte e seis dias", "vinte e sete dias", "vinte e oito dias", "vinte e nove dias", "trinta dias", "trinta e um dias");
    let array_anos = {
        "2015": "dois mil e quinze",
        "2016": "dois mil e dezeseis",
        "2017": "dois mil e dezessete",
        "2018": "dois mil e dezoito",
        "2019": "dois mil e dezenove",
        "2020": "dois mil e vinte",
        "2021": "dois mil e vinte e um",
        "2022": "dois mil e vinte e dois",
        "2023": "dois mil e vinte e três",
        "2024": "dois mil e vinte e quatro",
        "2025": "dois mil e vinte e cinco",
        "2026": "dois mil e vinte e seis",
        "2027": "dois mil e vinte e sete",
        "2028": "dois mil e vinte e oito",
        "2029": "dois mil e vinte e nove",
        "2030": "dois mil e trinta",
        "2031": "dois mil e trinte e um",
        "2032": "dois mil e trinta e dois",
        "2033": "dois mil e trinta e três",
    }

    let dia = hoje.getDate();
    let dias = hoje.getDay();
    let mes = hoje.getMonth();
    let ano = hoje.getYear();
    ano = ano + 1900;
    let diaext_ = ` ${(dia > 10 ? "aos" : "ao")} ${nomenclatura_dia[dia - 1]} de ${meses[mes].toLowerCase()} de ${array_anos[ano]}`;
    return diaext_;
}