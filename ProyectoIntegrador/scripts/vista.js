window.addEventListener('scroll', function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        var cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
            card.style.opacity = 1;
        } else {
            card.style.opacity = 0;
        }
    });
});

