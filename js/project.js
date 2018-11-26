
// navbar1
let navLink=$(".navbar-nav li a");
let sections=$("section");
navLink.click(function(){
	for(let i=0;i<sections.length;i++){
		if(($(sections[i]).attr("name"))==$(this).html()){
			let section=$(sections[i]);
			console.log(section.offset().top)
			$("html, body").animate({ scrollTop: section.offset().top }, 600);
		}
	}
})


// navbar2
$(window).scroll(function(){
	console.log(Math.floor($(window).scrollTop()))
	if($(window).scrollTop()>30){
		$("nav").css({
			background:"gray",
			top:$(window).scrollTop()+"px"
		})
	}
})


// countdown timer

function makeTimer() {

	var endTime = new Date("March 7, 2018 12:00:00 PDT");            
	var endTime = (Date.parse(endTime)) / 1000;

	var now = new Date();
	var now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#days").html(days + '<span class="camp">Days</span>');
	$("#hours").html(hours + '<span class="camp">Hour</span>');
	$("#minutes").html(minutes + '<span class="camp">Minute</span>');
	$("#seconds").html(seconds + '<span class="camp">Second</span>');       

}

setInterval(function() { makeTimer(); }, 1000);

// slider


 
