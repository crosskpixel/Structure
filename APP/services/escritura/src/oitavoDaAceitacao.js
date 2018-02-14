let oitavoDaAceitacao = {
    testemunha: [
        {
            nome: "MAURO ROCHA",
            nacionalidade: "Brasileiro",
            pai: "Darci Brito Rocha",
            mae: "Laurinda Balotin",
            naturalidade: "Quedas Do Iguaçu",
            dataNascimento: "13/01/1975",
            estadoCivil: {
                status: "divorciado",
                data: "01/02/2007",
                matricula: "084152.01.55.1994.2.00012.018.0003743-77",
                assento: "",
                livro: "",
                folha: ""
            },
            profissao: "Corretor de imóveis",
            dataNascimento: "13/01/2007",
            identidade: "7.206.181-0-SSP/PR",
            cpf: "828.597.109-06",
            residencia: {
                rua: "Rua Salgueiros",
                cidade: "Quedas do Iguaçu",
                bairro: "Alto Recreio",
                numero: "1484"
            }
        },
        {
            nome: "Claudemir Covalski",
            nacionalidade: "Brasileiro",
            pai: "Armando Covalski",
            mae: "Maria Ana Covalski",
            naturalidade: "Quedas Do Iguaçu",
            dataNascimento: "26/01/1989",
            estadoCivil: {
                status: "solteiro",
                data: "",
                matricula: "",
                assento: "",
                livro: "",
                folha: ""
            },
            profissao: "Corretor de imóveis",
            dataNascimento: "13/01/2007",
            identidade: "7.206.181-0-SSP/PR",
            cpf: "828.597.109-06",
            residencia: {
                rua: "Rua Salgueiros",
                cidade: "Quedas do Iguaçu",
                bairro: "Alto Recreio",
                numero: "1484"
            }
        }
    ]
};

let templateOitavoDaAceitacao = `
    <b>8.- DA ACEITACAO:</b><br>
    A presente Escritura Particular é feita de acordo com o disposto no artigo 108 do Código Civil Brasileiro e em carácter irrevogável e irretrável, ficando eleito
    o foro desta cidade {{cidade}}/PR, para dirimir quaisquer dúvidas decorrentes do estipulado neste instrumento:<br>
    <br>
    E, por estarem justos e contratados, firmam este instrumento impresso eletronicamente em 03 (três) vias de igual teor e forma, numeradas e rubricadas pelas partes,
    juntamente com as testemunhas
    {{#each testemunha}} 
       <b>{{#upperCase nome}}{{/upperCase}}</b>,{{nacionalidade}},filho de {{#upperCase pai}}{{/upperCase}} e {{#upperCase mae}}{{/upperCase}},natural de {{naturalidade}}/PR
       ,nascido em {{dataNascimento}},
       {{#switch estadoCivil.status}}
            {{#case "solteiro"}}
                solteiro,maior e capaz,
            {{/case}}
            {{#case "casado"}}

            {{/case}}
            {{#case "divorciado"}}
                    divorciado conforme averbação feita em {{estadoCivil.data}}, à margem do Assento de Casamento Civil 
                    {{#if estadoCivil.matricula}}
                        sob matricula nº {{estadoCivil.matricula}},lavrado
                    {{else}}
                        nº {{estadoCivil.assento}}, lavrado no Livro {{estadoCivil.livro}} ,folha {{estadoCivil.folha}}
                    {{/if}}
                    no Ofício de registro Civil das pessoas naturais de {{naturalidade}}/PR
            {{/case}} 
            ,{{profissao}},portador da Cédula de Identidade nº {{identidade}},
            ,e inscrito no CPF/MF sob nº {{cpf}},
            residente e domiciliado na {{residencia.rua}},{{residencia.numero}},{{residencia.bairro}},{{residencia.cidade}}/PR
       {{/switch}}
       {{#if @last}} {{else}} e {{/if}}
    {{/each}}
    <br><br>
    {{cidade}}/PR , 16 de janeiro de 2018
</div>
    `;

module.exports = { oitavoDaAceitacao, templateOitavoDaAceitacao };
