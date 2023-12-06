export default function buttons(charKeyBtn) { //ADICIONANDO FUNCIONALIDADES AOS BOTOES 
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value
      input.value += value
    })
  }