$(document).ready(function(){
  $("#form").submit(function(event){
    $(".equilateral, .isosceles, .scalene, .not").hide()
  var side1 = parseInt($(".side1").val());
  var side2 = parseInt($(".side2").val());
  var side3 = parseInt($(".side3").val());

  if((side1 === side2 && side1 === side3) && ((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2))){
    $(".equilateral").show();
  }
  else if(((side1 === side2 && side1 !== side3) || (side1 === side3 && side1 !== side2) || (side2 === side3 && side2 !== side1))&&((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2))){
    $(".isosceles").show();
  }
  else if((side1 !== side2 && side1 !== side3 && side2 !== side3)&&((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2))){
    $(".scalene").show();
  }
  else{
    $(".not").show();
  }
  event.preventDefault();
  })
});
