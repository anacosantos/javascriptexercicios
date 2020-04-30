// escreva um programa que defina um objeto familia, onde tenha as propriedades, 
//sobrenome 
//brasao
//nomeAvo
//nomeAvo
//pais 
//para pais deve ter um objeto mae(com nome mae, idade mae), e pai (com nome pai idade pai)
//para cada pais deve ter os filhos: nomefilho, idadefilho, sexofilho, netos
//para cada neto deve ter o nome e sexo.
//seu programa deve imprimir o objeto inteiro. 
//adicionar id para cada objeto.

var familia = {
    id: 12212,
    nome: "Santos",
    brasao: "abc",
    nomeAvo: "Celetino",
    nomeAvo: "Dulce",
    pais : {
      pai : {
        id: 01,
        nome: "Luis",
        idade: 51,
      },
      mae : {
        id : 02,
        nome: "Elisabeth",
        idade: 69,
      },
      filhos : [
        {
          id: 03,
          nomefilho : "joao",
          idadefilho : 13,
          sexofilho : "m",
          netos :[
            {
              id : 04,
              nome : "joazinho junior",
              sexo : 3
            },
            {
              id : 05,
              nome : "maria neta",
              sexo : 5
            }
          ]
        },
        {
          id :06,
          nomefilho : "maria",
          idadefilho : 29,
          sexofilho : "f",
          netos :[]
        }
      ]
    }
  };


  //console.log(familia);
  //agora eh necessario que seja impresso o nome do pai e da mae
 //console.log(familia.pais.pai.nome);
  //console.log(familia.pais.mae.nome);

  //utilizando um for/foreach agora eh necessario que seja impresso o nome dos filhos com a mensagem: O joao tem 13 anos e possui 2 netos
  //console.log(familia.pais.filhos);
// familia.pais.filhos.forEach(function(t){
    // console.log("o " + t.nomefilho + " tem " + t.idadefilho + " anos e possui " + t.netos.length + " netos")
 //});
 //o filho da maria nasceu, que tal adiciona-la na familia?
 
 familia.pais.filhos.forEach(function(t){
     // console.log(t.nomefilho);
      if(t.id === 06){
        var novoFilho = {
          id : 07,
          nome : "joazinho junior",
          sexo : 3
        }
          t.netos.push(novoFilho)
          //console.log(t)
        }
});
console.log(familia.pais.filhos[1].netos);

