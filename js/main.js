$(window).load(function(){
	$('#container').delay(400).animate({ opacity: 1 }, 700);
	$('.post-link').on('click', function() {
		$('#page-message').slideDown();
	});
});