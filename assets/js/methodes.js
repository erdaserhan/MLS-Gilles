$(document).ready(function(){
    //Continuer à lire bouton
    $(".orientationContinue1").hide();
    $(".buttonStopContinue1").hide();
    $(".buttonContinue1").click(function () {
      $(".orientationContinue1").slideDown("slow");
      $(".buttonContinue1").hide(1000);
      $(".buttonStopContinue1").show(1000);
    });
    $(".buttonStopContinue1").click(function(){
      $(".orientationContinue1").slideUp("slow");
      $(".buttonStopContinue1").hide(1000);
      $(".buttonContinue1").show(2000);
    });  
    $(".orientationContinue2").hide();
    $(".buttonStopContinue2").hide();
    $(".buttonContinue2").click(function () {
      $(".orientationContinue2").slideDown("slow");
      $(".buttonContinue2").hide(1000);
      $(".buttonStopContinue2").show(1000);
    });
    $(".buttonStopContinue2").click(function(){
      $(".orientationContinue2").slideUp("slow");
      $(".buttonStopContinue2").hide(1000);
      $(".buttonContinue2").show(2000);
    }); 
    $(".orientationContinue3").hide();
    $(".buttonStopContinue3").hide();
    $(".buttonContinue3").click(function () {
      $(".orientationContinue3").slideDown("slow");
      $(".buttonContinue3").hide(1000);
      $(".buttonStopContinue3").show(1000);
    });
    $(".buttonStopContinue3").click(function(){
      $(".orientationContinue3").slideUp("slow");
      $(".buttonStopContinue3").hide(1000);
      $(".buttonContinue3").show(2000);
    }); 
  });