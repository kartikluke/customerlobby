// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
// Loads all Bootstrap javascripts
//= require bootstrap
//= require_tree .

jQuery(document).ready(function($) {
	$('#update-contact').modal('show');
	$('.open-the-modal').click(function(event) {
		$('#update-contact').modal('show');
	});

	var resize = function() {
		$('#details, #activity').css("height", $('.wrapper').height()-$('#bread').height())
		$('#nav').css("height", $('.wrapper').height())
	}

	resize();

	$('#modal-form').submit(function(event) {
		$('#update-contact').modal('hide');
		return false;
	});

});