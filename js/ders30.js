$('#isim').focusin(function(){
    $('#uyari').html('Lütfen isminizi giriniz!');
});

//Boşluğa tıkladığımızda gelen yazıyı silinmesini sağlar.
$('#isim').focusout(function(){
    $('#uyari').html('');

});

$('#soyisim').focusin(function(){
    $('#uyari2').html('Lütfen isminizi giriniz!');
});

//Boşluğa tıkladığımızda gelen yazıyı silinmesini sağlar.
$('#soyisim').focusout(function(){
    $('#uyari2').html('');

});