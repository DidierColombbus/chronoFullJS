let body = document.body;

body.style.boxSizing = 'border-box';
body.style.margin = '0';
body.style.padding = '0';

let main = document.createElement('main');

main.id = 'container';
main.style.background = '#0F8588';
main.style.width = '30vw';
main.style.height = '20vw';
main.style.position = 'relative';
main.style.borderRadius = '3vw';
main.style.textAlign = 'center';
main.style.display = 'flex';
main.style.flexDirection = "column";
main.style.justifyContent = 'center';
main.style.alignItems = 'center';
main.style.left = '35vw';

body.append(main);

let afficheur = document.createElement('div');

afficheur.style.width = '25vw';
afficheur.style.height = '5vw';
afficheur.style.backgroundColor = 'white';
afficheur.style.borderRadius = '0.5vw';
afficheur.style.fontSize = "3vw";

main.append(afficheur);

let date = document.createElement('h4');

// date.textContent = "C'est la date d'aujourd'hui!";
date.style.color = "white";
date.style.fontSize = "1.5vw";

main.prepend(date);

let buttons = document.createElement('div');

buttons.style.width = '25vw';
buttons.style.height = '5vw';
buttons.style.background = '#0F8588';
buttons.style.display = 'flex';
buttons.style.justifyContent = 'space-around';
buttons.style.alignItems = 'center';

main.append(buttons);

let bouton1 = document.createElement('button');

bouton1.style.width = '6vw';
bouton1.style.height = '2vw';
bouton1.style.background = 'white';
bouton1.innerHTML = "Marche/Arrêt";
bouton1.style.fontSize = '0.7vw';

buttons.prepend(bouton1);

let bouton2 = document.createElement('button');

bouton2.style.width = '5vw';
bouton2.style.height = '2vw';
bouton2.style.background = 'white';
bouton2.innerHTML = "Lap";
bouton2.style.fontSize = '0.7vw';

buttons.append(bouton2);

let bouton3 = document.createElement('button');

bouton3.style.width = '5vw';
bouton3.style.height = '2vw';
bouton3.style.background = 'white';
bouton3.innerHTML = "Reset";
bouton3.style.fontSize = '0.7vw';

buttons.append(bouton3);

let laptimer = document.createElement('div');

laptimer.innerText = "Temps intermédiaires";
laptimer.style.width = '25vw';
laptimer.style.height = '3vw';
laptimer.style.borderRadius = '0.5vw';
laptimer.style.background = 'white';
laptimer.style.fontSize = "2vw";

main.append(laptimer);

let intervalId = setInterval(dispHeure, 1000);

function dispHeure() {
    let date1 = new Date();

    // on formatte la date "jeu. 14 avril 2022, 16:21:20"
    // dateLocale est 1 variable String
    let dateLocale = date1.toLocaleString('fr-FR',{
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});

    // on insère "dateLocale" dans l'élément h4
    date.textContent = dateLocale;
}

bouton1.addEventListener("click", timer);
bouton2.addEventListener("click", lapTimer);
bouton3.addEventListener("click", pause);

let dec = sec = min = heu = 0 ;
let intervalIdChrono = null;

function timer() {
    if(intervalIdChrono == null) { // le chrono est arrêté
      intervalIdChrono = setInterval(function () {
        afficheur.textContent = heu + " : " + min + " : " + sec + " . " + dec;
        dec += 1;
        // (dec >= 10) ? dec = 0 : sec++
        if (dec >= 10) {
          dec = 0;
          sec += 1;
        }
        if (sec >= 60) {
          sec = 0;
          min += 1;
        }
        if (min >= 60) {
          min = 0;
          heu += 1;
        }
      }, 100);
    } else {
      clearInterval(intervalIdChrono);
      intervalIdChrono = null;    
    }
  }

  function pause() {
    clearInterval(intervalIdChrono);
    intervalIdChrono = null
    dec = sec = min = heu = 0 
    afficheur.textContent = heu + " : " + min + " : " + sec + " . " + dec;
  }
  
  function lapTimer() {
    laptimer.innerHTML += heu + " : " + min + " : " + sec + " . " + dec + "<br>";
    laptimer.style.overflow = 'scroll';
  }





