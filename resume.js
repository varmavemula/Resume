var experience = document.getElementById('experience');
var expbutton = document.getElementById('exp-nav');
var init = 0;
var target = 1000;
var scrollInterval = setInterval(function(){
	if(init>=target){
		clearInterval(scrollInterval);
		return;
	}
	else{
		init+=50;
		window.scrollBy(0,50);
	}
},50);
