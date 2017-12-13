$(function() {
	$('#asid li').bind('mouseenter', function() {
		$(this).find("#box").show(1000);
	});

	$('#asid li').bind('mouseleave', function() {
		$(this).find("#box").hide();
	});

	$('#over-1').bind('click', function() {
		$('#mene-mation').show(1000);

		showMask();
	});

	$('#over').bind('click', function() {
		$('#mene-mation').hide(1000);
		hideMask();
	})

});

function showMask() {
	$("#mask").css("height", $(document).height());
	$("#mask").css("width", $(document).width());
	$("#mask").show();
};
//隐藏遮罩层  
function hideMask() {
	$("#mask").hide();
};




$(function() {
	$('.dianhua').bind('mouseenter', function() {
		$('#dian').css('display', 'block');
		$('#dian').animate({
			right: 60,
			opacity: 1
		})
	});

	$('.dianhua').bind('mouseleave', function() {

		$('#dian').animate({
			right: 160,
			opacity: 0
		}, function() {
			$('#dian').css('display', 'none');
		})

	});
})