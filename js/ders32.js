//Butona eklenicek butona tıkladığımızda butonlar çoğalacak.
// $(document).ready(function(){
//     $('.cogalt').click(function(){
//         $(this).after('<input class="cogalt" type="button" value="buton">');
//     });

// });

$(document).ready(function(){
    $("p").live({
        click: function() {
          $(this).after("<p>Deneme </p>");
            
        }
        });
});