// Attraverso un append genero la griglia 
// Attraverso un prompt chiedo all'utente quale livello di difficoltà vuole selezionare
// Creo delle condizioni in modo da regolare il numero di quadrati
// Utilizzo una function per far colorare le caselle
// Creo un array di 16 numeri casuali utilizzando Math.floor e un array
// Evito che ci siano doppi numeri entro l'array tramite una condizione
// Creo una condizione

const squareCont = document.querySelector('#containerSquare');

const Livelli = parseInt(prompt(" '1'-'2'-'3' ")) 

let difficolta = 100;

if (Livelli == 1) {
    difficolta = 100;

}

if (Livelli == 2) {
    difficolta = 81;
}

if (Livelli == 3) {
    difficolta = 49;
}

for (let i = 1; i <= difficolta; i++){

  let Element = document.createElement('div');
  Element.classList.add('square');
  Element.append(i);
  squareCont.appendChild(Element);

  Element.addEventListener("click",
        function(){
            Element.classList.add("clicked_true")
        }
  );
}

//Creo un array di 16 numeri casuali che non si ripetono

 const arrNum = [];
 for(let i=0; i<16; i++){ 
    let num = (Math.floor(Math.random()*100)+1);
    if (arrNum[i] !== num){
    arrNum.push(num)
    }
    console.log(arrNum)
 }

