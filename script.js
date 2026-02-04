// Dados do menu - você pode substituir pelos seus pratos
const menuItems = [
    {
        id: 1,
        name: "Bruschetta",
        description: "Pão italiano torrado com tomate fresco, manjericão e azeite de oliva",
        price: "R$ 18,90",
        category: "entradas",
        image: "imagens/brusqueta-tradicional.jpg"
    },
    {
        id: 2,
        name: "Filé Mignon",
        description: "Filé mignon grelhado, acompanha batatas rústicas e legumes grelhados",
        price: "R$ 59,90",
        category: "principais",
        image: "images/file-mignon.jpg"
    },
    {
        id: 3,
        name: "Tiramisu",
        description: "Sobremesa italiana clássica com café, mascarpone e cacau em pó",
        price: "R$ 22,90",
        category: "sobremesas",
        image: "images/tiramisu.jpg"
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