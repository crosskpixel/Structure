//let Handlerbars = require("./handle");

let segundoDoObjeto = {
    imovel: {
        tipo: "urbano",
        lote: "06",
        quadra: "81",
        loteamento: "VILA JOHN KENNEDY",
        area: "560,00M²",
        rua: "Rua romeiras",
        cidade: "Dois Vizinhos",
        estado: "Paraná",
        descricao: {
            frente: "por uma linha reta medindo 16,00 metros, com a Rua Romeiras",
            fundos: "por uma linha reta medindo 16,00m metros com terrenos do Lote 03",
            direita: "por uma linha reta medindo 35,00 metros, com o lote 07",
            esquerda: "por uma linha reta medindo 35,00 metros , com o Lote 05"
        },
        dataAquisicao: "12/01/2011",
        registro: {
            livro: "47-N",
            folhas: "123/125",
            cidade: "Dois Vizinhos/PR"
        },
        indicacao_fiscal:"01.001.034.052.001",
        inscricao:"034759",
        valor_venal:"12.642,78",
        valor_imovel:"35.000,00"
    }
}

let templateSegundoDoObjeto = `
    <b>2.-DO OBJETO:</b> Os vendedores são senhores e legítimos possuidores, á justo título, do seguinte imóvel: <br>
    {{#switch imovel.tipo}}
                    {{#case "urbano"}} 
                    <b>2.1.-IMÓVEL URBANO </b>
                        constituído pelo LOTE {{imovel.lote}} {{imovel.lote}}  da QUADRA {{imovel.quadra}} , do Loteamento {{imovel.loteamento}}.
                        com área de {{imovel.area}} , de terreno, localizado à {{imovel.rua}}, nesta cidade e comarca de <b>{{#upperCase imovel.cidade}}{{/upperCase}}</b>
                        Estado do {{imovel.estado}} dentro dos seguintes limites e confrontações: <b>FRENTE - </b>{{imovel.descricao.frente}}
                        <b>FUNDOS - </b> {{imovel.descricao.fundos}},
                        <b>LADO DIREITO</b> - {{imovel.descricao.direita}},
                        <b>LADO ESQUERDO</b> - {{imovel.descricao.esquerda}}
                    {{/case}} 
                    {{#case "rural"}}
                    <b>2.1.-IMÓVEL RURAL <b/>
                    {{/case}} 
                    {{#case "condominio"}} 
                    <b>2.1.-IMÓVEL CONDOMINIAL <b/>
                    {{/case}}
                    <br>
                    <b>2.1.1.-</b> que dito imóvel foi adquirido pelos vendedores no dia {{imovel.dataAquisicao}}, por força da Escritura
                    Pública de Venda e Compra lavrada no {{imovel.registro.livro}}, folhas {{imovel.registro.folhas}} no Tabelionato de Notas de 
                    <b>{{#upperCase imovel.registro.cidade}}{{/upperCase}}</b>
            {{/switch}}
            <br>
            <b>2.1.2.-</b> que dito imóvel encontra-se absolutamente livre e desembaraçado de quaisquer dívidas, dúvidas e ônus real ou pessoal, arrestos ou
            sequestros, hipotecas legais ou convencionais, ou ainda,de impostos e restrições de qualquer natureza;
            <br>
            <b>2.1.3.-</b>que dito imóvel encontra-se cadastrado junto ao Município de {{cidade}} com <b>INDICAÇÂO FISCAL Nº </b>{{imovel.indicacao_fiscal}}
            -  <b>INSCRIÇÂO Nº {{imovel.inscricao}}</b>, com valor venal de R$ {{imovel.valor_venal}}, atribuído para o presente exercício;
`;


module.exports = { segundoDoObjeto, templateSegundoDoObjeto };