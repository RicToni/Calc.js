export default function calculate() {
    const resultInput = document.getElementById("result")
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)   // eval() ----> SE TRATA DE UMA FUNÇÃO GLOBAL QUE RECEBE UMA STRING COMO ARGUMENTO E A INTERPRETA E EXECUTA COMO UM CODIGO JS 
    resultInput.value = result
    resultInput.classList.remove("error")
  }