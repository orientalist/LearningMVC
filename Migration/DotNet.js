var rootDot;
$(document).ready(function(){
    rootDoc="DotNet";
    initDotNet();
});

var initDotNet=function(){
    initDashBoard();
    $("#menu").menu();
    initMenuItmClick();
}