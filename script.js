$(document).ready(function() {
	let widthNumber = 16;
	let heightNumber = 16;

	function makeGrid() {
		let gridCount = widthNumber * heightNumber;
		for (var i = 0; i < gridCount; i++) {
			$("<div class='grid'</div>").appendTo('#container');
		}
		$('.grid').width((780 / widthNumber) - 2);
		$('.grid').height((780 / heightNumber) - 2);
		$('.grid').hover(function() {
			$(this).addClass('hover');
		});
	}
	makeGrid();

	$('button').on('click', function() {
		$('div').remove('.grid');

		let numGridHeight = prompt("Choose the number of boxes in the y-direction.");
		let numGridWidth = prompt("Choose the number of boxes in the x-direction.");

		heightNumber = parseInt(numGridHeight);
		widthNumber = parseInt(numGridWidth);

		makeGrid();
	});
});