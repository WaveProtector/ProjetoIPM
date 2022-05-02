//variáveis
const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const d = new Date();

//Ingredientes Tipicos

const carne = ["fiambre", "bife", "bifana", "frango", "salsicha"];

const tiposDeCarne = ["carne picada de bovino", "almôndegas de bovino", "carne de novilho picada"];

const partesVaca = ["costoleta", "lombos de vaca", "hambúrguer de bovino", "hambúrguer de bovino com picanha"];

const partesPorco = ["peito de frango", "lombos de porco", "rojões de porco"];

const partesFrango = ["bife de frango", "peitos de frango", "frango inteiro"];

const lacticinios = ["leite", "manteiga", "queijo", "natas", "coalhada", "iogurte", "molho bechamel", "margarina", "crème fraîche"];

const leite = ["leite magro", "leite meio-gordo", "leite gordo"];


const enchidos = ["presunto", "chourição", "alheira", "beloura", "butelo", "farinheira", "maranho", "morcela",
    "orelheira", "focinho de porco", "paio", "pernil", "paleta", "salpicão", "cacholeira"];

const queijos = ["queijo ricotta", "queijo requeijão", "queijo mozzarella", "queijo parmesão", "queijo camembert", "queijo brie", "queijo roquefort",
    "queijo gorgonzola", "queijo provolone", "queijo stilton", "queijo cheddar", "queijo emmental", "queijo gruyere", "queijo edam", "queijo gouda",
     "queijo manchego", "queijo parmesão ralado"];

const meditterânico = ["azeite", "ovos", "arroz", "farinha", "aveia", "alho", "pimenta", "salva"];

const frutas = ["limão", "maçã", "laranja", "pêra", "abacate", "abacaxi", "ananás", "açaí", "acerola", "amora", "banana",
    "cereja", "morangos", "cidra", "côco", "figo", "framboesa", "groselha", "kiwi", "lima", "manga", "maracujá",
    "melância", "melão", "tomate", "tomate seco"];

const molhos = ["ketchup", "mostarda", "maionese"];

const peixes = ["pescada", "dourada média"]

const partesSalmão = ["posta de salmão", "lombos de salmão", "salmão fumado"];

const partesPescada = ["posta de pescada", "lombos de pescada", "medalhões de pescada"];

const partesBacalhau = ["posta de bacalhau", "lombos de bacalhau"];

const especiarias = ["pés de manjericão", "sal", "chalota"];

const grao = ["mostarda em grão"];

//ingredientes tipicos que não se encontram dentro do frigorifico
const outOfFridge = [].concat(meditterânico).concat(frutas).concat(grao).concat(especiarias);

var r0 = {
    'name': "Esparguete à Bolonhesa",
    'link': "../Receitas/EspargueteABolonhesa/EspargueteABolonhesa.html",
    'ingredients': ["esparguete", "alho", "talo de aipo", "cebola", "azeite", "carne de novilho picada", "sal", "tomate pelado em cubos", "polpa de tomate", "tomilho seco", "queijo parmesão ralado"],
    'passos': ["Num tacho, coza o esparguete em água a ferver durante 8 minutos.",
        "Retire do lume, escorra e reserve.",
        "Pique o alho, o talo de aipo e a cebola.",
        "Numa frigideira antiaderente, refogue o alho, o aipo e a cebola no azeite.",
        "Junte a carne de novilho picada, o sal e deixe cozinhar em lume médio.",
        "Acrescente o tomate pelado aos cubos, a polpa de tomate e o tomilho seco.",
        "Misture bem e deixe cozinhar mais um pouco para apurar.",
        "Sirva o esparguete coberto com o molho e polvilhe com queijo parmesão ralado."],
        'refeicao': []
}

var r1 = {
    'name': "Tortellini Com Presunto e Mozarella",
    'link': "../Receitas/TortelliniComPresuntoEMozarella/TortelliniComPresuntoEMozarella.html",
    'ingredients': ["chalota", "alho", "azeite", "queijo mozzarella", "presunto", "tomate seco", "sal", "pimenta", "salva", "pés de manjericão", "mostarda em grão"],
    'passos': ["Para os tortellini: salpique a bancada de trabalho com farinha e misture aí a farinha e o sal. Abra uma cova e acrescente o azeite e os ovos. Amasse bem com as mãos, até obter uma massa consistente e homogénea. Deixe descansar 15 minutos. Com um rolo, estenda a massa até ficar muito fina. Corte-a em pequenos círculos com cerca de 8cm, usando um corta-massas ou um copo.",
        "Para o recheio: pique finamente as chalotas e os dentes de alho e salteie-os no azeite quente até a chalota começar a murchar. Adicione o queijo Mozzarella cortado em cubos, o presunto e o tomate seco laminado.",
        "Envolva bem e tempere com metade do sal, pimenta e a salva cortada em troços finos. Retire do lume, deixe arrefecer um pouco e recheie os tortellini. Reserve.",
        "Coloque um pouco de recheio no centro dos círculos de massa e feche-os, unindo as pontas. Passe com um pouco de água nos bordos e pressione para prender melhor.",
        "Lamine o manjericão e a salva, coloque-os num tacho pequeno e adicione o azeite e a mostarda em grão. Envolva bem e leve ao lume até levantar fervura. Retire e reserve.",
        "Coza a massa em água a ferver temperada com sal durante 3 minutos ou até ficar al dente. Retire, escorra e coloque os tortellini num prato fundo. Regue-os com o molho de ervas quente. Sirva de imediato."],
        'refeicao': []
}

