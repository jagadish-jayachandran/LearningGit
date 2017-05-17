if(!$("#captcha").val()) {
	$("#captcha-info").html("(required)");
	$("#captcha").css('background-color','#FFFFDF');
	valid = false;
}
function refreshCaptcha() {
	$("#captcha_code").attr('src','captcha_code.php');
}