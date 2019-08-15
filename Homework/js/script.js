//событие загрузки страницы 
$(document).ready(function() {
//назначение клика перечисленным тегам
//последнюю получаем индексом элемента списка
//можно тупо написать тегом "a href..."
//линейная функция потому что нет контекста вызова this
    $('.main_btna, .main_btn, main_mobmenu_field_list[2]').on('click', () => {
      //присвоение эффектов при клике
        $('.overlay').fadeIn('slow');
      $('.modal').slideDown('slow');
    });    
    //присвоение эффектов крестику закрытия (баттон .close)
    $('.close').on('click', () => {
        $('.overlay').fadeToggle('slow');
        $('.modal').fadeOut('slow');
      });    
      //дежурная отметка окончания сценария
      console.log("complete!");
});