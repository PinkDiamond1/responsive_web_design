$(document).ready(function(){


  $("#menu-inactive").click(function(){
    $("#menu-overlay").toggleClass('hidden');
    $("#menu-inactive").toggleClass('hidden');
  });

  $("#menu-active").click(function(){
    $("#menu-overlay").toggleClass('hidden');
    $("#menu-inactive").toggleClass('hidden');
  });
});