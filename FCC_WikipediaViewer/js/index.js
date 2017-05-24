$(document).ready(function(){ 

var valty;
$('#searchBtn').on('click', function() {
     valty = $("#searchBar").val();
    var show = document.getElementById("val");
 
    
 
    
var pURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+valty+"&format=json&callback=?";

$.ajax({
  type: "GET",
  url: pURL,
  async: false,
  dataType: "json",
  success: function(data){
    
    var x=0;
    var lent = data[1].length;
    console.log(data[1]);
    console.log(pURL);
    console.log(lent);
    while(x<lent){
     $("#results").prepend("<div id='searchDiv'><h1><a id='searchR' href='"+data[3][x]+"'target='blank'>"+data[1][x]+"</a></h1><p id='para'>"+data[2][x])+"</p><br>";
      console.log(data[3][x]);
      x++;
    }
  },
  error: function(error){
    console.log(pURL);
  console.log("error");
  console.log(error.status); 
    console.log(error.responseText); 
  }
});
});
 });