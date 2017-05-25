var randqoute =[];
randquote = [{
  quote: "Laugh and the world laughs with you, snore and you sleep alone.",
  author: "ANTHONY BURGESS"
},{
  quote:"Always borrow money from a pessimist. He won’t expect it back.",
  author: "OSCAR WILDE"
},{
  quote: "My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.",
  author: "DAVE BARRY"
},{
  quote: "Jesus wept.",
  author: "JOHN 11:35"
},{
  quote:"FORTIS CADERE CEDERE NON POTEST",
  author: "KINGSTON COLLEGE"
},{
  quote: "OUT OF MANY,ONE PEOPLE",
  author: "JAMAICA"
},
{
  quote: "Everything is funny, as long as it's happening to somebody else.",
  author: "Will Rogers"
},{
  quote: "I do not fear computers. I fear the lack of them.",
  author: "Isaac Asimov "
}];

var arrlen = randquote.length;
var randy;
randy = Math.floor(Math.random()*arrlen);
//give the container(div) of the quote an id
//change the div not the paragraph it self
//work on css styling.
 $('#ombutton').on('click',function(){
   $('#changetxt').html('');
   //The Quote
  $('#changetxt').append("<p id=\"changetxt\">         <h3>"+"\""+randquote[randy].quote+"\""+"</h3></p>")
   //Author's name
 $('#aname').html("<p id=\"aname\"><h5>-"+randquote[randy].author+"</h5></p>")
   
   
  randy = Math.floor(Math.random()*arrlen);                     
 });