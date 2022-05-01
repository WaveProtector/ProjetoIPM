//variáveis
const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const d = new Date();

//Ingredientes Tipicos

const carne = ["fiambre", "bife", "bifana", "frango", "salsicha"];

const tiposDeCarne = ["carne picada de bovino", "almôndegas de bovino"];

const partesVaca = ["costoleta", "lombos de vaca", "hambúrguer de bovino", "hambúrguer de bovino com picanha"];

const partesPorco = ["peito de frango", "lombos de porco", "rojões de porco"];

const partesFrango = ["bife de frango", "peitos de frango", "frango inteiro"];

const lacticinios = ["leite", "manteiga", "queijo", "natas", "coalhada", "iogurte", "molho bechamel", "margarina", "crème fraîche"];

const leite = ["leite magro", "leite meio-gordo", "leite gordo"];


const enchidos = ["presunto", "chourição", "alheira", "beloura", "butelo", "farinheira", "maranho", "morcela",
    "orelheira", "focinho de porco", "paio", "pernil", "paleta", "salpicão", "cacholeira"];

const queijos = ["ricotta", "requeijão", "mozzarella", "parmesão", "camembert", "brie", "roquefort",
    "gorgonzola", "provolone", "stilton", "cheddar", "emmental", "gruyere", "edam", "gouda", "manchego"];

const meditterânico = ["azeite", "ovos", "arroz", "farinha", "aveia", "alho", "pimenta", "salva"];

const frutas = ["limão", "maçã", "laranja", "pêra", "abacate", "abacaxi", "ananás", "açaí", "acerola", "amora", "banana",
    "cereja", "morangos", "cidra", "côco", "figo", "framboesa", "groselha", "kiwi", "lima", "manga", "maracujá",
    "melância", "melão", "tomate", "tomate seco"];

const molhos = ["ketchup", "mostarda", "maionese"];

const peixes = ["pescada", "dourada média"]

const partesSalmão = ["posta de salmão", "lombos de salmão", "salmão fumado"];

const partesPescada = ["posta de pescada", "lombos de pescada", "medalhões de pescada"];

const partesBacalhau = ["posta de bacalhau", "lombos de bacalhau"];

const especiarias = [ "pés de manjericão", "sal", "chalota"];

const grao = ["mostarda em grão"];

//ingredientes tipicos que não se encontram dentro do frigorifico
const outOfFridge = [].concat(meditterânico).concat(frutas).concat(grao).concat(especiarias);


//funções auxiliares

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

//

let carts = document.querySelectorAll("button.carrinho");

let products = [
    {
        name: 'Queijo Mozzarella',
        tag: 'queijoMozzarella',
        price: 1.69,
        inCart: 0            //depois fazer o resto para o resto dos produtos
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);


    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCartNumbers();

//Receita Tortelini

var ingredients = ["chalota", "alho", "azeite", "queijo mozzarella", "presunto", "tomate seco", "sal", "pimenta", "salva", "pés de manjericão", "mostarda em grão"];

function showPasso(p) {
    var x = document.getElementById("preparacao-passo");
    switch (p) {
        case 1:
            x.innerHTML = "Passo 1: Para os tortellini: salpique a bancada de trabalho com farinha e misture aí a farinha e o sal. Abra uma cova e acrescente o azeite e os ovos. Amasse bem com as mãos, até obter uma massa consistente e homogénea. Deixe descansar 15 minutos. Com um rolo, estenda a massa até ficar muito fina. Corte-a em pequenos círculos com cerca de 8cm, usando um corta-massas ou um copo.";
            break;
        case 2:
            x.innerHTML = "Passo 2: Para o recheio: pique finamente as chalotas e os dentes de alho e salteie-os no azeite quente até a chalota começar a murchar. Adicione o queijo Mozzarella cortado em cubos, o presunto e o tomate seco laminado.";
            break;
        case 3:
            x.innerHTML = "Passo 3: Envolva bem e tempere com metade do sal, pimenta e a salva cortada em troços finos. Retire do lume, deixe arrefecer um pouco e recheie os tortellini. Reserve.";
            break;
        case 4:
            x.innerHTML = "Passo 4: Coloque um pouco de recheio no centro dos círculos de massa e feche-os, unindo as pontas. Passe com um pouco de água nos bordos e pressione para prender melhor.";
            break;
        case 5:
            x.innerHTML = "Passo 5: Lamine o manjericão e a salva, coloque-os num tacho pequeno e adicione o azeite e a mostarda em grão. Envolva bem e leve ao lume até levantar fervura. Retire e reserve.";
            break;

        case 6:
            x.innerHTML = "Passo 6: Coza a massa em água a ferver temperada com sal durante 3 minutos ou até ficar al dente. Retire, escorra e coloque os tortellini num prato fundo. Regue-os com o molho de ervas quente. Sirva de imediato.";
            break;
    }
}

//Receitas Menu


function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("recipes");
    li = ul.getElementsByTagName("li");


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}





