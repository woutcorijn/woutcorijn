document.designMode = "off"

    		function myFunction() {
			var Open = window.open("2sites/twee/hover.html", "_self");
		}

	function snackbar() {
			var x = document.getElementById("snackbar")
			x.className = "show";
			setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		}
	