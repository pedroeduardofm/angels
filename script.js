var interesseButton = document.getElementById('interesseButton');
var interesseTitle;

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    var btnScrollToTop = document.getElementById("btnScrollToTop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
};


function openModal(title, brand, description, price, imageUrl, clickableImages) {
    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalBrand = document.getElementById("modalBrand");
    var modalPrice = document.getElementById("modalPrice");
    var modalImage = document.getElementById("modalImage");
    var modalDescription = document.getElementById("modalDescription");
    var imgContainer = document.getElementById("img-container");

    modalTitle.innerText = title;
    modalBrand.innerText = brand;
    modalImage.src = imageUrl;
    modalImage.alt = title;
    modalPrice.innerText = price;
    modalDescription.innerText = description;
    imgContainer.innerHTML = "";

    interesseTitle = title;

    if (clickableImages && clickableImages.length > 0) {
        for (var i = 0; i < clickableImages.length; i++) {
            (function(index) {
                var imgElement = document.createElement("img");
                imgElement.src = clickableImages[index].url;
                imgElement.alt = clickableImages[index].alt;

                imgElement.onclick = function() {
                    handleImageClick(clickableImages[index]);
                };

                imgContainer.appendChild(imgElement);
            })(i);
        }
    }

    document.body.classList.add('modal-open');
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    document.body.classList.remove('modal-open');
    modal.style.display = "none";
}

function handleImageClick(clickedImage) {
    modalImage.src = clickedImage.url;
    modalImage.alt = clickedImage.alt;

    modalTitle.innerText = clickedImage.title; 
    modalDescription.innerText = clickedImage.description; 

    closeSecondaryModal();
}

var clickableImages = [
    {
      url: 'img/itens/tododia1.jpeg',
      alt: 'Tododia Macadâmia',
      title: 'Sabonete em Barra Puro Vegetal Tododia Macadâmia',
      description: 'Promove uma sensação agradável, enquanto limpa e deixa a pele macia e nutrida. Sua fórmula suave e com ingredientes naturais evita o ressecamento e prepara a pele para receber a combinação nutritiva e inteligente dos hidratantes Natura Tododia.'
    },
    {
      url: 'img/itens/tododia2.jpeg',
      alt: 'Todavia Cereja e Avelâ',
      title: 'Sabonete em Barra Puro Vegetal Tododia Cereja e Avelã',
      description: 'Desperte seus sentidos com a fragrância de Cereja e Avelã. Sinta seu corpo em um banho revigorante com o Sabonete em Barra Tododia. Uma combinação de ingredientes naturais em uma fórmula gentil que limpa delicadamente mantendo a hidratação natural da pele.'
    },
    {
      url: 'img/itens/tododia3.jpeg',
      alt: 'Todavia Ameixa e Vanilla',
      title: 'Sabonete em Barra Puro Vegetal Tododia Ameixa e Vanila',
      description: 'Surpreenda-se com a fragrância atraente e adocicada de Ameixa e Flor de Baunilha. Sinta seu corpo em um banho revigorante com o Sabonete em Barra Tododia. Uma combinação de ingredientes naturais em uma fórmula gentil que limpa delicadamente mantendo a hidratação natural da pele.'
    },
    {
      url: 'img/itens/tododia4.jpeg',
      alt: 'Tododia Chá de Camomila',
      title: 'Sabonete em Barra Puro Vegetal Tododia Chá de Camomila e Lavanda',
      description: 'O Sabonete em Barra Tododia Chá de Camomila e Lavanda promove uma sensação agradável, enquanto limpa e deixa a pele macia e sedosa. Sua fórmula suave e com ingredientes naturais evita o ressecamento e prepara a pele para receber a combinação nutritiva e inteligente dos hidratantes Natura Tododia.'
    },
    {
      url: 'img/itens/tododia5.jpeg',
      alt: 'Tododia Alecrim e Sálvia',
      title: 'Sabonete em Barra Puro Vegetal Tododia Alecrim e Sálvia',
      description: 'O Sabonete em Barra Tododia Alecrim e Sálvia promove uma sensação agradável, enquanto limpa e deixa a pele macia e sedosa. Sua fórmula suave e com ingredientes naturais evita o ressecamento e prepara a pele para receber a combinação nutritiva e inteligente dos hidratantes Natura Tododia.'
    }
  ];
  
  var antitranspiranteItems = [
    {
        url: 'img/itens/cuidese1.jpeg',
        alt: 'Antitranspirante OBoticário',
        title: 'Antitranspirante Roll-on Cuide-se Bem Invisible Protect 55ml',
        description: 'O Antitranspirante Roll-on Cuide-se Bem Invisible Protect entrega proteção, praticidade e cuidados prolongados para suas axilas.'
    },
    {
        url: 'img/itens/cuidese2.jpeg',
        alt: 'Antitranspirante OBoticário',
        title: 'Antitranspirante Roll-on Cuide-se Bem Protect & Beauty 55ml',
        description: 'O Desodorante Antitranspirante Roll-on Cuide-se Bem o Boticário Protect & Beauty entrega proteção e cuidados prolongados para suas axilas. Ideal para a rotina, este desodorante antitranspirante promove 72 horas de proteção antibacteriana, deixando a pele livre dos maus odores da transpiração.'
    }
];


window.addEventListener("scroll", function() {
    var alturaJanela = window.innerHeight;
    var posicaoHeader = document.getElementById("header").getBoundingClientRect().top;
    var alturaEncolhida = alturaJanela * 0.7;

    if (posicaoHeader < alturaEncolhida) {
        document.getElementById("header").classList.add("slim");
    } else {
        document.getElementById("header").classList.remove("slim");
    }
});

var interesseButton = document.getElementById('interesseButton');

interesseButton.addEventListener('click', function() {
    // Agora, 'interesseTitle' está disponível neste escopo
    var mensagemCodificada = encodeURIComponent('Tenho interesse em: ' + interesseTitle);
    var urlWhatsapp = 'https://wa.me/+553892090726?text=' + mensagemCodificada;
    window.open(urlWhatsapp, '_blank');
});




