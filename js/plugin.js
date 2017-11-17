$.fn.pinterest = function(image, title, description, imageAutor, nameAutor){
    var html= 
        `<div class="cuadro">` + 
        `<img src=" ${image} " class="img-responsive" alt="">` + 
        `<h4> ${title} </h4>` + 
        `<span> ${description} </span><br>` +
        `<div class="detalles">` +
        `<img src=" ${imageAutor} " class="img-responsive autor" alt="">`  +
        `<small> ${nameAutor} </small>` +
        `</div><!--cierre de detalles` +
        `</div><!--cierre de cuadro-->`
        
    this.append(html); 
}