//Herhangi bir nesneyi aşağıdan yukarı doğru ya da tam tersi kaybolmasını sağlayacağız.
$(document).ready(function(){
    $('#mesaj').slideDown(3000);

    $('#mesaj_gizle').click(function(){
        $('#mesaj').slideUp(3000);
    });
});