var r2 = {
    'name': "Risotto De Cogumelos",
    'link': "../Receitas/RisottoDeCogumelos/RisottoDeCogumelos.html",
    'ingredients': ["cebola", "talos de aipo", "cogumelo Portobello", "azeite", "arroz para risotto", "vinho branco", "água", "sal", "queijo brie", "rúcula", "pimenta de moinho"],
    'passos': ["Descasque a cebola e pique-a finamente. Lave os talos de aipo e corte-os em lâminas finas. Limpe os cogumelos e corte-os grosseiramente.",
        "Num tacho com azeite, aloure suavemente a cebola e o aipo. Em lume brando, cozinhe cerca de 10 minutos sem deixar alourar. Acrescente o arroz.",
        "Deixe fritar, mexendo de vez em quando, até ficar translúcido. Regue com o vinho branco, adicione os cogumelos e cozinhe, mexendo frequentemente, até absorver o líquido.",
        "Ferva a água com o sal e adicione-a, a pouco e pouco, ao arroz, mexendo à medida que for sendo absorvida.",
        "Assim que o arroz estiver cozido, o que deve demorar cerca de 20 minutos, retire-o do lume, junte-lhe o queijo cortado em pedaços pequenos e as folhas de rúcula e envolva.",
        "Tempere com pimenta moída no momento e sirva sem demora."],
        'refeicao': []
}

var recipes = [r0, r1, r2];
//funções auxiliares

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

//Receitas

var ingredients = ["chalota", "alho", "azeite", "queijo mozzarella", "presunto", "tomate seco", "sal", "pimenta", "salva", "pés de manjericão", "mostarda em grão"];

function showPasso(p, recipeName) {
    var x = document.getElementById("preparacao-passo");
    for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].name == recipeName)
            x.innerHTML = "Passo " + p + ": " + recipes[i].passos[p - 1];
    }
}


function checkBreakfast(recipeName) {
    if(confirm("Deseja comer esta refeição ao pequeno-almoço?")) {
        for(var i = 0; i < recipes.length; i++) {
            if(recipes[i].name === recipeName) {
                recipes[i].refeicao.push("Pequeno-almoço");
                document.getElementById("pequeno-almoco").disabled = true;
                console.log(recipes[i].refeicao);
            }
        }
    }
}

function checkLunch(recipeName) {
    if(confirm("Deseja comer esta refeição ao almoço?")) {
        for(var i = 0; i < recipes.length; i++) {
            if(recipes[i].name === recipeName) {
                recipes[i].refeicao.push("Almoço");
                document.getElementById("almoco").disabled = true;
            }
        }
    }
}

function checkSnack(recipeName) {
    if(confirm("Deseja comer esta refeição ao lanche?")){
        for(var i = 0; i < recipes.length; i++) {
            if(recipes[i].name === recipeName) {
                recipes[i].refeicao.push("Lanche");
                document.getElementById("lanche").disabled = true;
            }
        }
    }
}

function checkDinner(recipeName) {
    if(confirm("Deseja comer esta refeição ao jantar?")){
        for(var i = 0; i < recipes.length; i++) {
            if(recipes[i].name === recipeName) {
                recipes[i].refeicao.push("Jantar");
                document.getElementById("jantar").disabled = true;
            }
        }
    }
}

function setRefeicao(recipeName) {
    for(var i = 0; i < recipes.length; i++) {
        if(recipeName == recipes[i].name) {

        }
    }
}


//Receitas Menu
var ul, li, a, i;
function search() {
    var input, filter;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function insertRecipesInUl() {
    var node, textNode, linkNode, link;
    for (var i = 0; i < recipes.length; i++) {
        node = document.createElement("li");
        link = recipes[i].link;
        linkNode = document.createElement("a");
        linkNode.href = link;
        textNode = document.createTextNode(recipes[i].name);
        linkNode.appendChild(textNode);
        node.appendChild(linkNode);
        document.getElementById("recipes").appendChild(node);
    }
    ul = document.getElementById("recipes");
    li = document.getElementsByTagName("li");
}

function showAllRecipes() {
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "";
    }
}

