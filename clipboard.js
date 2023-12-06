export default function copyToClipboard (ev) {  // FUNCIONALIDADE PARA COPIAR O RESULTADO PARA AREA DE TRANSFEREENCIA. 
    const button = ev.currentTarget
    if (button.innerText === "Copiar") {
      button.innerText = "Copiado!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = "Copiar"
      button.classList.remove("success")
    }
  }