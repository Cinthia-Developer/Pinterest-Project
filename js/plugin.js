$.fn.pinterest = function(listaImage){
    
    if(listaImage.length !==0){
        for(var i=0; i<listaImage.length; i++){
            let contImage =  '<img class="contImage" alt=""><br>';
            let url = listaImage[i];
            let $cont_image = $(contImage);
            $cont_image.attr("src", url);
            $cont_image.css("width", "100%");
            $cont_image.css("padding", "5px");
            $(this).append($cont_image);
        };
    }
}