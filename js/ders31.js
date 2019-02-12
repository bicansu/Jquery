//Bind::Birden fazla methodun jqueryde kullanılmasını sağlayan fonskiyondur.
// $('a').mouseenter(function(){
//     $(this).addClass('bold');
// }).mouseleave(function(){
//     $(this).removeClass('bold');
// }); 


//mouseenter üzerine gelinen yere istediğimiz özelliği yapmamızı sağlar.
//İkisini Birlikte Kullanmak İçim

$('a').bind('mouseenter mouseleave', function(){
    $(this).toggleClass('bold');

});
//ToggleClass bir classı uygular ve kaldırır.