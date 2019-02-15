//Bir nesnenin görünebilirliğini arttırma ya da azaltma komutudur
$(document).ready(function(){
    $('.resim').css('opacity','0.4');
    $('.resim').click(function(){ //mouseover
        $(this).fadeTo(2000,1);
        $('.resim').not(this).fadeTo(2000,0.4);
    });
 
});