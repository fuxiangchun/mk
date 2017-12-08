var mySwiper = new Swiper ('.swiper-container', {
	autoplay: 2000,
    loop: true,
    autoplayDisableOnInteraction :false,
    //effect : 'cube',
    effect : 'cube',
	paginationClickable: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

  }) 
  
$(function(){
	$('.mene-much').bind("mouseenter",function(){
		$(this).children('.mene-much-1').css({'background':'#EEAFCE'});		
		$(this).children().find(".pink").css({'borderLeft':'14px solid #EEAFCE'});
		$(this).find('.img-left').css({			
			'transform':'translateX(-5px)',
			'transition':'all 0.2s'
		});
		$(this).find('.img-right').css({			
			'transform':'translateX(5px)',
			'transition':'all 0.2s'
		});
		$(this).children('.green').css({'background':'#97C86C'});
		$(this).children().find(".green-left").css({'borderLeft':'14px solid #97C86C'});
		$(this).children().find(".green-right").css({'borderRight':'14px solid #97C86C'});
		
		$(this).children('.blue').css({'background':'#8DCEDD'});
		$(this).children().find(".blue-left").css({'borderLeft':'14px solid #8DCEDD'});
		$(this).children().find(".blue-right").css({'borderRight':'14px solid #8DCEDD'});
	});
	
	$('.mene-much').bind("mouseleave",function(){
		$(this).children('.mene-much-1').css({'background':'#fff'});
		$('.menu-small').children('span').css({'borderLeft':'14px solid #fff'});
		
		
		$(this).find('.img-left').css({			
			'transform':'translateX(0)',
			'transition':'all 0.2s'
		});
		
		$(this).find('.img-right').css({			
			'transform':'translateX(0)',
			'transition':'all 0.2s'
		});
		
		$(this).children('.green').css({'background':'#fff'});
		$(this).children().find(".green-left").css({'borderLeft':'14px solid #fff'});
		$(this).children().find(".green-right").css({'borderRight':'14px solid #fff'});
		
		$(this).children('.blue').css({'background':'#fff'});
		$(this).children().find(".blue-left").css({'borderLeft':'14px solid #fff'});
		$(this).children().find(".blue-right").css({'borderRight':'14px solid #fff'});
	});
	
	
	
	$('.mene-much').bind("mouseenter",function(){
		//console.log($(this).children().find(".ink"))
		$(this).children().find(".ink").css({'borderRight':'14px solid #EEAFCE'});
		
	});
	$('.mene-much').bind("mouseleave",function(){
		$(this).children().find(".ink").css({'borderRight':'14px solid #fff'});
	});
	
	
	
	
	
	
	$('.menu-footer').bind("mouseenter",function(){
		$(this).find('.footer-left').css({			
			'transform':'translateX(-5px)',
			'transition':'all 0.2s'
		});
		
		$(this).find('.footer-right').css({			
			'transform':'translateX(5px)',
			'transition':'all 0.2s'
		});
	});
	
	
	$('.menu-footer').bind("mouseleave",function(){
		$(this).find('.footer-left').css({			
			'transform':'translateX(0)',
			'transition':'all 0.2s'
		});
		
		$(this).find('.footer-right').css({			
			'transform':'translateX(0)',
			'transition':'all 0.2s'
		});
	});
})

$(function(){
	$('#asid li').bind('mouseenter',function(){
		$(this).find("#box").show(1000);
	});
	
	$('#asid li').bind('mouseleave',function(){
		$(this).find("#box").hide();		
	});
	
	
	
	$('#over-1').bind('click',function(){
		$('#mene-mation').show(1000);
		
		
		
		
		showMask();
	});
	
	$('#over').bind('click',function(){
		$('#mene-mation').hide(1000);
		hideMask();
	})
	
	
	
});

function showMask(){     
        $("#mask").css("height",$(document).height());     
        $("#mask").css("width",$(document).width());     
        $("#mask").show();     
   	};
    //隐藏遮罩层  
    function hideMask(){               
        $("#mask").hide();     
    };

$(function(){
	$('.dianhua').bind('mouseenter',function(){
		$('#dian').css('display','block');
		$('#dian').animate({right:60,opacity:1})
	});
	
	$('.dianhua').bind('mouseleave',function(){
		
		$('#dian').animate({right:160,opacity:0},function(){
			$('#dian').css('display','none');
		})
		
	});
})

