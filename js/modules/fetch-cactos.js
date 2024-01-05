import initAnimaNumeros from './anima-numeros.js';

export default function initCactosFetch() {
  async function fecthCactos(url) {
    try {
      const cactosResponse = await fetch(url);
      const cactosJSON = await cactosResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      cactosJSON.forEach(cactos => {
        const divCactos = createCactos(cactos);
        numerosGrid.appendChild(divCactos);
      })
      initAnimaNumeros();
    }catch(erro) {
      console.log(erro);
    }
  }

  function createCactos(cactos) {
    const div = document.createElement('div');
    div.classList.add('numero-cactos');

    div.innerHTML = `<h3>${cactos.specie}</h3><span data-numero>${cactos.total}</span>`; 
    return div;
  }

  fecthCactos('./cactosapi.json');
}