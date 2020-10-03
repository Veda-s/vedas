
Reveal.initialize();

function openToc() {
  document.getElementById("myToc").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeToc() {
  document.getElementById("myToc").style.width = "0";
} 

/* var typed = new Typed('.heading', {
  strings: ["", "Second sentence."],
  typeSpeed: 30
}); */
/*SMART BACKSPACE*/
var typed3 = new Typed('#heading', {
  strings: ['lorem ipsum, bhrami: <i>lorem</i> with','lorem ipsum, bhrami: <i>lorem</i> with','lorem ipsum, bhrami: <i>lorem</i> with','lorem ipsum, bhrami: <i>lorem</i> with',],
  typeSpeed: 0,
  backSpeed: 0,
  smartBackspace: true, // this is a default
  loop: true
});
/*BULK TYPING */
var typed6 = new Typed('#typed6', {
  strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
  typeSpeed: 40,
  backSpeed: 0,
  loop: true
});

function myFunction() {
  var article = document.getElementById("article");
  article.style.color = "white";
  article.style.background = "#343a40";
  article.style.height ="100%";
  article.style.width = "100%";
  article.style.zIndex = "999";
  article.style.margin = "0";
  $('body > :not(#article)').hide(); //hide all nodes directly under the body
  $('#article').appendTo('body');


  
  for (var i = 0; i < blockquote.length; i++) {
      var blockquote = document.getElementsByTagName("blockquote");
    blockquote.style.background = "#343a40";
    blockquote.style.color = "white";
  }

  var pre = document.getElementsByTagName("pre");
  for (var i = 0; i < pre.length; i++) {
     pre.style.color = "white";
  }
 
}
