function calcularPeso(){
  const inNome = document.getElementById("inNome")
  const inAltura = document.getElementById("inAltura")
  const inPeso = document.getElementById("inPeso")
  const outResposta = document.getElementById("outResposta")

  const nome = inNome.value;
  let altura = Number(inAltura.value);
  let peso = Number(inPeso.value);
  let imc;
  
  //validacao
  if( nome == "" || altura == 0 || isNaN(altura) && peso == 0 || isNaN(peso)){
    alert("Por favor, preencha todos os campos corretamente.")
    inNome.focus();
    return
  }

//calculo
  if(altura, peso){
    imc = peso / (Math.pow(altura, 2))
  } else {
    imc = peso / (Math.pow(altura, 2))
  }

  if(imc < 16){
    outResposta.textContent = `${nome}, você está com subpeso severo. ${imc.toFixed(2)}`;
  } else if ( imc > 16.9 && imc <= 19.9 ){
    outResposta.textContent = `${nome},você está com subpeso. ${imc.toFixed(2)}`
  } else if (imc > 20 && imc < 24.99){
    outResposta.textContent = `${nome}, o seu IMC está no valor ideal. ${imc.toFixed(2)}`
  } else if (imc >= 25 && imc < 29.9) {
    outResposta.textContent = `${nome}, você está com sobrepeso. ${imc.toFixed(2)}`
  } else if (imc >= 30 && imc < 39.9){
    outResposta.textContent = `${nome}, você está obeso. ${imc.toFixed(2)}`;
  } else if(imc > 40){
    outResposta.textContent = `${nome}, você está com obesidade mórbida. ${imc.toFixed(2)}`;
  }
}

const buttonCalc = document.getElementById("btCalcular");
buttonCalc.addEventListener("click", calcularPeso)

function limparCampos(){
  location.reload();
  document.getElementById("inNome").focus();
}

const buttonLimpar = document.getElementById("btLimpar")
buttonLimpar.addEventListener("click", limparCampos)
