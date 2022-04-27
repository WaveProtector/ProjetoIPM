var count = 0;
const mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function changeWaterLevel() {
    var x = document.getElementById("nivel");
    count++;
    if(count == 2) {
        x.src = "water-kinda-full.png";
    }
    if(count == 4) {
        x.src = "water-mid.png";
    }
    if(count == 6) {
        x.src = "water-low.png";
    }
}


function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
 
function getTime() {
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let wd = d.getDay();
  switch (wd) {
        case 0:
            wd = "Domingo";
            break;
        case 1:
            wd = "Segunda-Feira";
            break;
        case 2:
            wd = "Terça-Feira";
            break;
        case 3:
            wd = "Quarta-Feira";
            break;
        case 4:
            wd = "Quinta-Feira";
            break;
        case 5:
            wd = "Sexta-Feira";
            break;
        case 6:
            wd = "Sábado";
  }
  let time = h + ":" + m;
  let date = d.getDate() + " de " + mes[d.getMonth()]; 
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
  document.getElementById("weekday").innerHTML = wd;
}