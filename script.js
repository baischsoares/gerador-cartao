const app = new Vue({
  el: '#app',
  data:{
    nome: '',
    numero: '',
    cvc: '',
    validade: '',
    anoVenc: '',
    mesVenc: ''
  },
  methods: {
    gerarCVC(){
      this.cvc = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    },
    gerarVenc(){
      this.mesVenc = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
      this.anoVenc = Math.floor((Math.random() * (40 - 22 + 1)) + 22);
    },
    gerarNumero(){
      this.numero = ''
      let numeroTamanho = 0
      for(numeroTamanho; numeroTamanho < 16; numeroTamanho++){
        let numeroAleatorio = Math.floor((Math.random() * (9 - 0 + 1)));
        this.numero += numeroAleatorio
      }
    },
    formatarNumero(){
      this.gerarNumero();
      let string1 = this.numero.substring(0, 4)
      let string2 = this.numero.substring(4, 8)
      let string3 = this.numero.substring(8, 12)
      let string4 = this.numero.substring(12, 16)
      this.numero = `${string1} ${string2} ${string3} ${string4}`
    }
  },
  watch:{
    nome(){
      this.gerarCVC();
      this. gerarVenc();
      this.formatarNumero()
    }
  }
})



// const nomeInput = document.getElementById('name');
// const numeroInput = document.getElementById('number');
// const mesInput = document.getElementById('date-month');
// const anoInput = document.getElementById('date-year');
// const cvcInput = document.getElementById('cvc');

// nomeInput.addEventListener('keyup', nomeMudar)
// numeroInput.addEventListener('keyup', numeroMudar)
// cvcInput.addEventListener('keyup', cvcMudar)
// mesInput.addEventListener('keyup', mesMudar)
// anoInput.addEventListener('keyup', anoMudar)

// function nomeMudar(){
//   let cartaoNome = document.querySelector('.cartao-nome')
//   cartaoNome.innerText = nomeInput.value
// }
// function cvcMudar(event){
//   let cvcCartao = document.querySelector('.cartao-cvc')
//   cvcCartao.innerText = cvcInput.value
//   let key = +event.key

//   if(!key){
//     const span = document.createElement('span');
//     span.classList.add('erro')
//     span.innerText = "Wrong format, numbers only";
//     this.insertAdjacentElement('afterend', span)
//   }


// }
// function numeroMudar(){
//   let numeroCartao = document.querySelector('.cartao-numero')
//   numeroCartao.innerText = numeroInput.value
// }
// function mesMudar(){
//   let mesCartao = document.querySelector('.mes')
//   mesCartao.innerText = mesInput.value

//   validarDado()
// }
// function anoMudar(){
//   let anoCartao = document.querySelector('.ano')
//   anoCartao.innerText = anoInput.value
// }






// const btn = document.querySelector('input[ type="button"]')
// btn.addEventListener('click', enviarDados)

// function enviarDados(event){
//   const avisoErro = document.querySelectorAll('.erro')
//   avisoErro.forEach((erro) => {
//     erro.remove()
//   })
//   blankVerify()
// }

// function blankVerify(){
//   const form = document.querySelector('form');
//   const elementos = Array.from(form.elements)

//   elementos.forEach((e) => {
//     if(e.value.length === 0){
//       const span = document.createElement('span');
//       span.classList.add('erro')
//       span.innerText = "Can't be blank";
//       e.insertAdjacentElement('afterend', span)
//     }
//   })
// }
