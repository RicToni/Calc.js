import buttons from "./buttons.js"
import calculate from "./calc.js"
import clear from "./clear.js"
import copyToClipboard from "./clipboard.js"
import keydown from "./keydown.js"
import theme from "./theme.js"


const input = document.getElementById("input")
// const resultInput = document.getElementById("result")

 // AQUI SELECIONAMOS OS CARACTERES PERMITIDOS. 

document.querySelectorAll(".charKey").forEach(buttons)

document.getElementById("clear").addEventListener("click", clear)

input.addEventListener("keydown", keydown)

document.getElementById("equal").addEventListener("click", calculate) // ADICIONANDO A OPÇÃO DE CALCULAR TAMBEM 

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

document.getElementById("themeSwitcher").addEventListener("click", theme)