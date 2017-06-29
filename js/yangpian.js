$(function () {


    $("#hzl-ad").slideDown(1000).children("#hzl-ad span").click(function () {
        $("#hzl-ad").fadeOut();
    });

    var timer = null;
    var leader = 0;

    $("#hzl-xhj")
    window.onscroll = function () {
         var top = $(document).scrollTop();
        if($(".head").height()<top) {
            $(".nav").addClass("fixed");
            $(".topBanner").css("margin-top",$(".nav").height());
        }else {
            $(".nav").removeClass("fixed");
            $(".topBanner").css("margin-top",0);
        }


        if (scroll().top > 500) {

            $("#hzl-xhj").slideDown();
        } else {

            $("#hzl-xhj").slideUp();
        }

        leader = scroll().top;
    }


     //次级导航栏  start
    $(".brand").mouseover(function() {
        $(this).find(".drop").stop().slideDown();
    }).mouseout(function() {
        $(this).find(".drop").stop().slideUp();
    })
    //次级导航栏  end
    
    $("#hzl-xhj").click(

      function () {

        clearInterval(timer);
        timer = setInterval(function () {
            var step = (0 - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if (leader === 0) {
                clearInterval(timer);
            }
        }, 30);
    })
    $("#hzl-ewmlj").mouseover(function () {
        $("#hzl-ewm").stop(true).fadeIn();
    });

    $("#hzl-ewmlj").mouseout(function () {
        $("#hzl-ewm").stop(true).fadeOut();
    });




// 照片展示样式
    $(".scbanar .scbanart").mouseover(function(){


            $(".hzlc1").animate({"width":0,"opacity":0},2000,function(){

                $(".tpde1").animate({"width":1399,"opacity":1},2000);
                $(".hzlc2").animate({"width":0,"opacity":0},2000);
                $(".tpde2").animate({"opacity":1},3000);
            });
            $(".hzlc3").animate({"width":0,"opacity":0},2000,function(){
                $(".tpde3").animate({"width":1399,"opacity":1},2000);
                $(".hzlc4").animate({"width":0,"opacity":0},2000);
                $(".tpde4").animate({"opacity":1},3000);
            });
            console.log(1);

    })//mouseover

    $(".tpde").click(function(){
       $(this).animate({"opacity":0},2500);
       $(".deb li").animate({"width":400,"opacity":1},2000);

    })//deb


$(".buzhidao li").mouseover(function(){

    $(this).find("img").stop().animate({"opacity":0.5});

})//mouseover


    $(".buzhidao li").mouseleave(function(){

        $(this).find("img").stop().animate({"opacity":1});

    })//mouseover

    //五星评价
     var oBox=document.getElementById("box");
            var aLi=oBox.getElementsByTagName("li");
           
            

            var clickIndex=-1;
            for(var i=0;i<aLi.length;i++){
                aLi[i].index=i;
                aLi[i].onmouseover=function(){
                    for(var i=0;i<aLi.length;i++){
                        aLi[i].style.background="url(images/yangpian/star-default.jpg)";
                    };
                    if(this.index>1){
                        for(var i=0;i<=this.index;i++){
                            aLi[i].style.background="url(images/yangpian/star-good.jpg)";
                        };
                    }else{
                        for(var i=0;i<=this.index;i++){
                            aLi[i].style.background="url(images/yangpian/star-bad.jpg)";
                        };
                    }
                   
                }

                aLi[i].onmouseout=function(){
                    for(var i=0;i<aLi.length;i++){
                        aLi[i].style.background="url(images/yangpian/star-default.jpg)";
                    };
                    if(clickIndex!=-1){
                        for(var i=0;i<=clickIndex;i++){
                            if(clickIndex>1){
                                aLi[i].style.background="url(images/yangpian/star-good.jpg)";
                            }else{
                                aLi[i].style.background="url(images/yangpian/star-bad.jpg)";
                            }
                        };
                       
                    }else{
                        for(var i=0;i<aLi.length;i++){
                            aLi[i].style.background="url(images/yangpian/star-default.jpg)";
                        };
                       
                    }

                }
                aLi[i].onclick=function(){
                    clickIndex=this.index;
                }

            };



});//window


