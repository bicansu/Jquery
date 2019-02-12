$('#list').change(function(){
    //alert('Değişiklik var!');
    var list_deger = $('#list').val();
    $('#secim').html('Secimin:'+ list_deger);
});