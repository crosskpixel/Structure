//let Handlebars = require("./handle");

let primeiraDasPartes = {
    vendedor: {
        nome: "Marco Aurelio Giraldi",
        estadoCivil: {
            estado: "casado",
            conjugue: {
                sexo: "M",
                nome: "Ieda De Pieri Campos Giraldi",
                pai: "Waldemar Francisco De Campos",
                mae: "Matilde Depieri Campos",
                naturalidade: "Enéas Marques",
                dataNascimento: "04/08/1966",
                profissao: "Empresária",
                identidade: "4.041.749-4-SSP/PR",
                cpf: "603.475.119.39",
            },
            casamento: {
                naturalidade: "Quedas Do Iguaçu/PR",
                endereco: " Rua Juazeiro",
                numero_casa: "1526",
                complemento: "Centro",
                data: "18/07/1997",
                registro: {
                    assento: "4154",
                    livro: "B-014",
                    folha: "029"
                }
            }
        }
        ,
        pai: {
            nome: "Idimir Tranquilo Giraldi"
        },
        mae: {
            nome: "Sidenei Scholz Giraldi"
        },
        naturalidade: "Quedas Do Iguaçu/PR",
        dataNascimento: "19/09/1967",
        profissao: "Tabelião",
        identidade: "3.889.255-0-SSP/PR",
        cpf: "545.792.109-30",
        sexo: "M",
        residencia: {}
    },
    comprador: {
        nome: "Assis Brasil Luz Dos Reis Junior",
        estadoCivil: {
            estado: "solteiro"
        },
        nacionalidade: "brasileiro",
        pai: "Assis Brasil dos reis",
        mae: "Salete Severnini dos reis",
        nacionalidade: "Dois Vizinhos",
        dataNascimento: "27/11/1986",
        profissao: "comerciante",
        identidade: "8.742.476-6-SSP/PR",
        cpf: "057.448.569-43",
        residencia: {
            rua: "Travessa Jatobá",
            numero: "135",
            bairro: "Conjunto residencial Tarumã",
            cidade: "Quedas do Iguaçu"
        }
    },
    dataExtenso: "08/02/2018",
    cidade: "Dois Vizinhos",
    estado: "Paraná",
    naturalidade: "Quedas do Iguaçu",
    dataAtual: "16 de janeiro de 2018"
}

