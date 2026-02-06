// Dados do menu - você pode substituir pelos seus pratos
const menuItems = [
    {
        id: 1,
        name: "Burguer-Calabresa",
        description: "Calabresa, blend 120g, queijo Cheddar, cebola caramelizada, alface, tomate e molho especial.",
        price: "R$ 19,99",
        category: "artesanais",
        image: "imagens/calabresa01.png"
    },
    {
        id: 2,
        name: "Burguer Suino com abacaxi caramelizado",
        description: "Pão brioche, nosso blend suculento suíno de 120g, abacaxi caramelizado, cebola caramelizada, alface, cream cheese e farofa crock.",
        price: "R$ 24,99",
        category: "artesanais",
        image: "imagens/burguersimplesabacaxi.png"
    },
    {
        id: 3,
        name: "Burguer-Simples",
        description: "Blend 120g, queijo cheddar,cebola caramelizada,bacon,alface, toamte e molho especial",
        price: "R$ 9,99",
        category: "artesanais",
        image: "imagens/simples01.png"
    },
    {
        id: 4,
        name: "Burguer-bacon",
        description: "Bacon, blend 120g, queijo cheddar, cebola caramelizada, alface, tomate e molho especial.",
        price: "R$ 35,90 (taça)",
        category: "artesanais",
        image: "imagens/bacon01.png"
    },
    {
        id: 5,
        name: "Burguer-frango",
        description: "Salada com alface romana, croutons, queijo parmesão e molho Caesar",
        price: "R$ 28,90",
        category: "artesanais",
        image: "imagens/frangosimples.png"
    },
    {
        id: 6,
        name: "Batata-frita (P)100g",
        description: "Batata frita crocante.",
        price: "R$ 6,99",
        category: "batata",
        image: "imagens/batata03.png"
    },
    {
        id: 7,
        name: "Batata-frita (M)150g",
        description: "Batata frita crocante",
        price: "R$ 9,99",
        category: "batata",
        image: "imagens/batata03.png"
    },
     {
        id: 8,
        name: "Batata-frita (G)200g",
        description: "Batata frita crocante",
        price: "R$ 13,99",
        category: "batata",
        image: "imagens/batata03.png"
    },
     {
        id: 9,
        name: "Combo-individual",
        description: "1-Burguer-simples, batata(P), refrigerante lata.",
        price: "R$ 21,99",
        category: "principais",
        image: "imagens/combo02.png"
    },
     {
        id: 10,
        name: "Combo-casal",
        description: "1-Burguer-simples, batata(M), refrigerante lata.",
        price: "R$ 31,97",
        category: "principais",
        image: "imagens/combo.png"
    },
     {
        id: 11,
        name: "Combo-familia",
        description: "4-Burguer-simples, batata(p), refrigerante lata.",
        price: "R$ 51,93",
        category: "principais",
        image: "imagens/com01.png"
    },
    {
        id: 12,
        name: "Coca-cola 1-lt",
        description: "",
        price: "R$ 9,99",
        category: "bebidas",
        image: "imagens/bebidarock.jpeg"
    },
    {
        id: 13,
        name: "Guaraná 1-lt",
        description: "",
        price: "R$ 9,99",
        category: "bebidas",
        image: "imagens/bebidarock.jpeg"
    },
    {
        id: 14,
        name: "Coca-cola (Zero) 1-lt",
        description: "",
        price: "R$ 9,99",
        category: "bebidas",
        image: "imagens/bebidarock.jpeg"
    },
    {
        id: 15,
        name: "Sprite 1-lt",
        description: "",
        price: "R$ 9,99",
        category: "bebidas",
        image: "imagens/bebidarock.jpeg"
    },
    {
        id: 16,
        name: "Coca-cola, lata",
        description: "",
        price: "R$ 5,99",
        category: "bebidas",
        image: "imagens/bebidarock.jpeg"
    },
     {
        id: 17,
        name: "Coca-cola(zero), lata",
        description: "",
        price: "R$ 5,99",
        category: "bebidas",
        image: "imagens/bebidarock.jpeg"
    },
     {
        id: 18,
        name: "Cajuina, lata",
        description: "",
        price: "R$ 5,99",
        category: "bebidas",
        image: "imagens/bebidarock.jpeg"
    },
     {
        id: 19,
        name: "Guaraná, lata",
        description: "",
        price: "R$ 5,99",
        category: "bebidas",
        image: "imagens/bebidarock.jpeg"
    },

];

// Elementos do DOM
const menuContainer = document.getElementById('menu-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const yearElement = document.getElementById('year');

// Mostrar o ano atual no footer
yearElement.textContent = new Date().getFullYear();

// Função para exibir os itens do menu
function displayMenuItems(menuItems) {
    menuContainer.innerHTML = menuItems.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">${item.price}</span>
            </div>
        </div>
    `).join('');
}

// Função para filtrar os itens do menu
function filterMenu(category) {
    if (category === 'all') {
        displayMenuItems(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenuItems(filteredItems);
    }
}

// Event listeners para os botões de filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe 'active' apenas ao botão clicado
        btn.classList.add('active');
        // Filtra o menu
        const category = btn.dataset.category;
        filterMenu(category);
    });
});

// Inicializa o menu mostrando todos os itens
displayMenuItems(menuItems);