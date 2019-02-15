$(document).ready(function(){
    function div_ort(){

        ekran_gen = $(window).widht();
        ekran_yuk = $(window).height();

        div_gen = $('#ortala').width();
        div_yuk = $('#ortala').height();

        $('#ortala').css('top', (ekran_yuk / 2) -(ekran_yuk / 2)).css('left', (ekran_gen / 2) - (ekran_gen / 2));
    }
    div_ort();

      $(window).resize(function(){
        alert('Genişlik değişti!');
      });
});
