

document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = [
        document.getElementById('top1'),
        document.getElementById('top2'),
        document.getElementById('top3')
    ];

    let currentIndex = 0;

    function showNextParagraph(p) {
        if (currentIndex < p.length) {
            p[currentIndex].style.opacity = 1;
            currentIndex++;
        }
    }

    $('#top1').fadeOut();
    $('#top1').fadeIn(2000);
    $('#top2').fadeOut(2000);
    $('#top3').fadeOut();
    $('#top2').fadeIn(4000);
    $('#top3').fadeIn(6000);
  
});

