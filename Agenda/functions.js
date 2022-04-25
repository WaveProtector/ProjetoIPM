const mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const diaspormes = [31,28,31,30,31,30,31,31,30,31,30,31];
const d = new Date();
var nodeArray = [];
var wd = d.getDay();
var currentmonth = d.getMonth();
var currentyear = d.getFullYear();
var daysinmonth = diaspormes[currentmonth];

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
 
function getTime() {
  changeMonthAndYear();
  for(var i = 1; i <= daysinmonth; i++) {
    var node = document.createElement("li");
    nodeArray.push(node);
    var textnode = document.createTextNode(i);
    node.appendChild(textnode);
    document.getElementsByClassName("days")[0].appendChild(node);
 } 
}

function replaceCalendar(n, diasmesanterior) {
    const daysclass = document.getElementsByClassName("days")[0];
    if(n > 0) {
        for(var i = 1; i <= n; i++) {
            var node = document.createElement("li");
            nodeArray.push(node);
            var textnode = document.createTextNode(i + diasmesanterior);
            node.appendChild(textnode);
            daysclass.appendChild(node);
        } 
    }
    else {
        for(var i = 0; i > n; i--) {
            daysclass.removeChild(nodeArray.pop());
        } 
    }
} 


function prev() {
    if(currentmonth != 0) {
        currentmonth--;
    }
    else {
        currentmonth = 11;
        currentyear--;
    }
    diferençaDias = diaspormes[currentmonth] - daysinmonth;
    replaceCalendar(diferençaDias, daysinmonth);
    daysinmonth = diaspormes[currentmonth];
    changeMonthAndYear();
}

function next() {
    if(currentmonth != 11) {
        currentmonth++;
    }
    else {
        currentmonth = 0;
        currentyear++;
    }
    diferençaDias = diaspormes[currentmonth] - daysinmonth;
    replaceCalendar(diferençaDias, daysinmonth);
    daysinmonth = diaspormes[currentmonth];
    changeMonthAndYear();
}

function changeMonthAndYear() {
    document.getElementsByClassName("active-month")[0].innerHTML =  mes[currentmonth] + " " + currentyear;
<<<<<<< HEAD
}
=======
}
>>>>>>> e7a2578250adcded014c60ba4d7347665c363056
