(function(){

    // OBJETOS CON PROPIEDADES
    
    var proTabs={
    
        primer_ecabezado: document.getElementById('encabezado_menu').firstElementChild,
        primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    
        enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
        li_encabezado: document.querySelectorAll('#encabezado_menu li'),
        divs_contenido: document.querySelectorAll('#contenido_menu > div'),
    
        contenido_activo: null
    }
    
    // OBJETOS CON METODOS 
    
    var metTabs ={
    
        inicio: function(){
            proTabs.primer_ecabezado.className = 'active';
            proTabs.primer_contenido.className = 'active';
    
            for (var i = 0; i < proTabs.enlaces_encabezado.length; i++) {
                proTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
            }
    
        },
    
        evento: function(e){
            e.preventDefault();
    
            for (var i = 0; i < proTabs.li_encabezado.length; i++) {
                proTabs.li_encabezado[i].className= 'bg-p';
                
            }
    
            for (var i = 0; i < proTabs.divs_contenido.length; i++) {
                proTabs.divs_contenido[i].className= 'bg-p';
                
            }
    
            this.parentElement.className ='active ';
        
            proTabs.contenido_activo = this.getAttribute('href');
            console.log(proTabs.contenido_activo );
            
            document.querySelector(proTabs.contenido_activo).className = 'active'
            document.querySelector(proTabs.contenido_activo).style.opacity = '0';
    
            setTimeout(function(){
                document.querySelector(proTabs.contenido_activo).style.opacity = '1';
    
            }, 100)
        }
    }
    
    metTabs.inicio();
    
    }())
    