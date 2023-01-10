
var dod = document.getElementById("dod");
var ode = document.getElementById("ode");
var mno = document.getElementById("mno");
var dzi = document.getElementById("dzi");

var cyfra1 = document.getElementById("cyfra1");
var operator = document.getElementById("operator");
var cyfra2 = document.getElementById("cyfra2");
var wynik = document.getElementById("wynik");

var wybraneDzialanie = document.getElementById("wybraneDzialanie");

var listdod = document.getElementById("listdod");
var listode = document.getElementById("listode");
var listmno = document.getElementById("listmno");
var listdzi = document.getElementById("listdzi");

var liczba1; //= (Math.floor(Math.random()*10+1));
var liczba2; //= (Math.floor(Math.random()*10+1)); 
var wynikDzialania;
var historia;
var button = document.getElementById("button");
var i = 0;
var j = 0;
var k = 0;
var l = 0;

dod.addEventListener ("click",dodawanie);
ode.addEventListener ("click",odejmowanie);
mno.addEventListener ("click",mnozenie);
dzi.addEventListener ("click",dzielenie);
button.addEventListener ("click",sprawdz);

function dodawanie()
{
liczba1 = (Math.floor(Math.random()*10+1));
liczba2 = (Math.floor(Math.random()*10+1)); 
cyfra1.innerHTML = liczba1;
operator.innerHTML = "+";
cyfra2.innerHTML = liczba2;
wynikDzialania = liczba1 + liczba2;
historia = liczba1 + " + " + liczba2 + " = " + wynikDzialania;
}

function odejmowanie()
{
liczba1 = (Math.floor(Math.random()*10+1));
liczba2 = (Math.floor(Math.random()*10+1)); 
cyfra1.innerHTML = liczba1;
operator.innerHTML = "-";
cyfra2.innerHTML = liczba2;
wynikDzialania = liczba1 - liczba2;
historia = liczba1 + " - " + liczba2 + " = " + wynikDzialania;
    if (wynikDzialania<0) {
      odejmowanie();
    }
}

function mnozenie()
{
liczba1 = (Math.floor(Math.random()*10+1));
liczba2 = (Math.floor(Math.random()*10+1)); 
cyfra1.innerHTML = liczba1;
operator.innerHTML = "*";
cyfra2.innerHTML = liczba2;
wynikDzialania = liczba1*liczba2;
historia = liczba1 + " * " + liczba2 + " = " + wynikDzialania;
}

function dzielenie()
{
liczba1 = (Math.floor(Math.random()*20+1));
liczba2 = (Math.floor(Math.random()*10+2)); 
cyfra1.innerHTML = liczba1;
operator.innerHTML = ":";
cyfra2.innerHTML = liczba2;
wynikDzialania = liczba1 / liczba2; 
historia = liczba1 + " : " + liczba2 + " = " + wynikDzialania;
    if  (liczba1 % liczba2 !== 0) {
      dzielenie();
    }
}

function sprawdz()
{
  var value = Number(wynik.value); //Bardzo ważne!!! Bez tego nie odczyta wpisanej wartości 
          if (value == wynikDzialania)
          {
            i++, k++;
            wybraneDzialanie.innerHTML = "Bardzo dobrze!!!";
            var li = document.createElement("li");
            listdod.appendChild(li);
            listdod.lastChild.innerHTML = i + ": " + historia;//liczba1 + operator + liczba2 + " = " + wynik.value;
          } 
          else 
          {
            l++
            wybraneDzialanie.innerHTML = "Spróbuj jeszcze raz!";
          }
            j++;
                  if (j == 10 && k == 10) {
                        wybraneDzialanie.innerHTML = "Koniec sprawdzianu! Zrobiłaś wszystkie zadania bezbłędnie! Brawo Milka!!!";
                  } else if (k == 10 && l > 0) {
                        wybraneDzialanie.innerHTML = "Brawo, to już koniec! Zrobiłaś wszystkie zadania, pomyliłaś się tylko " + l + " razy!" 
                  }
          var wyborDzialania = (Math.floor(Math.random()*4+1));
          switch(wyborDzialania) 
          {
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






