
$('#small-box img').bind('click', function () {
       $("#middle-box img")[0].src=$(this)[0].src;
       $("#large-box img")[0].src=$(this)[0].src;
       $(this).addClass("active").siblings().removeClass("active");
       
});

$(function(){

	var oEnlargeBox=$('#details-top-left');
	var oMiddleBox =$('#middle-box');
	var oShadow    =$('#shadow');
	var oLargeImg  =$('#large-img');
	var oLargeBox  =$('#large-box');
	
	var iMaxL = oMiddleBox[0].offsetWidth  - oShadow[0].offsetWidth;
  	var iMaxT = oMiddleBox[0].offsetHeight - oShadow[0].offsetHeight;
    
     
    
    oMiddleBox.bind("mousemove",function(ev){   	
    	var e = ev || window.event;
        var
            iL = e.pageX - oEnlargeBox[0].offsetLeft - oShadow[0].offsetWidth / 2-58;
            iT = e.pageY - oEnlargeBox[0].offsetTop  - oShadow[0].offsetHeight / 2;
	            
	    iL = Math.max(iL , 0);
        iT = Math.max(iT , 0);
        iL = Math.min(iL , iMaxL);
        iT = Math.min(iT , iMaxT);       
       
	    oShadow.css('left',iL + 'px');
        oShadow.css('top',iT+ 'px');
     
        var iBigImgL = iL * (oLargeImg[0].offsetWidth - oLargeBox[0].offsetWidth) / iMaxL;
        var iBigImgT = iT * (oLargeImg[0].offsetHeight - oLargeBox[0].offsetHeight) / iMaxT;

        oLargeImg.css('left',-iBigImgL + 'px');  
        oLargeImg.css('top' ,-iBigImgT + 'px');        
    });
    
    
    oMiddleBox.bind("mouseenter",function(){
    	oShadow.css('left','0');
    	oLargeBox.css('display','block');
    });   
    oMiddleBox.bind("mouseleave",function(){
    	oShadow.css('left','-1000px');
    	oLargeBox.css('display','none');
	});
});

$(function(){
	$('.sub-naver-1 li').bind('mouseenter',function(){
		$(this).find("a").css('background','#B2B2B2').parent().siblings().children().css("background","#E1E1E1");
	});
	
	$('.co-2').bind('mouseenter',function(){
		$('.sub-naver-3').css('display','block');
		$('.sub-naver-2').css('display','none');
		$('.sub-naver-4').css('display','none');
	});
	$('.co-3').bind('mouseenter',function(){
		$('.sub-naver-4').css('display','block');
		$('.sub-naver-3').css('display','none');
		$('.sub-naver-2').css('display','none');
	});
	$('.co-1').bind('mouseenter',function(){
		$('.sub-naver-2').css('display','block');
		$('.sub-naver-3').css('display','none');
		$('.sub-naver-4').css('display','none');
	});
	
})
function showMask() {
	$("#mask").css("height", $(document).height());
	$("#mask").css("width", $(document).width());
	$("#mask").show();
};
//隐藏遮罩层  
function hideMask() {
	$("#mask").hide();
};

$(function(){
	$('#jiaru').bind('click',function(){
		showMask();
		$('#tan').css('display','block');
	});
	$('#xx').bind('click',function(){
		hideMask();
		$('#tan').css('display','none');
	});
	$('.sett').bind('click',function(){
		hideMask();
		$('#tan').css('display','none');
	});
})











