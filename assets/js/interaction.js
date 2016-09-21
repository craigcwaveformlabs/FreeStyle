// .Button dropdown control
$(document).ready(function(){
  $(".Button--dropdown").click(function(){
    $(this).children(".Button--dropdown--contents").toggle();
  });
  $(document).click(function(){
    $(".Button--dropdown--contents").hide();
  });
});
