const mazzoCarte = {
  0: { carta: "Gatto", url: "assets/etcetc" },
  1: { carta: "Cane", url: "assets/etcetc" },
  2: { carta: "Gufo", url: "assets/etcetc" },
  3: { carta: "Pagolino", url: "assets/etcetc" },
  4: { carta: "PipistrelloColCovid", url: "assets/etcetc" },
  5: { carta: "Nunzio", url: "assets/etcetc" },
};

const cards = document.querySelectorAll(".card-img-top");

// Ragazzi una domanda in modo che poi quando si creano le stanze ne possiamo parlare con calma
// Non ho ben capito come è possibile fare l'associazione tra la carta in HTML e la roba qui in JS D:
// sarà possibile tramite una piccola associazione che ora andiamo a fare
// ora ci mettiamo d'accordo sul da farsi in modo che ognuno sa che fare

// Perfetto :D
// dobbiamo superare il gruppo 100%
// comunque michele e andrea
// se mettete il puntatore sìulla riga potete inserire un commento e iniziare la chat

//si ma così è più bello, perché non mi piace proprio essere poco fastidioso nei confronti di GIuseppe
// ma perché non facciamo un bel .js di soli commenti ahahah
// giuro che se vi incontro per strada vi butto sotto col triciclo

/////////Prove/////////

function posizionaCartaInCampo() {
  let carteDaPosizionare = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  let numeroRandom =
    parseInt(
      Math.random() *
        (Math.max(carteDaPosizionare) - Math.min(carteDaPosizionare))
    ) + 1;
  console.log(Math.max(1, 2, 0));
}

function checkCarteInCampo(carta) {
  let cartaGiaPresente = 0;

  if (carteInCampo.length > 0) {
    carteInCampo.forEach((cartaCorrente) => {
      cartaCorrente == carta ? cartaGiaPresente++ : null;
    });
  }
}

///////////////////////

const campo2 = [12];

function posiziona2() {
  let ArrayNumeriPossibili = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  campo.forEach((card) => {
    let numero = parseInt(Math.random() * ArrayNumeriPossibili.length);
    card = numero;
    ArrayNumeriPossibili.splice(numero, 1);
  });
}

cardsInizialization();

function PosizionaNumeri() {
  let ArrayNumeriPossibili = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

  let numero = parseInt(Math.random() * ArrayNumeriPossibili.length) + 1;
  ArrayNumeriPossibili.splice(numero, 1);
  campo[i][j].numero = 1;
}

function cardsInizialization() {
  let numero = parseInt(Math.random() * 5) + 1;
  event.currentTarget.src = `assets/cardback-${numero}.png `;

  for (card of cards) {
    card.addEventListener("click", turnCard);
  }
}

function turnCard(event) {}

//   http://f498f6141715.ngrok.io/Tree-Esercizi/esercizio6/index.html
