import calculate from "./calc.js"
import copyToClipboard from "./clipboard.js"
import theme from "./theme.js"


const input = document.getElementById("input")
// const resultInput = document.getElementById("result")

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] // AQUI SELECIONAMOS OS CARACTERES PERMITIDOS. 

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) { //ADICIONANDO FUNCIONALIDADES AOS BOTOES 
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById("clear").addEventListener("click", function () { //LIMPANDO A CALCULADORA 
  input.value = ""
  input.focus() // VAI IMEDATAMENTE FOCAR NO NOSSO INPUT AO PRESSIONAR O BOTAO CLEAR
})

input.addEventListener("keydown", function (ev) {
  ev.preventDefault()                          //   PREVENINDO O EVENTO PADRÃO. 
  if (allowedKeys.includes(ev.key)) {          //   ev.key---->> SE TRATA DO EVENTO DA TECLA QUE O USUÁRIO PRESSIONOU 
    input.value += ev.key                      //    APOS A VALIDAÇÃO A INSERIMOS NO VALUE DO INPUT 
    return
  }
  if (ev.key === "Backspace") {                    //  CRIANDO A OPÇÃO DE APAGAR COM BACKSPACE
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {                       // CRIANDO A OPÇÃO DE CALCULAR COM ENTER 
    calculate()
  }
})

document.getElementById("equal").addEventListener("click", calculate) // ADICIONANDO A OPÇÃO DE CALCULAR TAMBEM 

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

document.getElementById("themeSwitcher").addEventListener("click", theme)