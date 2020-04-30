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

var familia = {
    nome: "Santos",
    brasao: "abc",
    nomeAvo: "Celetino",
    nomeAvo: "Dulce",
    pais : {
      pai : {
        nome: "Luis",
        idade: 51,
      },
      mae : {
        nome: "Elisabeth",
        idade: 69,
      },
      filhos : [
        {
          nomefilho : "joao",
          idadefilho : 13,
          sexofilho : "m",
          netos :[
            {
              nome : "joazinho junior",
              sexo : 3
            },
            {
              nome : "maria neta",
              sexo : 5
            }
          ]
        },
        {
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
      if(t.nomefilho === "maria"){
        var novoFilho = {
          nome : "joazinho junior",
          sexo : 3
        }
          t.netos.push(novoFilho)
          //console.log(t)
        }
});
console.log(familia.pais.filhos[1].netos);