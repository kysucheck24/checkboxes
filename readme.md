# Checked and Unchecked Checkboxes

This is a jQuery plugin support checked and unchecked checkboxes

## HTML

    <h3><input type="checkbox" class="selectAll"><span>Select All</span></h3>
	<ul class="list">
		<li><input type="checkbox" id="chk01" name="chk01"><span>Item 01</span></input></li>
		<li><input type="checkbox" id="chk02" name="chk02"><span>Item 02</span></input></li>
		<li><input type="checkbox" id="chk03" name="chk03"><span>Item 03</span></input></li>
		<li><input type="checkbox" id="chk04" name="chk04"><span>Item 04</span></input></li>
		<li><input type="checkbox" id="chk05" name="chk05"><span>Item 05</span></input></li>
		<li><input type="checkbox" id="chk06" name="chk06"><span>Item 06</span></input></li>
		<li><input type="checkbox" id="chk07" name="chk07"><span>Item 07</span></input></li>
		<li><input type="checkbox" id="chk08" name="chk08"><span>Item 08</span></input></li>
		<li><input type="checkbox" id="chk09" name="chk09"><span>Item 09</span></input></li>
		<li><input type="checkbox" id="chk10" name="chk10"><span>Item 10</span></input></li>
	</ul>

## USE
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="checkboxes.js"></script>
	<script>
		$(document).ready(function() {
			$('.selectAll').checkboxes({
				itemSelect: 'chk' // all checkbox
			});
		});
	</script>