// ======================================================
// CONFIGURAÇÕES GERAIS DO SITE
// ======================================================

const siteConfig = {
    nomeEstabelecimento: "Meu Bar & Café",
    darkMode: true,
    banner: [
        {
            titulo: "Bem-vindo!",
            subtitulo: "Os melhores cafés da cidade.",
            imagem: "assets/images/banner/banner-1.jpg"
        },
        {
            titulo: "Happy Hour",
            subtitulo: "Drinks selecionados com desconto todos os dias.",
            imagem: "assets/images/banner/banner-2.jpg"
        },
        {
            titulo: "Promoções da Semana",
            subtitulo: "Confira nossas ofertas especiais.",
            imagem: "assets/images/banner/banner-3.jpg"
        }
    ]
};

// ======================================================
// CONFIGURAÇÕES DO CARDÁPIO
// ======================================================

const cardapioConfig = {
    mostrarPreco: true,
    moeda: "R$"
};

// ======================================================
// CATEGORIAS E PRODUTOS
// ======================================================

const menuData = [

    // PROMOÇÕES
    {
        id: "promocoes",
        nome: "Promoções",
        icone: "⭐",
        produtos: [
            {
                nome: "Happy Hour",
                descricao: "Todos os drinks com desconto das 18h às 20h.",
                preco: "19,90",
                imagem: "assets/images/promocoes/happy-hour.jpg"

            },
            {
                nome: "Combo Dom Sebastian Coke",
                descricao: "Na comopra de dois Don sebatian coke ambos saem por R$ 50",
                preco: "50,00",
                imagem: "assets/images/promocoes/promocao_000.jpg"

            }
        ]
    },

    // CAFÉS
    {
        id: "cafes",
        nome: "Cafés",
        icone: "☕",
        produtos: [
            {
                nome: "Capuccino",
                descricao: "Capuccino cremoso preparado na hora.",
                preco: "12,00",
                imagem: "assets/images/cafes/capuccino.jpg"
            }
        ]
    },

    // DRINKS
    {
        id: "drinks",
        nome: "Drinks",
        icone: "🍹",
        produtos: [
            {
                nome: "Mojito",
                descricao: "Rum, hortelã, açúcar, água com gás e limão.",
                preco: "26,90",
                imagem: "assets/images/drinks/mojito.jpg"
            }
        ]
    },

    // CHOPP'S
    {
        id: "chopps",
        nome: "Chopp's",
        icone: "🍺",
        produtos: [
            {
                nome: "Chopp Pilsen",
                descricao: "Chopp gelado servido na tulipa.",
                preco: "14,00",
                imagem: "assets/images/chopps/pilsen.jpg"
            }
        ]
    },

    // SHOTS
    {
        id: "shots",
        nome: "Shots",
        icone: "🥃",
        produtos: [
            {
                nome: "Shot de Tequila",
                descricao: "Shot tradicional acompanhado de limão e sal.",
                preco: "15,00",
                imagem: "assets/images/shots/tequila.jpg"
            }
        ]
    },

    // BEBIDAS
    {
        id: "bebidas",
        nome: "Bebidas",
        icone: "🥤",
        produtos: [
            {
                nome: "Smirnoff Ice",
                descricao: "Bebida pronta e refrescante.",
                preco: "13,00",
                imagem: "assets/images/bebidas/smirnoff-ice.jpg"
            },
            {
                nome: "Coca-Cola Lata",
                descricao: "Refrigerante Coca-Cola 350 ml.",
                preco: "7,00",
                imagem: "assets/images/bebidas/coca-cola.jpg"
            }
        ]
    },

    // TESTE
    {
        id: "teste",
        nome: "Teste",
        icone: "🍔",
        produtos: [
            {
                nome: "Hambúrguer de Teste",
                descricao: "Só para verificar se aparece.",
                preco: "10,00",
                imagem: "https://placehold.co/400x300?text=Teste"
            }
        ]
    }

];
