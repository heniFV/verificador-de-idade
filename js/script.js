function verificar() {
  //pegando ano atual e colocando numa variavel
  let data = new Date();
  let ano = data.getFullYear();

  //variaveis do html
  let fano = document.getElementById("txtAno");
  let res = document.getElementById("res");

  //Verifindos e o usuario digitou algum ano inválido, ou não digitou nada
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("ERRO! Verifique os dados inseridos.");
  } else {
    //Pegando as opções com nome 'txtSex'
    let fsex = document.getElementsByName("txtSex");
    //variavel da idade
    let idade = ano - Number(fano.value);
    //mostrar a idade
    res.innerHTML = `A pessoa em questão tem ${idade} anos de idade.`;
    //Definição da variavel genero (por hora vazia)
    let genero = "";
    //trabalhando com as imagens
    let img = document.createElement("img");
    //criando uma id para o elemento imagem criado anteriormente
    img.setAttribute("id", "foto");
    // verificação de qual box do sexo foi selecionada e qual idade foi resultado do calculo
    // para a seleção da imagem.
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "foto-bebe-m.png");
      } else if (idade >= 10 && idade < 21) {
        img.setAttribute("src", "foto-jovem-m.png");
      } else if (idade >= 21 && idade < 60) {
        img.setAttribute("src", "foto-adulto-m.png");
      } else {
        img.setAttribute("src", "foto-idoso-m.png");
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "foto-bebe-f.png");
      } else if (idade >= 10 && idade < 21) {
        img.setAttribute("src", "foto-jovem-f.png");
      } else if (idade >= 21 && idade < 60) {
        img.setAttribute("src", "foto-adulto-f.png");
      } else {
        img.setAttribute("src", "foto-idoso-f.png");
      }
    }
    res.innerHTML = `Detectado: ${genero} com ${idade} anos de idade.`;
    //Vinculando o elemento 'img' ao div com id 'res'
    res.appendChild(img);
  }
}
