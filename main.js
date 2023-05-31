
const dod = document.getElementById("dod");
const ode = document.getElementById("ode");
const mno = document.getElementById("mno");
const dzi = document.getElementById("dzi");

const cyfra1 = document.getElementById("cyfra1");
const operator = document.getElementById("operator");
const cyfra2 = document.getElementById("cyfra2");
const wynik = document.getElementById("wynik");

const wybraneDzialanie = document.getElementById("wybraneDzialanie");

const listdod = document.getElementById("listdod");
const listode = document.getElementById("listode");
const listmno = document.getElementById("listmno");
const listdzi = document.getElementById("listdzi");

const button = document.getElementById("button");

let liczba1; //= (Math.floor(Math.random()*10+1));
let liczba2; //= (Math.floor(Math.random()*10+1)); 
let wynikDzialania;
let historia;

let i = 0;
let j = 0;
let k = 0;
let l = 0;

dod.addEventListener("click", dodawanie);
ode.addEventListener("click", odejmowanie);
mno.addEventListener("click", mnozenie);
dzi.addEventListener("click", dzielenie);
button.addEventListener("click", sprawdz);

// wybór operacji zależny od operatora działania
const operacje = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      ':': (a, b) => a / b
}

// wydzielony powtarzający się kod do osobnej funkcji
function bazaObliczen(baza, oprtr, baza2 = null) {
      const mnoznikLiczby1 = baza2 ?? baza; // przypadek dla dzielenia, jeżeli druga baza mnożenia nie jest ustalona (null), wartością jest podstawowa liczba
      liczba1 = (Math.floor(Math.random() * mnoznikLiczby1 + 1));
      liczba2 = (Math.floor(Math.random() * baza + 1)); 
      cyfra1.innerHTML = liczba1;
      operator.innerHTML = oprtr;
      cyfra2.innerHTML = liczba2;
      wynikDzialania = operacje[oprtr](liczba1, liczba2); // wyciągnięcie funkcji arytmetycznej z obiektu operacje
      historia = `${liczba1} ${oprtr} ${liczba2} = ${wynikDzialania}` // uprościłem zapis tekstu z wieloma parametrami, jeżeli jest Pan ciekawy proszę sobie wyszukać "interpolacja js"

}

function dodawanie() {
      bazaObliczen(10, '+');
}

function odejmowanie() {
      bazaObliczen(10, '-');
      if (wynikDzialania < 0) {
            odejmowanie();
      }
}

function mnozenie() {
      bazaObliczen(10, '*');
}

function dzielenie() {
      bazaObliczen(10, ':', 20);
      
      if  (liczba1 % liczba2 !== 0) {
            dzielenie();
      }
}

function sprawdz() {
      var value = Number(wynik.value); //Bardzo ważne!!! Bez tego nie odczyta wpisanej wartości

      sprawdzOdpowiedz();  
      sprawdzKoniecSprawdzianiu();
      noweDzialanie();

      // konkretne etapy funkcji wydzielone do mniejszych funkcji, poprawia to znacząco czytelność
      
      function sprawdzOdpowiedz() {
            if (value == wynikDzialania) {
                  i++, k++;
                  wybraneDzialanie.innerHTML = "Bardzo dobrze!!!";
                  var li = document.createElement("li");
                  listdod.appendChild(li);
                  listdod.lastChild.innerHTML = i + ": " + historia; //liczba1 + operator + liczba2 + " = " + wynik.value;
            } else {
                  l++;
                  wybraneDzialanie.innerHTML = "Spróbuj jeszcze raz!";
            }
            j++;
            wynik.value = ''; // czyszczenie pola odpowiedzi po sprawdzeniu
      }

      function sprawdzKoniecSprawdzianiu() {
            if (j == 10 && k == 10) {
                  wybraneDzialanie.innerHTML = "Koniec sprawdzianu! Zrobiłaś wszystkie zadania bezbłędnie! Brawo Milka!!!";
            } else if (k == 10 && l > 0) {
                  wybraneDzialanie.innerHTML = "Brawo, to już koniec! Zrobiłaś wszystkie zadania, pomyliłaś się tylko " + l + " razy!" 
            }
      }

      function noweDzialanie() {
            const wyborDzialania = (Math.floor(Math.random()*4+1));
            switch(wyborDzialania) {
            case 1:
                  dodawanie()
                  break;
            case 2:
                  odejmowanie()
                  break;
            case 3:
                  mnozenie()
                  break;
            case 4:
                  dzielenie()
                  break;
            default:
                dodawanie();
            }
      }
}
