// Let's set the letters on screen so that users can select the first letter of their drink.
        

      // This pulls ALL drinks from the CocktailDB database.


      

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
         

        /*
        function searchResultdrinkName (drinkName) {
            new.document(drinkName);
            var $h1 = $("<h1>");
            var $p = $("<p>");

            $(h1).append(document,drinkName);
            $(p).appendChild($p);


        }
        // At button click of a letter, run the function to pull the drink properties matching the first
        // letter of the name of the drink. But we do not want it to execute until letters are clicked.

        // We need an element tag selection method and to create a click event. 
 
        */


      } 

