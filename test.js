$(function() {
	var $body = $('body');
	var color1 = "#F53265"; // red
	var color2 = "#32F5C2"; // green
	var gap = 0.00;

	$body.append($('<div class="example-1"></div>'));
	$body.append($('<div class="example-2"></div>'));
	$body.append($('<div class="example-3"></div>'));

	for (var p = 0.0; p <= 1.0; p += 0.01) {
		var bg = Blend.at(color1, color2, p);
		var $div = $('<div class="panel-2"></div>');

		$div.css('display', 'inline-block');
		$div.css('height', '50px');
		$div.css('margin-right', '0px');
		$div.css('width', '4px');
		$div.css('background-color', bg);

		$div.appendTo('.example-1');
	}

	for (var p = 0.0; p <= 1.0; p += 0.01) {
		var bg = Blend.at(color1, color2, p);
		var $div = $('<div class="panel"></div>');

		$div.css('display', 'inline-block');
		$div.css('height', '50px');
		$div.css('margin-right', gap + 'px');
		$div.css('width', gap * 1.5 +'px');
		$div.css('background-color', bg)

		gap += 0.05;

		$div.appendTo('.example-2');
	}

	for (var i = 0; i < 50; i++) {
		var max = 100, min = 0;
		var random_p = Math.floor(Math.random() * (max - min + 1)) + min;
		var bg = Blend.at(color1, color2, (random_p / 100));
		var $div = $('<div class="panel-3"></div>');

		$div.css('display', 'inline-block');
		$div.css('height', '50px');
		$div.css('margin-right', '0px');
		$div.css('width', '10px');
		$div.css('background-color', bg);
		console.log(random_p);
		console.log(bg);

		$div.appendTo('.example-3');
	}
});
