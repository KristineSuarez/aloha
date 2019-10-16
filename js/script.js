document.addEventListener("DOMContentLoaded", function () {
  console.log('clicked');
  
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
    autoPlay: 1500
  });

  
}); 



document.getElementById('sign-up-form').addEventListener("submit", function(event)
{ 
  event.preventDefault();

  const emailInputVal = document.getElementById('your-email').value;

  if(emailInputVal.length > 0){
    alert("Thank you for subscribing!");
  }else {
    alert("Please enter a valid email");
  }
});
