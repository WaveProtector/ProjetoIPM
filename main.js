//variáveis
const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const d = new Date();

var r0 = {
    'name':"Esparguete à Bolonhesa",
    'link': "../Receitas/EspargueteABolonhesa/EspargueteABolonhesa.html",
    'ingredients': ["esparguete", "alho", "talo de aipo", "cebola", "azeite", "carne de novilho picada", "sal", "tomate pelado em cubos", "polpa de tomate", "tomilho seco", "queijo parmesão ralado"],
    'passos': ["Num tacho, coza o esparguete em água a ferver durante 8 minutos.",
            "Retire do lume, escorra e reserve.",
            "Pique o alho, o talo de aipo e a cebola.",
            "Numa frigideira antiaderente, refogue o alho, o aipo e a cebola no azeite.",
            "Junte a carne de novilho picada, o sal e deixe cozinhar em lume médio.",
            "Acrescente o tomate pelado aos cubos, a polpa de tomate e o tomilho seco.",
            "Misture bem e deixe cozinhar mais um pouco para apurar.",
            "Sirva o esparguete coberto com o molho e polvilhe com queijo parmesão ralado."]
} 

var r1 = {
    'name': "Tortellini Com Presunto E Mozarella",
    'link': "../Receitas/TortelliniComPresuntoEMozarella/TortelliniComPresuntoEMozarella.html",
    'ingredients': ["chalota", "alho", "azeite", "queijo mozzarella", "presunto", "tomate seco", "sal", "pimenta", "salva", "pés de manjericão", "mostarda em grão"],
    'passos': ["Para os tortellini: salpique a bancada de trabalho com farinha e misture aí a farinha e o sal. Abra uma cova e acrescente o azeite e os ovos. Amasse bem com as mãos, até obter uma massa consistente e homogénea. Deixe descansar 15 minutos. Com um rolo, estenda a massa até ficar muito fina. Corte-a em pequenos círculos com cerca de 8cm, usando um corta-massas ou um copo.",
        "Para o recheio: pique finamente as chalotas e os dentes de alho e salteie-os no azeite quente até a chalota começar a murchar. Adicione o queijo Mozzarella cortado em cubos, o presunto e o tomate seco laminado.",
        "Envolva bem e tempere com metade do sal, pimenta e a salva cortada em troços finos. Retire do lume, deixe arrefecer um pouco e recheie os tortellini. Reserve.",
        "Coloque um pouco de recheio no centro dos círculos de massa e feche-os, unindo as pontas. Passe com um pouco de água nos bordos e pressione para prender melhor.",
        "Lamine o manjericão e a salva, coloque-os num tacho pequeno e adicione o azeite e a mostarda em grão. Envolva bem e leve ao lume até levantar fervura. Retire e reserve.",
        "Coza a massa em água a ferver temperada com sal durante 3 minutos ou até ficar al dente. Retire, escorra e coloque os tortellini num prato fundo. Regue-os com o molho de ervas quente. Sirva de imediato."]
}

var r2 = {
    'name': "Risotto De Cogumelos",
    'link': "../Receitas/RisottoDeCogumelos/RisottoDeCogumelos.html",
    'ingredients': ["cebola","talos de aipo","cogumelo Portobello", "azeite", "arroz para risotto", "vinho branco", "água", "sal", "queijo brie", "rúcula", "pimenta de moinho"],
    'passos': ["Descasque a cebola e pique-a finamente. Lave os talos de aipo e corte-os em lâminas finas. Limpe os cogumelos e corte-os grosseiramente.",
                "Num tacho com azeite, aloure suavemente a cebola e o aipo. Em lume brando, cozinhe cerca de 10 minutos sem deixar alourar. Acrescente o arroz.",
            "Deixe fritar, mexendo de vez em quando, até ficar translúcido. Regue com o vinho branco, adicione os cogumelos e cozinhe, mexendo frequentemente, até absorver o líquido.",
        "Ferva a água com o sal e adicione-a, a pouco e pouco, ao arroz, mexendo à medida que for sendo absorvida.",
        "Assim que o arroz estiver cozido, o que deve demorar cerca de 20 minutos, retire-o do lume, junte-lhe o queijo cortado em pedaços pequenos e as folhas de rúcula e envolva.",
        "Tempere com pimenta moída no momento e sirva sem demora."
        ]
}

var newRecipe;

var recipes = [r0,r1,r2];

//Ingredientes Tipicos

const carne = ["fiambre", "bife", "bifana", "frango", "salsicha"];

const tiposDeCarne = ["carne picada de bovino", "almôndegas de bovino", "carne de novilho picada"];

const partesVaca = ["costoleta de vaca", "lombos de vaca", "hambúrguer de bovino", "hambúrguer de bovino com picanha"];

const partesPorco = ["peito de frango", "lombos de porco", "rojões de porco"];

const partesFrango = ["bife de frango", "peitos de frango", "frango inteiro"];

const lacticinios = ["leite", "manteiga", "queijo", "natas", "coalhada", "iogurte", "molho bechamel", "margarina", "crème fraîche"];

const leite = ["leite magro", "leite meio-gordo", "leite gordo"];


const enchidos = ["presunto", "chourição", "alheira", "beloura", "butelo", "farinheira", "maranho", "morcela",
    "orelheira", "focinho de porco", "paio", "pernil", "paleta", "salpicão", "cacholeira"];

