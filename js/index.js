(function() {
    $('.dinosaur').raptorize();


    //HYPEOUT - SEIZURE WARNING
    $('.hypebutton').click(function() {
        goHype();
    });



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

function goHype() {
	console.log("HYPE");
    $("*").each(function() {
    	$(this).css('position', "fixed");
        animateDiv($(this));
    });

    window.setInterval(function() {
        $("*").each(function(index) {
            $(this).css('background-color', getRandomColor());
        });
    }, 300);
}


function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv(c) {
    var newq = makeNewPosition();
    $(c).animate({
        top: newq[0],
        left: newq[1]
    }, function() {
        animateDiv(c);
    });

};



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}