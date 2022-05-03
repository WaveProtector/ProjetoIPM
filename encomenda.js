//Todos os botões de encomendar
let carts = document.querySelectorAll('.carrinho');

//todos os produtos listados
let products = [
    {
        name: 'Queijo Mozzarella',
        tag: 'queijoMozzarella',
        link: '../Produtos/QueijoMozzarellaDeBufala/QueijoMozzarellaDeBufala.html',
        price: 1,
        inCart: 0            
    },
    {
        name: 'Azeite',
        tag: 'azeite',
        link: '../Produtos/Azeite/Azeite.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Cebola Chalota',
        tag: 'chalota',
        link: '../Produtos/Chalota/chalota.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Alho',
        tag: 'alho',
        link: '../Produtos/Alho/alho.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Presunto Fatiado',
        tag: 'presunto',
        link: '../Produtos/Presunto/presunto.html',
        price: 3,
        inCart: 0
    },
    {
        name: 'Tomate Seco',
        tag: 'tomate',
        link: '../Produtos/Tomate/tomate.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Sal Grosso',
        tag: 'sal',
        link: '../Produtos/Sal/sal.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Pimenta Preta',
        tag: 'pimenta',
        link: '../Produtos/Pimenta/pimenta.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Manjericão',
        tag: 'manjericao',
        link: '../Produtos/Manjericão/manjericao.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Mostarda em Grão em Frasco',
        tag: 'mostardaGrao',
        link: '../Produtos/Mostarda Grão/mostardaGrao.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Cogumelo Portobello',
        tag: 'cogumeloPortobello',
        link: '../Produtos/Cogumelo Portobello/cogumeloPortobello.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Aipo',
        tag: 'aipo',
        link: '../Produtos/Aipo/aipo.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Arroz Risotto',
        tag: 'arrozRisotto',
        link: '../Produtos/Arroz Risotto/arrozRisotto.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Vinho Branco',
        tag: 'vinhoBranco',
        link: '../Produtos/Vinho Branco/vinhoBranco.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Queijo Brie',
        tag: 'queijoBrie',
        link: '../Produtos/Queijo Brie/queijoBrie.html',
        price: 3,
        inCart: 0
    },
    {
        name: 'Rúcula Selvagem',
        tag: 'ruculaSelvagem',
        link: '../Produtos/Rúcula Selvagem/ruculaSelvagem.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Água',
        tag: 'agua',
        link: '../Produtos/Água/agua.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Massa Esparguete',
        tag: 'massaEsparguete',
        link: '../Produtos/Massa Esparguete/massaEsparguete.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Carne de Bovilho Picada',
        tag: 'carneBovilhoPicada',
        link: '../Produtos/Carne de Bovilho Picada/carneBovilhoPicada.html',
        price: 4,
        inCart: 0
    },
    {
        name: 'Tomate em Cubos',
        tag: 'tomateCubos',
        link: '../Produtos/Tomate em Cubos/tomateCubos.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Polpa de Tomate',
        tag: 'polpaTomate',
        link: '../Produtos/Polpa de Tomate/polpaTomate.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Tomilho',
        tag: 'tomilho',
        link: '../Produtos/Tomilho/tomilho.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Queijo Parmesão Ralado',
        tag: 'queijoParmesao',
        link: '../Produtos/Queijo Parmesão Ralado/queijoParmesao.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Tiras de Bacon',
        tag: 'tirasBacon',
        link: '../Produtos/Tiras de Bacon/tirasBacon.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Espinafre',
        tag: 'espinafre',
        link: '../Produtos/Espinafre/espinafre.html',
        price: 3,
        inCart: 0
    },
    {
        name: 'Massa Lasanha',
        tag: 'massaLasanha',
        link: '../Produtos/Massa Lasanha/massaLasanha.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Molho Bechamel',
        tag: 'bechamel',
        link: '../Produtos/Molho Bechamel/bechamel.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Batata Vermelha',
        tag: 'batata',
        link: '../Produtos/Batata/batata.html',
        price: 3,
        inCart: 0
    },
    {
        name: 'Cenoura',
        tag: 'cenoura',
        link: '../Produtos/Cenoura/cenoura.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Brócolos',
        tag: 'brocolos',
        link: '../Produtos/Brócolos/brocolos.html',
        price: 2,
        inCart: 0
    },
    {
        name: 'Ervilhas',
        tag: 'ervilhas',
        link: '../Produtos/Ervilhas/ervilhas.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Atum',
        tag: 'atum',
        link: '../Produtos/Atum/atum.html',
        price: 1,
        inCart: 0
    },
    {
        name: 'Maionese',
        tag: 'maionese',
        link: '../Produtos/Maionese/maionese.html',
        price: 3,
        inCart: 0
    },
    {
        name: 'Ovos',
        tag: 'ovos',
        link: '../Produtos/Ovos/ovos.html',
        price: 2,
        inCart: 0
    }

];

//verifica qual o botão carregado, ou seja, que produto foi selecionado para encomendar
for (let i=0; i < products.length; i++) {
    if(carts[0] != null && carts[0].name == i) {
        carts[0].addEventListener('click', () => {
            cartNumbers(products[i])
            totalCost(products[i])
        });
    }
}

//Atualiza o número de produtos dentro do carrinho ao fazer reload à página
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers && document.querySelector('.cart span') != null) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

//Determina o número de produtos dentro do carrinho
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

//Coloca os produtos no carrinho
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//Calcula o custo total de todos os produtos no carrinho
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartCost);
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + (product.price * product.inCart));
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

//Faz com que os produtos que estão no carrinho apareçam na página "Minhas Encomendas"
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-items");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-items">
                <div class="item">
                    <img src="../Produtos/images/${item.tag}.jpg">
                    <div class="about">
                        <div class="count">${item.name}</div>
                    </div>
                    <div class="counter">
                        <div class="btn +">+</div>
                        <span>${item.inCart}</span>
                        <div class="btn -">-</div>
                    </div>
                    <div class="price">
                        <div class="amount">€${item.inCart * item.price}</div>
                    </div>
                </div>
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Total
                </h4>
                <h4 class="basketTotal">
                    €${cartCost}
                </h4>
        `;
    }
    
}

//Simula a encomenda de todos os produtos dentro do carrinho
function buysEverything() {
    localStorage.clear();
    document.location.reload();
}

var li;

function searchEM() {
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

function insertRecipesEM() {
    var node, textNode, linkNode, link;
    if(products.length == 0) {
        node = document.createElement("li");
        textNode = document.createTextNode("Nenhum.");
        document.getElementsByTagName("ul")[1].appendChild(node);
    }
    for (var i = 0; i < products.length; i++) {
        node = document.createElement("li");
        link = products[i].link;
        linkNode = document.createElement("a");
        linkNode.href = link;
        textNode = document.createTextNode(products[i].name);
        linkNode.appendChild(textNode);
        node.appendChild(linkNode);
        document.getElementsByTagName("ul")[1].appendChild(node);
    }
    li = document.getElementsByTagName("ul")[1].getElementsByTagName("li");
}

onLoadCartNumbers();
displayCart();