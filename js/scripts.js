// business logic




// User Interface Logic
$(document).ready(function(){
  $("form#grocList").submit(function(event){
    event.preventDefault();

    const grocAr = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val(), $("input#item5").val()];

    grocAr.sort();

    let finalList = grocAr.map(function(food){
      return food.charAt(0).toUpperCase() + food.slice(1);
      });

      finalList.forEach(function(food){
        $("ul#uppercaseList").append("<li>" + food + "</li>")
      });
      
      $("#grocList").fadeOut();
      $("#listComplete").fadeIn();

  })
})
