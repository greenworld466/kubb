$(function() {
 $('.back-top').click(function() {
 $('html,body').animate({scrollTop: 0},2000);    
 });   
    
 $(window).scroll(function(){
     var scrolling = $(this).scrollTop();
     if(scrolling >100){
     $('.header').addClass('bg');    
     }else{
         $('.header').removeClass('bg')
     }
 });   
 $(window).on('load', function(){
   $('.preloader').delay(500).fadeOut(500);  
 });
    
  $(".typed").typed({
		strings: ["kubb.", "green.", "world."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});  
    
    $('.counter').counterUp({
                delay: 30,
                time: 3000
            });
    
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Jan 11, 2021 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)
    

$('.venobox').venobox(); 
    
});