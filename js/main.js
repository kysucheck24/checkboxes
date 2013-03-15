$(document).ready(function() {
	// Variables
	var $itemCheckbox = $('input[name^="chk"]');
	var $selectAll = $('.selectAll');

	// Select all checkboxes
	$selectAll.change(function() {
		var _self = $(this);
		if (_self.is(':checked')) {
			$itemCheckbox.each(function() {
				$(this).prop('checked', true);
			});
		} else {
			$itemCheckbox.each(function() {
				$(this).prop('checked', false);
			});
		}
		return false;
	});

	// Unchecked checkboxes for all select
	$itemCheckbox.change(function() {
		var flag = true;
		var _self = $('input[name^="chk"]');
		if (_self.is(':checked') === false) {
			$selectAll.prop('checked', false);
		}

		_self.each(function() {
			if ($(this).is(':checked') === false) {
				flag = false;
				return;
			}
		});

		$selectAll.prop('checked', flag);
	});
});