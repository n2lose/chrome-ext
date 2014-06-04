function init() {
	$.ajax({
		url      :  'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://blog.exoplatform.com/en/feed'),
		dataType : 'json',
		success  : function (data) {
			if (data.responseData.feed && data.responseData.feed.entries) {
				$.each(data.responseData.feed.entries, function (i, e) {
					if(i <= 4) {
						strLink = '<li><i class="blog-icon-check"></i>';
						strLink	+= '<a href="'+e.link+'" target="_blank">'+e.title+'</a></li>';		
						$(".blog-gadget .lastest").append(strLink);
					}
				});
			}
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});

