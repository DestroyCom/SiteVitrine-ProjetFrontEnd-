var cart = JSON.parse(localStorage.getItem('panier'));

var panier = {
    "2": {
        "nom": "tkt",
        "prix": '14.99€',
        "imageSrc": "eeeee",
        "quantity": '3'
    },
    "7": {
        "nom": "eeee",
        "prix": '17.99€',
        "imageSrc": "eeeee",
        "quantity": '2'
    },
    "5": {
        "nom": "eeee",
        "prix": '17.99€',
        "imageSrc": "eeeee",
        "quantity": '2'
    },
    "9": {
        "nom": "eeee",
        "prix": '17.99€',
        "imageSrc": "eeeee",
        "quantity": '2'
    },
    "15": {
        "nom": "eeee",
        "prix": '17.99€',
        "imageSrc": "eeeee",
        "quantity": '2'
    }
}

var test = document.querySelector('.listCart');
var boutonAchat = document.querySelector('.buttonAchat');

console.log(cart);

Object.keys(cart).forEach(key => {
    let blocUn = document.createElement('div');
    blocUn.classList.toggle('case');

    let image = document.createElement('img');
    image.src = cart[key].source_img;
    image.alt = cart[key].nom;

    let blocDeux = document.createElement('div');

    let h4 = document.createElement('h4');
    h4.innerHTML = cart[key].nom;

    let blocTrois = document.createElement('div');
    blocTrois.classList.toggle("info");

    let textPrix = document.createElement('p');
    textPrix.innerHTML = cart[key].prix;

    let qunt = document.createElement('input');
    qunt.type = "number";
    let ayedi = "quantity" + key;
    qunt.classList.toggle("quantity");
    qunt.id = ayedi;
    qunt.name = ayedi;
    qunt.min = "1";
    qunt.max = "9";

    let trash = document.createElement('img');
    trash.src = "assets/img/trash-solid.svg";
    trash.classList.toggle('poubelle');
    trash.classList.toggle(key);


    let textPrixTot = document.createElement('p');
    textPrixTot.innerHTML = cart[key].prix;

    blocTrois.appendChild(textPrix);
    blocTrois.appendChild(qunt);
    blocTrois.appendChild(trash);

    blocDeux.appendChild(h4);
    blocDeux.appendChild(blocTrois);

    blocUn.appendChild(image);
    blocUn.appendChild(blocDeux);
    test.appendChild(blocUn);
});

var produitBloc = document.querySelectorAll('.case');
var numPoubelle = document.querySelectorAll('.poubelle');

numPoubelle.forEach((bloc, numCase) => {
    numPoubelle[numCase].addEventListener('click', function(e){
        console.log(bloc, numCase);
        produitBloc[numCase].remove();
        console.log([numCase]);
        if(document.querySelectorAll('.case').length === 0){
            test.innerHTML = "Vous n'avez aucun produit dans votre panier !";
            boutonAchat.classList.toggle('hidden');
        }
    });
});

if(document.querySelectorAll('.case').length === 0){
    test.innerHTML = "Vous n'avez aucun produit dans votre panier !";
    boutonAchat.classList.toggle('hidden');
}