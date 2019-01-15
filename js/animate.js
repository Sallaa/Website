$(document).ready(function ($) {
    $('.ui.animated').delay(500).transition({
        animation: 'jiggle',
        duration: 1600,
    });
});

$(document).ready(function () {
    $("svg").bind("click", function (event) {
        $('svg').transition(
            {
            animation: 'zoom',
            duration: 500,
            function () {
                toto();
            }
        }
        );
    // toto();
    });
    
});


function toto() {
window.location.href = "/test2.html";
}