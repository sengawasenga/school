// handling navbar animation
$(".burger").click(() => {
	// nav animation
	$(".main-links").toggleClass("active");

	// bars animation
	$(".burger").toggleClass("toggle");
});

// handling the black navbar while scrolling
$(window).on("scroll", () => {
	if ($(window).scrollTop()) {
		$(".main-navbar").addClass("black-navbar");
	} else {
		$(".main-navbar").removeClass("black-navbar");
	}
});

$(".inscription-form button.next").click(() => {
	$(".inscription-form .inscription-part").removeClass("active");
	$(".inscription-form .inscription-part.parent").addClass("active");
});
