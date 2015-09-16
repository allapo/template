$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
 $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
$(document).ready(function(){
    $('ul.tabs').tabs();
  });
$(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  });
$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');
$(document).ready(function() {
    $('select').material_select();
  });
$('select').material_select('destroy');