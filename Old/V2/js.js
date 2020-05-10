function EasterEgg() {
			window.open("hover.html", "_self");
		}

    $(function(){
      var $container = $('#container');
  	var $insta = $('#instalogo');
  	var $yt = $('#ytlogo');
  	var $st = $('#stlogo');
  	var $gh = $('#ghlogo');
  	var $tw = $('#twlogo');
		var $pr = $('#projects');

      $container.mouseover(function(){
        var rgb = [
          parseInt(Math.random() * 255),
          parseInt(Math.random() * 255),
          parseInt(Math.random() * 255)
        ];
        $container
     	  .css('background-color', 'rgb(' + rgb.join(',') + ')')
          .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');

  	   $insta
  	   .css('border-bottom-color', 'rgb(' + rgb.join(',') + ')')
          .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');

  		$yt
  	   .css('border-bottom-color', 'rgb(' + rgb.join(',') + ')')
          .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');

  		$st
  	   .css('border-bottom-color', 'rgb(' + rgb.join(',') + ')')
          .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');

  		$gh
  	   .css('border-bottom-color', 'rgb(' + rgb.join(',') + ')')
          .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');

  		$tw
  	   .css('border-bottom-color', 'rgb(' + rgb.join(',') + ')')
          .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');

			$pr
		   .css('border-color', 'rgb(' + rgb.join(',') + ')')
		     .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
    });
     });
