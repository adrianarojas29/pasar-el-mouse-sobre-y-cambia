/*window.addEventListener('load', function(event) {
//console.log(event)
//console.log(e.target);
]//var title = document.body.firstElementChild;}
var image = document.body.getElementsByTagName('img')[0];
//title.addEventListener('mouseover',function(event){
  //title.textContent = 'Nolose';
});
//title.addEventListener('mouseout', function(event){
  //title.textContent = 'YAS'
});

image.addEventListener('mouseover',function(event){
  image.src = 'assets/img/vector.jpg'
});
image.addEventListener('mouseout',function(event){
  image.src = 'assets/img/flores.jpg'
});

});*/
window.addEventListener('load',function(event) {
var title = document.body.firstElementChild;
var image = document.body.children[1];
title.addEventListener('mouseover',function(event) {
 title.textContent = 'otra vez';
})
title.addEventListener('mouseout',function() {
 title.textContent = 'ush';
})
image.addEventListener('mouseover',function() {
 // event.currentTarget.src='assets/img/Cat-with-Hat.jpg';
  image.src = 'assets/img/vector.jpg';
})
image.addEventListener('mouseout',function() {
 image.src = 'assets/img/flores.jpg';
})
});
