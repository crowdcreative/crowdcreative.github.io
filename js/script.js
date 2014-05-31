$(document).ready(function() {
	$(this).scrollTop(0);
	$(window).load(function() {
		$('.doc-loader').fadeOut('slow');
	});
	$(window).bind('scroll', function(e) {
		parallaxScroll();
	});

  $('#my-slideshow').bjqs({
    'height' : 600,
    'width' : 1000,
    'responsive' : true,

		// animation values
		'animtype' : 'slide', // accepts 'fade' or 'slide'
		'animduration' : 650, // how fast the animation are
		'animspeed' : 12000, // the delay between each slide
		'automatic' : true, // automatic

		// control and marker configuration
		'centercontrols' : false, // center controls verically		
		'nexttext' : '>>', // Text for 'next' button (can use HTML)
		'prevtext' : '<<', // Text for 'previous' button (can use HTML)
		'showmarkers' : false, // Show individual slide markers
		'centermarkers' : false, // Center markers horizontally		

		// interaction values
		'keyboardnav' : true, // enable keyboard navigation
		'hoverpause' : true, // pause the slider on hover    
  });	

	function parallaxScroll() {
		var scrolled = $(window).scrollTop();
		$('#take-me-home-bg').css('top', -(0 + (scrolled * .05)) + 'px');
		$('#dis-fixed').css('top', -(0 + (scrolled * .15)) + 'px');
	}
	$("#economia").hover(
		function() {
			$("#economia-bg").fadeIn();
			$("#logoa-bg").fadeOut("fast");
			$("#logoa").css({
				"background-image": "url('../images/logoa.png')"
			});
			$("#logob-bg").fadeOut("fadeout");
			$("#logob").css({
				"background-image": "url('../images/logob.png')"
			});
		},
		function() {
			$("#economia-bg").fadeOut("fast");
		});
	$("#criativa").hover(
		function() {
			$("#criativa-bg").fadeIn();
			$("#logoa-bg").fadeOut("fast");
			$("#logoa").css({
				"background-image": "url('../images/logoa.png')"
			});
			$("#logob-bg").fadeOut("fast");
			$("#logob").css({
				"background-image": "url('../images/logob.png')"
			});
		},
		function() {
			$("#criativa-bg").fadeOut("fast");
		});
	$("#pluralidade").hover(
		function() {
			$("#pluralidade-bg").fadeIn();
			$("#logoa-bg").fadeOut("fast");
			$("#logoa").css({
				"background-image": "url('../images/logoa.png')"
			});
			$("#logob-bg").fadeOut("fast");
			$("#logob").css({
				"background-image": "url('../images/logob.png')"
			});
		},
		function() {
			$("#pluralidade-bg").fadeOut("fast");
		});
	$("#logoa").mouseenter(function() {
		$("#logoa-bg").show();
		$(this).css({
			"background-image": "url('../images/logoa-hover.png')"
		});
		$("#logob-bg").fadeOut("fast");
		$("#logob").css({
			"background-image": "url('../images/logob.png')"
		});
	});
	$("#dis-fixed").mouseenter(function() {
		$("#logoa-bg").fadeOut("fast");
		$("#logoa").css({
			"background-image": "url('../images/logoa.png')"
		});
	});
	$("#logob").mouseenter(function() {
		$("#logob-bg").show();
		$(this).css({
			"background-image": "url('../images/logob-hover.png')"
		});
		$("#logoa-bg").fadeOut("fast");
		$("#logoa").css({
			"background-image": "url('../images/logoa.png')"
		});
	});
	$("#dis-fixed").mouseenter(function() {
		$("#logob-bg").fadeOut("fast");
		$("#logob").css({
			"background-image": "url('../images/logob.png')"
		});
	});
	$(".navigation a").click(function() {
		$(".navigation a").css({
			"color": "#ffffff"
		});
		$(this).css({
			"color": "#ED145B"
		});
	});
	$(window).bind('scroll', function(e) {
		parallaxScroll();
	});
	$("#goku").click(function() {
		$("#branco").fadeIn("slow");
		$.doTimeout(1500, function() {
			$(document).scrollTop(0);
			$("#exposure").fadeIn();
			$(".logo").hide();
		});
		$.doTimeout(1500, function() {
			$("#branco").fadeOut("slow");
		});
		$.doTimeout(2600, function() {
			// INICIO DA ANIMACAO
			$("#exposure").fadeOut(2000);
			$(".logo").fadeIn(2000);
			// FIM DA ANIMACAO
		});
		$("#navegador-b , #navegador-c").hide().css({
			"bottom": "-=50px"
		});
	});
});