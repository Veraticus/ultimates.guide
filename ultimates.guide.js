window.addEventListener('load', function(){
    const gliders = document.querySelectorAll('.glider-contain')
    
    gliders.forEach(function(glider) {
        const g = document.querySelector(`#${glider.id} .glider`);
        const prev = document.querySelector(`#${glider.id} .glider-prev`);
        const next = document.querySelector(`#${glider.id} .glider-next`);
        const dots = document.querySelector(`#${glider.id} .dots`);
        
        new Glider(g, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            scrollLock: true,
            dots: dots,
            arrows: {
            prev: prev,
            next: next
        }
    });
    });
})