function hideAllRecipes() {
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "none";
    }
}


function showMeatDishes() {
    var check;
    var allMeats = tiposDeCarne
        .concat(partesFrango)
        .concat(partesPorco)
        .concat(partesVaca);
    hideAllRecipes();
    for (var i = 0; i < recipes.length; i++) {
        check = 0;
        for (var j = 0; j < recipes[i].ingredients.length && check == 0; j++) {
            for (var k = 0; k < allMeats.length && check == 0; k++) {
                if (recipes[i].ingredients[j] === allMeats[k]) {
                    li[i].style.display = "";
                }
            }
        }
    }
}

function showMeditteraneanDietDishes() {
    var check;
    hideAllRecipes();
    for (var i = 0; i < recipes.length; i++) {
        check = 0;
        for (var j = 0; j < recipes[i].ingredients.length && check == 0; j++) {
            for (var k = 0; k < meditterânico.length && check == 0; k++) {
                if (recipes[i].ingredients[j] === meditterânico[k]) {
                    li[i].style.display = "";
                    check = 1;
                }
            }
        }
    }
}

function showMWthoutLactoseDishes() {
    showAllRecipes();
    var check;
    var allLact = lacticinios.concat(queijos);
    for (var i = 0; i < recipes.length; i++) {
        check = 0;
        for (var j = 0; j < recipes[i].ingredients.length && check == 0; j++) {
            for (var k = 0; k < allLact.length && check == 0; k++) {
                if (recipes[i].ingredients[j] === allLact[k]) {
                    li[i].style.display = "none";
                    check = 1;
                }
            }
        }
    }
}

function showWthoutMeatDishes() {
    showAllRecipes();
    var check;
    var allMeats = tiposDeCarne
        .concat(partesFrango)
        .concat(partesPorco)
        .concat(partesVaca)
        .concat(carne)
        .concat(enchidos);
    for (var i = 0; i < recipes.length; i++) {
        check = 0;
        for (var j = 0; j < recipes[i].ingredients.length && check == 0; j++) {
            for (var k = 0; k < allMeats.length && check == 0; k++) {
                if (recipes[i].ingredients[j] === allMeats[k]) {
                    li[i].style.display = "none";
                }
            }
        }
    }
}


//Encomendas Menu

function ingredientsMissingEM() {
    var ul = document.getElementById("notifications");
    var fridge = ["presunto"];
    var ingredients = recipes[1].ingredients;
    var frstFilter = ingredients.filter(f => !fridge.includes(f));
    var result = frstFilter.filter(f => !outOfFridge.includes(f));
    if (result.length == 0) {
        ul.appendChild("Nenhum.");
    }
    for (var j = 0; j < result.length; j++) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(result[j]);
        node.appendChild(textnode);
        ul.appendChild(node);
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
    document.getElementById("date").style.display = "";
    document.getElementById("weekday").innerHTML = wd;
    let t = setTimeout(function () { getTimePF() }, 1000);
}

function ingredientsMissingPF() {
    var table = document.getElementById("notifications");
    var fridge = ["presunto"];
    var ingredients = recipes[1].ingredients;
    var frstFilter = ingredients.filter(f => !fridge.includes(f));
    var result = frstFilter.filter(f => !outOfFridge.includes(f));
    var warning = "<i class='fa-solid fa-exclamation'></i> Faltam ingredientes para a receita do jantar: -";
    for (var j = 0; j < result.length; j++) {
        var row = table.insertRow(1);
        var cell = row.insertCell(0);
        cell.innerHTML = warning.concat(result[j]);
    }
}

function registerMealPF() {
    var table = document.getElementById("notifications");
    var refeicao = recipes[0].refeicao;
    var warning = "<i class='fa-solid fa-calendar'></i> Refeição planeada para: ";
    //for (var j = 0; j < result.length; j++) {
        var row = table.insertRow(1);
        var cell = row.insertCell(0);
        cell.innerHTML = warning.concat(refeicao);
    //}
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

var notes = [];

function putInNotes() {
    var text = document.getElementById("textInput").value;
    document.getElementById("textInput").value = "";
    var node = document.createElement("li");
    var textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById("notes").appendChild(node);
    notes.push(text);
    localStorage.setItem("agendaNotes", notes);
}

function printNotes() {
    var notes = localStorage.getItem("agendaNotes");
    
    for(var i = 0; i < notes.length; i++) {
        var node = document.createElement("li");
    var textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById("notes").appendChild(node);
    }
}
