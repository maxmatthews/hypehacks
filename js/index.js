(function() {
	var scrollSpeed = 400

	//Waypoints
	$("section").each(function() {
		var $this = $(this)
		$this.waypoint({
			handler: function() {
				clearActiveNavs()
				var id = $this.attr("id")
				$("#nav-links li a[href='#" + id + "']").parent().attr("class", "active")
			}
		})
	})
	
	$("header").waypoint({
		handler: function() {
			clearActiveNavs()
		}
	})

	//Navbar click handlers
	$("#nav-logo > a").click(function(e) {
		e.preventDefault()
		$(window).scrollTo(0, scrollSpeed)
	})

	$("#nav-links > li a").click(function(e) {
		e.preventDefault()
		var target = $(this).attr("href")
		$(window).scrollTo($(target), scrollSpeed)
	})

	//Utils
	function clearActiveNavs() {
		$("#nav-links li").each(function() {
			$(this).attr("class", "")
		})
	}
})()