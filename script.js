function squareRoot(){

  let userInput = +prompt("Escreva Algum Número");
  let x = Math.sqrt(userInput);
  if(Math.sqrt(userInput) %1 != 0){

      alert('Número não redondo, Logo não existe raiz quadrada.');
  }
      else{
        alert(" A Raiz quadrada é " + x)
      }

}
  squareRoot()
  
