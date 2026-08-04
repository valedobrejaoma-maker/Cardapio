// ======================================================
// ELEMENTOS DO HTML
// ======================================================

const menuContainer = document.getElementById("menu-container");
const categoryNav = document.getElementById("category-nav");
const backToTopButton = document.getElementById("back-to-top");

// Banner
const storeName = document.getElementById("store-name");
const bannerImage = document.getElementById("banner-image");
const bannerTitle = document.getElementById("banner-title");
const bannerSubtitle = document.getElementById("banner-subtitle");
const bannerIndicators = document.getElementById("banner-indicators");

// Modal
const modal = document.getElementById("product-modal");
const closeModalButton = document.getElementById("close-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");


// ======================================================
// MODO ESCURO
// ======================================================

function configureDarkMode() {
    if (typeof siteConfig !== "undefined" && siteConfig.darkMode) {
        document.body.classList.add("dark-mode");
    }
}


// ======================================================
// NOME DO ESTABELECIMENTO
// ======================================================

function renderStoreName() {
    if (storeName && typeof siteConfig !== "undefined") {
        storeName.textContent = siteConfig.nomeEstabelecimento || "";
    }
}


// ======================================================
// CARROSSEL DE BANNERS
// ======================================================

let currentBanner = 0;
let bannerInterval = null;

function renderBannerIndicators() {
    if (!bannerIndicators || !siteConfig || !siteConfig.banner) return;

    bannerIndicators.innerHTML = "";

    siteConfig.banner.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("banner-dot");

        if (index === currentBanner) {
            dot.classList.add("active");
        }

        bannerIndicators.appendChild(dot);
    });
}


function updateBanner() {
    if (!siteConfig || !siteConfig.banner || siteConfig.banner.length === 0) return;

    const banner = siteConfig.banner[currentBanner];
    if (!banner) return;

    if (bannerImage) {
        bannerImage.src = banner.imagem;
        bannerImage.alt = banner.titulo;
    }

    if (bannerTitle) bannerTitle.textContent = banner.titulo;
    if (bannerSubtitle) bannerSubtitle.textContent = banner.subtitulo;

    renderBannerIndicators();
}


function nextBanner() {
    if (!siteConfig || !siteConfig.banner || siteConfig.banner.length === 0) return;

    currentBanner++;

    if (currentBanner >= siteConfig.banner.length) {
        currentBanner = 0;
    }

    updateBanner();
}


function startBannerSlider() {
    if (!siteConfig || !siteConfig.banner || siteConfig.banner.length === 0) {
        return;
    }

    updateBanner();

    if (bannerInterval) clearInterval(bannerInterval);

    bannerInterval = setInterval(() => {
        nextBanner();
    }, 5000);
}


// ======================================================
// MENU SUPERIOR DAS CATEGORIAS
// ======================================================

function renderCategoryNavigation() {
    if (!categoryNav || typeof menuData === "undefined") return;

    categoryNav.innerHTML = "";

    menuData.forEach((categoria) => {
        const button = document.createElement("button");
        button.classList.add("category-button");
        button.setAttribute("data-target", categoria.id);
        button.innerHTML = `${categoria.icone} ${categoria.nome}`;

        button.addEventListener("click", () => {
            const section = document.getElementById(categoria.id);
            if (!section) return;

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

        categoryNav.appendChild(button);
    });
}


// ======================================================
// RENDERIZA O CARDÁPIO
// ======================================================

function renderMenu() {
    if (!menuContainer || typeof menuData === "undefined") return;

    menuContainer.innerHTML = "";

    menuData.forEach((categoria) => {
        const section = document.createElement("section");
        section.classList.add("menu-section");
        section.id = categoria.id;

        section.innerHTML = `
            <div class="section-title">
                <h2>
                    ${categoria.icone}
                    ${categoria.nome}
                </h2>
            </div>
            <div class="section-divider"></div>
        `;

        const grid = document.createElement("div");
        grid.classList.add("products-grid");

        categoria.produtos.forEach((produto) => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            let precoHTML = "";

            if (typeof cardapioConfig !== "undefined" && cardapioConfig.mostrarPreco && produto.preco) {
                precoHTML = `
                    <div class="product-price">
                        ${cardapioConfig.moeda} ${produto.preco}
                    </div>
                `;
            }

            card.innerHTML = `
                <img
                    class="product-image"
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    loading="lazy"
                >
                <div class="product-content">
                    <h3 class="product-name">${produto.nome}</h3>
                    <p class="product-description">${produto.descricao}</p>
                    ${precoHTML}
                </div>
            `;

            card.addEventListener("click", () => openProductModal(produto));
            grid.appendChild(card);
        });

        section.appendChild(grid);
        menuContainer.appendChild(section);
    });
}


// ======================================================
// MODAL DOS PRODUTOS
// ======================================================

function openProductModal(produto) {
    if (!modal) return;

    if (modalImage) {
        modalImage.src = produto.imagem;
        modalImage.alt = produto.nome;
    }

    if (modalTitle) modalTitle.textContent = produto.nome;
    if (modalDescription) modalDescription.textContent = produto.descricao;

    if (modalPrice) {
        if (typeof cardapioConfig !== "undefined" && cardapioConfig.mostrarPreco && produto.preco) {
            modalPrice.textContent = `${cardapioConfig.moeda} ${produto.preco}`;
        } else {
            modalPrice.textContent = "";
        }
    }

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}


function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    document.body.style.overflow = "";
}


function configureModal() {
    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal && modal.classList.contains("show")) {
            closeModal();
        }
    });
}


// ======================================================
// BOTÃO VOLTAR AO TOPO
// ======================================================

function configureBackToTopButton() {
    if (!backToTopButton) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ======================================================
// DESTAQUE DA CATEGORIA ATUAL
// ======================================================

function activateCurrentSection() {
    const sections = document.querySelectorAll(".menu-section");
    const buttons = document.querySelectorAll(".category-button");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 220;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        buttons.forEach((button) => {
            button.classList.remove("active");

            if (button.getAttribute("data-target") === currentSection) {
                button.classList.add("active");
            }
        });
    });
}


// ======================================================
// FALLBACK PARA IMAGENS
// ======================================================

function configureImageFallback() {
    document.addEventListener("error", (event) => {
        const element = event.target;
        if (element.tagName === "IMG") {
            element.src = "https://placehold.co/800x600?text=Imagem+Indisponivel";
        }
    }, true);
}


// ======================================================
// INICIALIZAÇÃO DO SITE
// ======================================================

function init() {
    configureDarkMode();
    renderStoreName();
    startBannerSlider();
    renderCategoryNavigation();
    renderMenu();
    configureModal();
    configureBackToTopButton();
    activateCurrentSection();
    configureImageFallback();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

window.init = init;