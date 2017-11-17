$.fn.pinterest = function(image, title, description){
        var html= 
                  `<div class="cuadro">` + 
                  `<img src=" ${image} " class="img-responsive" alt="">` + 
                  `<p> ${title} </p>` + 
                  `<span> ${description} </span>` +
                  `</div><!--cierre de cuadro-->`
        
        this.append(html); 
}