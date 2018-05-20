$(document).ready(function () {
    $('.home')
        .transition('scale');
    $('.img.index')
        .transition('scale', function () {
            $('.btn.resume')
                .transition('scale', function () {
                    $('.btn.project')
                        .transition('scale');
                });
        })
    ;
});

$(document).ready(function () {
    var images = [];
    images[0] = "0734f4d8533.jpeg";
    images[1] = "photo2.jpeg";
    images[2] = "photo3.jpeg";


    var i = 0;
    setInterval(fadeDivs, 6000);

    function fadeDivs() {
        i = i < images.length ? i : 0;
        $('.img.ui.centered').fadeOut(600, function () {
            $(this).attr('src', images[i-1]).fadeIn(600);
        });
        i++;
    }

    setTimeout(function (){
        fadeDivs();
        }, 6000);
});