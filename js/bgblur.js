$('#home textarea').focus(function() {
	$('#home .blurBackground').css('opacity', 1);
});

$('#home textarea').focusout(function() {
	$('#home .blurBackground').css('opacity', 0);
});