const queijos = ["queijo ricotta", "queijo requeijão", "queijo mozzarella", "queijo parmesão", "queijo camembert", "queijo brie", "queijo oquefort",
    "queijo gorgonzola", "queijo provolone", "queijo stilton", "queijo cheddar", "queijo emmental", "queijo gruyere", "queijo edam", "queijo gouda", "queijo manchego"];

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

//Estrura da Receita



//funções auxiliares

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

//Receita Tortelini



function showPasso(p, recipeName) {
    var x = document.getElementById("preparacao-passo");
    var recipeSteps;
    for(var i = 0; i < recipes.length; i++) {
        if(recipes[i].name == recipeName)
            recipeSteps = recipes[i].passos;
    }
    x.innerHTML = "Passo " + p + ": " + recipeSteps[p - 1];
}

//Receitas Menu

const searchWrapper = document.querySelector(".search-input");
console.log(searchWrapper);
const inputBox = searchWrapper.querySelector("input");
const icon = searchWrapper.querySelector(".icon");
const suggBox = searchWrapper.querySelector(".autocom-box");
const recipeBox = document.querySelector("#recipes");
var recipeNode = [];

var suggestions = ["Esparguete à bolonhesa", "Tortellini com presunto e mozzarella", "Risotto de cogumelos"];
// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function showRecipe(i) {
    var link = recipes[i].link;
    var linkNode = document.createElement("a");
    linkNode.href = link;
    var textnode = document.createTextNode(recipes[i].name);
    linkNode.appendChild(textnode);
    var node = document.createElement("li");
    node.appendChild(linkNode);
    recipeNode.push(node);
    document.getElementById("recipes").appendChild(node);
}

function showAllRecipes() {
    hideAllRecipes();
    recipeNode = [];
    for (var i = 0; i < recipes.length; i++) {
        showRecipe(i);
    }
}
console.log(recipeNode);
function hideAllRecipes() {
    for (var i = 0; i < recipeNode.length; i++) {
        if (recipeNode[i] != "") {
            document.getElementById("recipes").removeChild(recipeNode[i]);
        }
    }
    recipeNode = [];
}

function hideRecipe(i) {
    if (recipeNode[i] != "") {
        document.getElementById("recipes").removeChild(recipeNode[i]);
        recipeNode[i] == "";
    }

}

function showMeatDishes() {
    if (document.getElementById("meat").classList == "active") {
        showAllRecipes();
        document.getElementById("meat").classList.remove();
    }
    else {
        hideAllRecipes();
        var allMeats = tiposDeCarne
            .concat(partesFrango)
            .concat(partesPorco)
            .concat(partesVaca);
        for (var i = 0; i < recipes.length; i++) {
            for (var j = 0; j < recipes[i].ingredients.length; j++) {
                for (var k = 0; k < allMeats.length; k++) {
                    if (recipes[i].ingredients[j] === allMeats[k]) {
                        showRecipe(i);
                        document.getElementById("meat").classList.add("active");
                        return;
                    }
                }
            }
        }
    }
}

function showMeditteraneanDietDishes() {
    if (document.getElementById("mediterranean").classList == "active") {
        showAllRecipes();
        document.getElementById("meditteranean").classList.remove();
    }
    else {
        hideAllRecipes();
        for (var i = 0; i < recipes.length; i++) {
            for (var j = 0; j < recipes[i].ingredients.length; j++) {
                for (var k = 0; k < meditterânico.length; k++) {
                    if (recipes[i].ingredients[j] === meditterânico[k]) {
                        showRecipe(i);
                        document.getElementById("meditteranean").classList.add("active");
                        return;
                    }
                }
            }
        }
    }
}

function showMWthoutLactoseDishes() {
    if (document.getElementById("lactose").classList == "active") {
        showAllRecipes();
        document.getElementById("lactose").classList.remove();
    }
    else {
        showAllRecipes();
        var allLact = lacticinios.concat(queijos);
        for (var i = 0; i < recipes.length; i++) {
            for (var j = 0; j < recipes[i].ingredients.length; j++) {
                for (var k = 0; k < allLact.length; k++) {
                    if (recipes[i].ingredients[j] === allLact[k]) {
                        hideRecipe(i);
                        document.getElementById("lactose").classList.add("active");
                        return;
                    }
                }
            }
        }
    }
}

function showWthoutMeatDishes() {
    if (document.getElementById("vegetarian").classList == "active") {
        showAllRecipes();
        document.getElementById("vegetarian").classList.remove();
    }
    else {
        showAllRecipes();
        var allMeats = tiposDeCarne
            .concat(partesFrango)
            .concat(partesPorco)
            .concat(partesVaca)
            .concat(carne)
            .concat(enchidos);
        for (var i = 0; i < recipes.length; i++) {
            for (var j = 0; j < recipes[i].ingredients.length; j++) {
                for (var k = 0; k < allMeats.length; k++) {
                    if (recipes[i].ingredients[j] === allMeats[k]) {
                        hideRecipe(i);
                        document.getElementById("vegetarian").classList.add("active");
                        return;
                    }
                }
            }
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
        if (i == d.getDate() && currentMonth == d.getMonth() && currentYear == d.getFullYear()) {
            var spanNode = document.createElement("span");
            spanNode.classList.add("active");
            node.appendChild(spanNode);
        }
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


//Criar Receita

function createRecipe() {
    newRecipe = {
        'ingredients': [],
        'passos': []
    }
}
