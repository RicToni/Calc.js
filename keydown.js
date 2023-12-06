export default function keydown (ev) {
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
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
  }