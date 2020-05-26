console.log("loaded winelist.js");

var queryURL = "https://api.globalwinescore.com/globalwinescores/latest/?color=red&limit=10";
// var proxyURL = "https://private-anon-a0e1bba32c-globalwinescore.apiary-proxy.com/globalwinescores/latest/?color=red&limit=10"

$.ajax({
    url: queryURL,
    method: "GET",
    timeout: 0,
    headers: {
        Authorization: "Token 6a24972a22b2d196722b9c77b51072fb7f9eeb34",
        
    }
  }).then(function(response) { 
     console.log(response);

  });