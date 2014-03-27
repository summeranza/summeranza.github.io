$('.down-arrow').click(function() {
    $('html, body').animate({
        scrollTop: $(".camp-desc-container").offset().top
    }, 1000);  
});

$('.get-ticket-button').click(function() {
    $('html, body').animate({
        scrollTop: $(".registration").offset().top
    }, 3000);  
});


$(function () {
	$('.btn-social-media').on('click',function(e){
		e.preventDefault();
		var box = $('.'+$(this).data('target')), shown = $('.show');
		if (!box.hasClass('show')) box.addClass('show');
		shown.removeClass('show');
	});
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});
});

$(document).ready(function(){
   // Change the image of hoverable images
   $(".over").hover( function() {
       var hoverImg = HoverImgOf($(this).attr("src"));
       $(this).attr("src", hoverImg);
     }, function() {
       var normalImg = NormalImgOf($(this).attr("src"));
       $(this).attr("src", normalImg);
     }
   );
});

function HoverImgOf(filename)
{
   var re = new RegExp("(.+)\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1_hover.$2");
}
function NormalImgOf(filename)
{
   var re = new RegExp("(.+)_hover\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1.$2");
}




jQuery(document).ready(function() {

	$(".video").click(function() {
		$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',			
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			'wmode'				: 'transparent',
			'allowfullscreen'	: 'true',
			fitToView	: true,
			width		: '100%',
			height		: '100%' 
			}
		});

		return false;
	});



});
