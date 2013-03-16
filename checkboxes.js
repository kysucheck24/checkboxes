(function($) {

	$.fn.extend({
		checkboxes: function(options) {
			// Default options
			var defaults = {
				itemSelect: ''
			};

			var option = $.extend(defaults, options);

			return this.each(function() {
				var obj = option;
				var $selectAll = $(this);
				var $itemCheckbox = $('input[name^="' + obj.itemSelect + '"]');

				// Checked All Checkboxes Before Load Page
				if ($selectAll.is(':checked')) {
					$itemCheckbox.each(function() {
							$(this).prop('checked', true);
					});
				}

				// Select All Checkboxes
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
					var _self = $('input[name^="' + obj.itemSelect + '"]');

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
		}
	});
})(jQuery);