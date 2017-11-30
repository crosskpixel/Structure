const formatBR = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

module.exports.ToCoinBRL = (coin = 0) => {
    console.log(coin);
    return formatBR.format(coin);
}