/* jshint browser: true */
/* globals $:false */
/*alert("sup");*/

//Slowly scrolls to clicked section

$('#myTopnav').on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
window.onload = function () {
    //Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }

        function hideMenu() {
            document.getElementById("myTopnav").className = "topnav";
        }
    
};