//Protótipo Funcional

var count = 0;

//ingredientes atualmente no frigorifico
var fridge = ["presunto"];


function changeWaterLevel() {
    var x = document.getElementById("nivel");
    count++;
    if (count == 2) {
        x.src = "water-kinda-full.png";
    }
    if (count == 4) {
        x.src = "water-mid.png";
    }
    if (count == 6) {
        x.src = "water-low.png";
    }
}



function getTimePF() {
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let wd = weekday[d.getDay()];
    let time = h + ":" + m;
    let date = d.getDate() + " de " + month[d.getMonth()];
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
    document.getElementById("weekday").innerHTML = wd;
    let t = setTimeout(function () { getTimePF() }, 1000);
}

function ingredientsMissing() {
    var table = document.getElementById("notifications");
    var frstFilter = ingredients.filter(f => !fridge.includes(f));
    var result = frstFilter.filter(f => !outOfFridge.includes(f));
    var warning = "<i class='fa-solid fa-exclamation'></i> Faltam ingredientes para a receita do jantar: -";
    for (var i = 0; i < result.length; i++) {
        var row = table.insertRow(1);
        var cell = row.insertCell(0);
        cell.innerHTML = warning.concat(result[i]);
    }
    console.log(outOfFridge);

}

//Agenda


var nodeArray = [];
var wd = d.getDay();
var currentMonth = d.getMonth();
var currentYear = d.getFullYear();
var firstDayInMonth, firstWeekday;


function correctDayStart() {
    
    var n;
    var days = document.getElementsByClassName("days")[0];
    if (firstWeekday == 0) {
        n = 6;
    }
    else
        n = firstWeekday - 1;
    for (var i = 0; i < n; i++) {
        var node = document.createElement("li");
        nodeArray.push(node);
        var textnode = document.createTextNode("");
        node.appendChild(textnode);
        days.appendChild(node);
    }
}


function getTimeSchedule() {
    firstDayInMonth = new Date(currentYear, currentMonth, 1);
    firstWeekday = firstDayInMonth.getDay();
    var daysInMonth = daysPerMonth[currentMonth];
    var days = document.getElementsByClassName("days")[0];
    for (var i = 0; i < nodeArray.length; i++) {
        days.removeChild(nodeArray[i]);
    }
    nodeArray = [];
    changeMonthAndYear();
    correctDayStart();
    if (currentMonth == 1
        && (currentYear % 100 != 0 && currentYear % 4 == 0 || currentYear % 400 == 0))
        daysInMonth = 29;
    for (var i = 1; i <= daysInMonth; i++) {
        var node = document.createElement("li");
        nodeArray.push(node);
        var textnode = document.createTextNode(i);
        node.appendChild(textnode);
        if(i == d.getDate() && currentMonth == d.getMonth() && currentYear == d.getFullYear())
            node.style.backgroundColor = blue;
        days.appendChild(node);
    }
}


function prev() {
    if (currentMonth != 0) {
        currentMonth--;
    }
    else {
        currentMonth = 11;
        currentYear--;
    }
    getTimeSchedule();

}

function next() {
    if (currentMonth != 11) {
        currentMonth++;
    }
    else {
        currentMonth = 0;
        currentYear++;
    }
    getTimeSchedule();
}

function changeMonthAndYear() {
    document.getElementsByClassName("active-month")[0].innerHTML = month[currentMonth] + " " + currentYear;
}

