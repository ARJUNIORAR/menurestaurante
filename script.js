// Dados do menu - você pode substituir pelos seus pratos
const menuItems = [
    {
        id: 1,
        name: "Burguer frango",
        description: "Pão brioche, nosso suculento blend de frango artesanal 120g , cebola caramelizada, cream cheese, salada mostarda com mel e a nossa farofa crocante.",
        price: "R$ 20,99",
        category: "artesanais",
        image: "imagens/Gemini_Generated_Image_eharg9eharg9ehar.png"
    },
    {
        id: 2,
        name: "Burguer Suino com abacaxi caramelizado",
        description: "Pão brioche, nosso blend suculento suíno de 120g, abacaxi caramelizado, cebola caramelizada, alface, cream cheese e farofa crock.",
        price: "R$ 59,90",
        category: "principais",
        image: "imagens/suino.png"
    },
    {
        id: 3,
        name: "Burguer-Simples",
        description: "Blend 120g, queijo cheddar,cebola caramelizada,bacon,alface, toamte e molho especial",
        price: "R$ 22,90",
        category: "sobremesas",
        image: "imagens/calabresa.png"
    },
    {
        id: 4,
        name: "Vinho Tinto",
        description: "Casa Seleção Malbec 2020",
        price: "R$ 35,90 (taça)",
        category: "bebidas",
        image: "images/vinho.jpg"
    },
    {
        id: 5,
        name: "Salada Caesar",
        description: "Salada com alface romana, croutons, queijo parmesão e molho Caesar",
        price: "R$ 28,90",
        category: "entradas",
        image: "images/salada.jpg"
    },
    {
        id: 6,
        name: "Risoto de Cogumelos",
        description: "Risoto cremoso com cogumelos frescos e parmesão",
        price: "R$ 42,90",
        category: "principais",
        image: "imagens/Lanchedefrango.jpeg"
    }
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