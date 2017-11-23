
let dados = [
  {
    nome : "Bardo",
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    nome : "Camuflagem",
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    nome : "Charme",
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  },
  {
    nome: "Bebum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
  }
]

let h1 = document.querySelector('h1')
h1.innerHTML = 'Kevin'

let habilidades = document.querySelector('#habilidades')

  dados.forEach(hab =>
    habilidades.innerHTML += `
      <h3>${hab.nome}</h3>
      <p>${hab.desc}</p>
`
)

/*
habilidades.innerHTML += dados.reduce( (total,hab) => total += `
          <h3>${hab.nome}</h3>
          <p>${hab.desc}</p>
`, '')*/

/*
for(let i = 0; i < dados.length; i++){
  habilidades.innerHTML += `<h3>${dados[i].nome}</h3>
            <p>${dados[i].desc}</p>`
}
*/


let input = document.querySelector('#entrada')
let bt = document.querySelector('#botao')

bt.addEventListener( "click" , function(){

  console.log(input.value)

})
