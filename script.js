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

function openModal(title, description, imageUrl) {
    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalImage = document.getElementById("modalImage");
    var modalDescription = document.getElementById("modalDescription");
    document.body.classList.add('modal-open');
    modal.style.display = "block";
    modalTitle.innerText = title;
    modalImage.src = imageUrl;  
    modalImage.alt = title;
    modalDescription.innerText = description;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    document.body.classList.remove('modal-open');
    modal.style.display = "none";
}