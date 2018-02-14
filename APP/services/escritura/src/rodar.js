


module.exports.GetExample = () => {
    let Handlebars = require("./handle");
    let { templatePrimeiraDasPartes, primeiraDasPartes } = require("./primeiraDasPartes");
    let { templateSegundoDoObjeto, segundoDoObjeto } = require("./segundoDoObjeto");
    let { templateTerceiroDoPreco, terceiroDoPreco } = require("./TerceiroDoPreco");
    let { templateFormaDePagamento, formaDePagamento } = require("./quartaFormaDePagamento");
    let { templateQuintoDaTransferencia, quintoDaTransferencia } = require("./quintoDaTransferencia");
    let { templateDeclaracaoDasPartes, declaracaoDasPartes } = require("./sextoDeclaracaoDasPartes");
    let { templateSetimoCertidoesDocumentos, setimoCertidoesDocumentos } = require("./setimoCertidoesDocumentos");
    let { templateOitavoDaAceitacao, oitavoDaAceitacao } = require("./oitavoDaAceitacao");

    let template = templatePrimeiraDasPartes +
        templateSegundoDoObjeto +
        templateTerceiroDoPreco +
        templateFormaDePagamento +
        templateQuintoDaTransferencia +
        templateDeclaracaoDasPartes +
        templateSetimoCertidoesDocumentos +
        templateOitavoDaAceitacao;

    let obj = Object.assign({}, primeiraDasPartes, segundoDoObjeto, terceiroDoPreco, templateFormaDePagamento, quintoDaTransferencia, declaracaoDasPartes, setimoCertidoesDocumentos, oitavoDaAceitacao);
    let resultado = Handlebars.compile(template)(obj);
    return resultado;
}

