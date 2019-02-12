$(document).ready(function(){
    var text_max=60;
    $('#textarea_durum').html('Karakter: '+text_max);

    $('#textarea').keyup(function(){
        var text_uzunluk = $('#textarea').val().length;
        var text_kalan = text_max - text_uzunluk;
        $('#textarea_durum').html('Karakter: ' + text_kalan);
    });
});
    
