$(document).ready(function(){
    //Continuer à lire bouton
    $("#orientationContinue").hide();
    $("#buttonStopContinue").hide();
    $("#buttonContinue").click(function () {
      $("#orientationContinue").slideDown("slow");
      $("#buttonContinue").hide(1000);
      $("#buttonStopContinue").show(1000);
    });
    $("#buttonStopContinue").click(function(){
      $("#orientationContinue").slideUp("slow");
      $("#buttonStopContinue").hide(1000);
      $("#buttonContinue").show(2000);
    });      
  });