let templatePrimeiraDasPartes = `
<div style="margin-left:13%;margin-right:13%;" >
<div style="margin-left:55%;font-size:20px;">
    <b>ESCRITURA DE VENDA E COMPRA</b> QUE
    ENTRE SI FAZEM: {{vendedor.nome}} 
    {{#ifEquals  vendedor.estadoCivil.estado "casado" }} e Sua conjugue {{/ifEquals}} EM FAVOR DE
    {{comprador.nome}}  NA 
    FORMA ABAIXO:- <br>
    <hr>
  </div>
    <b>SAIBAM</b> quantos a presente Escritura Particular
    de Venda e Compra lavrada nos termos do artigo 108 do Código Civil, virem
    {{#DateToString dataExtenso }}{{/DateToString}} ({{dataExtenso}}) , nesta cidade e comarca de {{cidade}},
    no Estado do {{estado}} , as partes adiante nominadas e qualificadas formalizam o presente negócio jurifico para alienação de
    imovel, a saber: <br>
    <b>1.-DAS PARTES:</b> <br>
    <b>1.1.-</b> como vendedores <b> {{#upperCase vendedor.nome }}{{/upperCase}} </b> , filho de 
    {{#upperCase vendedor.pai.nome }}{{/upperCase}} e {{#upperCase vendedor.mae.nome}}{{/upperCase}},
    natural de {{vendedor.naturalidade}}
    {{#switch vendedor.sexo}}
            {{#case "M"}}
             nascido
            {{/case}}
            {{#case "F"}}
                nascida
            {{/case}}
    {{/switch}}
     em {{vendedor.dataNascimento}},{{vendedor.profissao}},
{{#switch vendedor.sexo}}
    {{#case "M"}}
        portador
    {{/case}}
    {{#case "F"}}
        portadora
    {{/case}}
{{/switch}}
    da Cédula de Identidade nº {{vendedor.identidade}} e 
    {{#switch vendedor.sexo}}
    {{#case "M"}}
        inscrito
    {{/case}}
    {{#case "F"}}
        inscrita
    {{/case}}
{{/switch}}
      no CPF/MF sob nº {{vendedor.cpf}},
      {{#switch vendedor.estadoCivil.estado }}
            {{#case "casado"}}
                e 
                {{#switch vendedor.estadoCivil.conjugue.sexo}}
                {{#case "M"}}
                  sua Esposa
                {{/case}}
                {{#case "F"}}
                    seu Marido
                {{/case}}
        {{/switch}}
                {{#upperCase vendedor.estadoCivil.conjugue.nome}}{{/upperCase}}
                ,filha de {{#upperCase vendedor.estadoCivil.conjugue.pai}} {{/upperCase}}
                ,e {{#upperCase vendedor.estadoCivil.conjugue.mae}} {{/upperCase}}
                ,natural de {{vendedor.estadoCivil.conjugue.naturalidade}},
                {{#switch vendedor.estadoCivil.conjugue.sexo}}
                    {{#case "M"}}
                        nascida
                    {{/case}}
                    {{#case "F"}}
                        nascido
                    {{/case}}
                {{/switch}}
                 em {{vendedor.estadoCivil.conjugue.dataNascimento}},{{vendedor.estadoCivil.conjugue.profissao}},
                 {{#switch vendedor.estadoCivil.conjugue.sexo}}
                 {{#case "M"}}
                   portador
                 {{/case}}
                 {{#case "F"}}
                     portadora
                 {{/case}}
                 {{/switch}}
                 da Cédula de Identidade nº{{vendedor.estadoCivil.conjugue.identidade}} e 
                 {{#switch vendedor.estadoCivil.conjugue.sexo}}
                    {{#case "M"}}
                        inscrita
                    {{/case}}
                    {{#case "F"}}
                            inscrito
                    {{/case}}
                {{/switch}}
                  no CPF/MF sob nº{{vendedor.estadoCivil.conjugue.cpf}}
                ambos brasileiros, capazes,casados entre si sob regime de Comunhão Parcial de Bens na vigência da Leu 6515/1977, nos termos 
                do Assento de Casamento nº{{vendedor.estadoCivil.casamento.registro.assento}}, lavrado no Livro {{vendedor.estadoCivil.casamento.registro.livro}}, folha  {{vendedor.estadoCivil.casamento.registro.folha}},no Ofício de Registro Civil das Pessoas Naturais de {{vendedor.estadoCivil.casamento.naturalidade}}
                em {{vendedor.estadoCivil.casamento.data}}, residentes e domiciliados na {{vendedor.estadoCivil.casamento.endereco}}, {{vendedor.estadoCivil.casamento.numero_casa}},
                {{#if vendedor.estadoCivil.casamento.complemento}} {{vendedor.estadoCivil.casamento.complemento}} {{/if}}
                {{vendedor.estadoCivil.casamento.naturalidade}};
            {{/case}}
            {{#case "viuvo"}}


            {{/case}}
            {{#case "solteiro"}}


        
            {{/case}}
      {{/switch}}
    <b>1.2.-</b>
    como comprador: {{#upperCase comprador.nome}}{{/upperCase}},{{comprador.nacionalidade}},
    filho de {{#upperCase comprador.pai}}{{/upperCase}} e {{#upperCase comprador.mae}}{{/upperCase}} natural de {{comprador.naturalidade}},nascido
    em {{comprador.dataNascimento}},
    {{#switch comprador.estadoCivil.estado}}
        {{#case "casado"}}

        {{/case}}
        {{#case "viuvo"}}
    
        {{/case}}
        {{#case "solteiro"}}
            solteiro,maior e capaz,
        {{/case}}
        {{comprador.profissao}} ,portador da Cédula de Identidade nº {{comprador.identidade}} e inscrito no CPF/MF sob n {{comprador.cpf}}, residente
        e domiciliado na {{comprador.residencia.rua}},{{comprador.residencia.numero}},{{comprador.residencia.bairro}},{{comprador.residencia.cidade}}/PR;
    {{/switch}}
    <br>
 `;

module.exports = { templatePrimeiraDasPartes, primeiraDasPartes };
/*let resultado = Handlebars.compile(templatePrimeiraDasPartes)(primeiraDasPartes);
console.log(resultado.trim());*/

