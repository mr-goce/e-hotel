
$(document).ready(function () {
var rootDiv = $("#root");
 var rootText = $("<h1>");
 rootText.html("Just choose your destination");
 rootDiv.append(rootText);
 var inputText = $("<input>").attr("id","search");
 rootDiv.append(inputText);

 var button = $("<button>").attr("id","btn");
 rootDiv.append(button);
 button.html("search");
})