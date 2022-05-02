let carts = document.querySelectorAll('.carrinho');

let products = [
    {
        name: 'Queijo Mozzarella',
        tag: 'queijoMozzarella',
        price: 1,
        inCart: 0            
    },
    {
        name: 'Azeite',
        tag: 'azeite',
        price: 2,
        inCart: 0
    },
    {
        name: 'Cebola Chalota',
        tag: 'chalota',
        price: 1,
        inCart: 0
    },
    {
        name: 'Alho',
        tag: 'alho',
        price: 2,
        inCart: 0
    },
    {
        name: 'Presunto Fatiado',
        tag: 'presunto',
        price: 3,
        inCart: 0
    },
    {
        name: 'Tomate Seco',
        tag: 'tomate',
        price: 1,
        inCart: 0
    },
    {
        name: 'Sal Grosso',
        tag: 'sal',
        price: 1,
        inCart: 0
    },
    {
        name: 'Pimenta Preta',
        tag: 'pimenta',
        price: 1,
        inCart: 0
    },
    {
        name: 'Manjericão',
        tag: 'manjericao',
        price: 2,
        inCart: 0
    },
    {
        name: 'Mostarda em Grão em Frasco',
        tag: 'mostardaGrao',
        price: 2,
        inCart: 0            //depois fazer o resto para o resto dos produtos
    }
];

for (let i=0; i < products.length; i++) {
    if(carts[0] != null && carts[0].name.includes(i)) {
        carts[0].addEventListener('click', () => {
            cartNumbers(products[i])
            totalCost(products[i])
        });
    }
}

document.getElementsByClassName("btn +").onclick = addsToCart();
document.getElementsByClassName("btn -").onclick = subtractsToCart();

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers && document.querySelector('.cart span') != null) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

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

function buysEverything() {
    localStorage.clear();
    document.location.reload();
}

function addsToCart() {
    
}

function subtractsToCart() {

}

onLoadCartNumbers();
displayCart();