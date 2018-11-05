$(document).ready(function() {
  initialComponent();
});
var initialComponent = function() {
    $(".nav-link").click(function() {
    $("#render_body").html("");
    fnGetRenderbody(this);
  });
};
var fnGetRenderbody = function(e) {
  if (!$(e).hasClass("noChild")) {    
    $.ajax({
      url: $(e).attr("id"),
      dataType: "html"
    }).done(function(content) {
      $("#render_body").html(content);
    });
  }
};
var initDashBoard = function() {
  var heightOfNav=$("#topBar").outerHeight();
  $("#dashBoard").css("margin-top",heightOfNav+"px"); 
  $(".page_body").css("margin-top",heightOfNav+"px"); 
  var heightOfVH=$(window).height();
  heightOfVH=heightOfVH-heightOfNav;
  $(".page_body").css("height",heightOfVH+"px");
  var widthOfDashBoard = $("#dashBoard").width();
  var animateDistance = -(widthOfDashBoard - 15).toString() + "px";
  $("#db_button").click(function() {
    if ($("#dashBoard").hasClass("db_open")) {
      $("#dashBoard").animate(
        {
          "margin-left": animateDistance
        },
        "slow"
      );
      $("#dashBoard").removeClass("db_open");
      $("#dashBoard").addClass("db_close");
    } else {
      $("#dashBoard").animate(
        {
          "margin-left": "0px"
        },
        "slow"
      );
      $("#dashBoard").removeClass("db_close");
      $("#dashBoard").addClass("db_open");
    }
  });
};
var initMenuItmClick=function(){  
  $(".Menu_Item").click(function(e) {           
    var urlStr = rootDoc + "/";
    var Nodes=$(e.currentTarget).parentsUntil('#menu');

    var str="";

    var ParentNode=$(e.currentTarget).parent()[0];
    while($(ParentNode).attr("id")!='menu'){      
      if(ParentNode.localName=='li'){        
        str=$(ParentNode).children('div')[0].innerText+"/"+str;        
      }
      ParentNode=$(ParentNode).parent()[0];
    }
    str=rootDoc+'/'+str;
    
    str=str.substr(0,str.length-1);
    str+=".html";    
    str=str.replace(/ /g,"");
    $(".page_body").load(decodeURI(encodeURI(str)));
    $("#db_button").click();
  });
} 
var initElements=function(){
  $.each($(".sampleElement"),function(index,value){
    var color=$(value).css("border-color");
    $(value).children('div:nth-child(1)').css("background-color",color);
    $(value).children('div:last-child').css("background-color",color);
  });
}