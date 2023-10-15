'use strict';

$(document).ready(function() {
	$('#mountain-one, #mountain-two').click(function() {
		$('#mountain-one, #mountain-two').toggleClass('active inactive');
		$('#tab-one-image, #tab-two-image').toggleClass('active-tab-image inactive-tab-image');
		$('#schedule-section').toggleClass('active-section inactive-section');
	});
});
