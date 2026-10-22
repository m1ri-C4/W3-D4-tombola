/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

const tab = document.querySelector('#tabellone');
const tabl = document.querySelector('.tabellone');
const comandi = document.querySelector('.comandi')
const estraiBtn = document.querySelector('#estrai');

//crea i numeri da 1 a 90
const rendiTabellone = () => {
  for (let i = 1; i <= 90; i++) {
    const createDiv = document.createElement('div'); //creo l'elemento div
    createDiv.classList.add('tabellone', 'numero');
    createDiv.textContent = i; //inserisce il valore di i come testo nel div
    tab.appendChild(createDiv);
  }
};
rendiTabellone();

//creo la funzione estrai 
const estrai = () => {
  const casuale = usciti [Math.floor(Math.random() * 90) + 1]; // numero casuale da 1 a 90
 if (!usciti.includes(casuale)){ //se il numero NON è presente
  usciti.push(casuale); //aggiungi il numero all'aray
 } 
}
estrai();