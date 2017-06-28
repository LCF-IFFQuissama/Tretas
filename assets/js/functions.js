window.onscroll = function(){

    var top = window.pageYOffset || document.documentElement.scrollTop;

    if( top > 150 ) {

        $('#mainNav').removeClass('fadeOut').addClass('fadeIn');
        $('#logo').removeClass('fadeIn').addClass('fadeOut');

        document.getElementById("mainNav").style.display = "block";
    	/*document.getElementById('logo').style.display = "none";	*/
    }
    else if( top < 150 ) {

        $('#mainNav').removeClass('fadeIn').addClass('fadeOut');
        $('#logo').removeClass('fadeOut').addClass('fadeIn');
    	/*document.getElementById('logo').style.display = "block";*/

    }
}

window.onload = function(){
    document.getElementById('mainNav').style.display = "none";	
}