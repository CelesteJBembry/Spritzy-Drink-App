// Let's set the letters on screen so that users can select the first letter of their drink.
        
 console.log("loaded")
      // This pulls ALL drinks from the CocktailDB database.


      /*
      // Original API key substituted into var queryURL was var APIKey = "1" --- key now hardcoded into URL
      var arrAlphaLetters = new Array ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
      //console.log(arrAlphaLetters);
      
      for (var i = 0; i < arrAlphaLetters.length; i++){
        
        // Just to test and check that arrAlphaLetters is working correctly 
        // console.log(arrAlphaLetters[i]);
        // document.write(arrAlphaLetters[i]);
        
        var queryURL = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=" + arrAlphaLetters[i];
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) { 
            console.log(queryURL);
            console.log(response);
        
        
            for (var i = 0; i <=response.drinks[0].strDrink[i]; i++){
                var drinkName = response.drinks[0].strDrink[i];
                console.log(drinkName);

          }
                      
      });  

    } 
 */
// code to recycle
/*
 var randomDrink = $("<h3>").text(response.drinks[0].strDrink);
        var imageDrink = $("<img>").attr("src", response.drinks[0].strDrinkThumb);
        console.log(randomDrink)
        $(".random").html(randomDrink);
        $(".random").append(imageDrink);
        $(".random").append("<h5>Click for Recipe!</h5>");
        $(".random").append("<h5>Click for Random Drink!</h5>");



*/

// Global var
var arrAlphaLetters = new Array ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");


function letterGenerate () {


  for (var i = 0; i < arrAlphaLetters.length; i++){
  //console.log(arrAlphaLetters[i]);

  // each time the for loop runs we are going to use jquery to craete a new div
  // stored in element letterEl 


  var newSpanForLetters = $("<span>");
  newSpanForLetters.text(arrAlphaLetters[i].toUpperCase());
  newSpanForLetters.css("padding", "0.8rem");
  newSpanForLetters.attr("class","letterSpan");
  newSpanForLetters.attr("data-letter", arrAlphaLetters[i]);
  $(".lettersDiv").append(newSpanForLetters);

  
  // to that div we need to update the text content to be equal to where we are in the array
  // .arrAlphaLetters[i]

  // then we are going to append our html element letterEl to letters Div class


  // in between the menu and the cards are at line 54 of drinkPage.html
  // Can we use a function() { }  called when the page loads that will automatically 
  // do this?

  }

}

$(document).ready(function(){
  letterGenerate();

  $(".letterSpan").on("click",function(){
    console.log("clicked");
    
    var letterValue = $(this).attr("data-letter");
    console.log(letterValue);

    var queryURL = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=" + letterValue;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) { 
        //console.log(queryURL);
        console.log(response);

    })


  })


}) 





