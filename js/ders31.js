//Bind::Birden fazla methodun jqueryde kullanılmasını sağlayan fonskiyondur.
$('a').mouseenter(function(){
    $(this).addClass('bold');
}).mouseleave(function(){
    $(this).removeClass('bold');
}); 


//mouseenter üzerine gelinen yere istediğimiz özelliği yapmamızı sağlar.
