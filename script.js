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
const resetBtn = document.querySelector('#reset');
const estraiBtn = document.querySelector('#estrai');
const cronologia = document.querySelector('#cronologia');
const spanUltimoNumero = document.querySelector('#ultimo-numero');

//crea i numeri da 1 a 90
const rendiTabellone = () => {
  tab.innerHTML = '';
  for (let i = 1; i <= 90; i++) {
    const createDiv = document.createElement('div'); //creo l'elemento div
    createDiv.classList.add('tabellone', 'numero');
    if (usciti.includes(i)) {
      createDiv.classList.add('uscito');
    }
    createDiv.textContent = i; //inserisce il valore di i come testo nel div
    tab.appendChild(createDiv);
  }
};
rendiTabellone();

//creo la funzione estrai 
const estrai = () => {
  if (usciti.length === 90) { //se sono usciti tutti e 90 i numeri, interrompo la funzione  
    return alert('Hai estratto tutti i numeri!');
  }
  let casuale = Math.floor(Math.random() * 90) + 1; // numero casuale da 1 a 90
  while (usciti.includes(casuale)) {// finchè il numero è già uscito ne genero un altro 
    casuale = Math.floor(Math.random() * 90) + 1;
  }
  usciti.push(casuale); //aggiungi il numero all'aray
  rendiTabellone(); 
  rendiCronologia();
  spanUltimoNumero.textContent = casuale; //scrivi all'interno dello span il numero casuale
}
estraiBtn.addEventListener('click', estrai);// al click del bottone esegui la funzione estrai

//creo la funzione cronologia
const rendiCronologia = () => {
  const ultimiDieci = usciti.slice(-10); //estraggo dall'array gli ultimi 10 numeri
  cronologia.textContent = ultimiDieci.join(', '); // li inserisco come testo
}
rendiCronologia();

//funzione di reset 
const reset = () => {
  usciti = []; //array vuoto
  rendiTabellone(); //richiami la funzione rendiTabellone che inizialmete è vuoto
  cronologia.textContent ='Nessun numero estratto'; //all'interno dell'id della cronologia scrivi 'Nessun numero estratto'
  spanUltimoNumero.textContent = '—'; //all'interno dello span ultimo numero scrivi —
}
resetBtn.addEventListener('click', reset); // al click del bottone ricomincia esegui la funzione reset

