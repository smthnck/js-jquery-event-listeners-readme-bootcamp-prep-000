function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
  })
}

function frameIt(){
  $('img').on('load',function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
<<<<<<< HEAD
  $('input').on('keydown',function(e){
    if(e.which===71){
=======
  $('form input').on('keydown',function(e){
    if(e.key===83){
>>>>>>> a0690ac275478be62d828f865e80903dec8c1476
      alert('you pressed g!');
    }
  })
}

function submitIt(){
  $('form').on('submit',function(){
    alert ('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt;
});
