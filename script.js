// Scroll to section when nav link is clicked
$(document).on("click", "nav a", function(e) {
	e.preventDefault();
	var section = $(this).attr("href");
	$("html, body").animate({
		scrollTop: $(section).offset().top
	}, 1000);
});

// Show and hide mobile nav
$(".menu-icon").click(function() {
	$("nav ul").slideToggle();
});

// Show and hide read more text in portfolio section
$(".read-more-link").click(function(e) {
	e.preventDefault();
	$(this).prev(".read-more-text").slideToggle();
	if ($(this).text() == "Read More") {
		$(this).text("Read Less");
	} else {
		$(this).text("Read More");
	}
});