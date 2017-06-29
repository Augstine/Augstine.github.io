/**
 * Created by lilong on 2017/4/19.
 */

window.onload = function () {



    //¹Ì¶¨µ¼º½À¸¿ªÊ¼


    var head = document.getElementsByClassName("head")[0];
    var nav = document.getElementsByClassName("nav")[0];
    var location_index = document.getElementsByClassName("location_index")[0];
    var headHide = 0;
    //¹Ì¶¨µ¼º½À¸µÄÂß¼­³ÌÐòÔÚscrollº¯ÊýÀï±ß

    //¹Ì¶¨µ¼º½À¸½áÊø
    //´Î¼¶µ¼º½À¸  start
    $(".brand").mouseover(function() {
        $(this).find(".drop").stop().slideDown();
    }).mouseout(function() {
        $(this).find(".drop").stop().slideUp();
    })
    //´Î¼¶µ¼º½À¸  end

    //µÚÒ»¸öÔÂ·ÝµÄÍ¼Æ¬ÓÒ²àÍ¼Æ¬Ëõ·ÅÍ¼start
    //¸øÃ¿Ò»¸öÍ¼Æ¬Ìí¼Ó±³¾°
    // $(".month_list .zoom .zoom_frame .zoom_picture").click(function () {
    //     $(".month_list .zoom .bigImage").html('<img src="images/lilongZoom00'+($(this).index()+1)+'.jpg" alt=""/>');
    //     $(".month_list .zoom .bigImage").show(2000);
    //     $(".month_list .zoom .bigImage").dblclick(function () {
    //         $(".month_list .zoom .bigImage").fadeOut(2000);
    //     });
    // });

    //µÚÒ»¸öÔÂ·ÝµÄÍ¼Æ¬ÓÒ²àÍ¼Æ¬Ëõ·ÅÍ¼end




// //µÚÒ»¸öÔÂ·ÝµÄÍ¼Æ¬ÓÒ²àÍ¼Æ¬Ëõ·ÅÍ¼start
// $(".month_list .zoom .zoom_frame .zoom_picture").click(function () {
//     var flagZoomPicture = $(this).index()+1;
//     var jqimagesZoomFrame = $(".month_list .zoom .zoom_frame").children("li");
//     var imageZoomContent = $('<img src="images/lilongZoom00'+(flagZoomPicture)+'.jpg" alt=""/>');
//     $(".month_list .zoom .bigImage").prepend(imageZoomContent);
//     $(".month_list .zoom .bigImage").show(2000);
//     //ÉÏÒ»ÕÅÍ¼Æ¬°´Å¥µÄÂß¼­
//     $(".month_list .zoom .bigImage span.prevImage").click(function () {
//         imageZoomContent.animate({"width":0},1000, function () {
//             flagZoomPicture--;
//             if(flagZoomPicture === 0){
//                 flagZoomPicture=jqimagesZoomFrame.length;
//             }
//             imageZoomContent.remove();
//             imageZoomContent = $('<img src="images/lilongZoom00'+(flagZoomPicture)+'.jpg" alt=""/>');
//             $(".month_list .zoom .bigImage").prepend(imageZoomContent);
//             imageZoomContent.animate({"opacity":0},0.00000001);
//             imageZoomContent.animate({"opacity":1},1000);
//         });

//     });


//     //ÏÂÒ»ÕÅÍ¼Æ¬°´Å¥µÄÂß¼­
//     $(".month_list .zoom .bigImage span.nextImage").click(function () {


//         imageZoomContent.animate({"width":0},1000, function () {
//             flagZoomPicture++;
//             if(flagZoomPicture === jqimagesZoomFrame.length+1){
//                 flagZoomPicture = 1;
//             }
//             imageZoomContent.remove();
//             imageZoomContent = $('<img src="images/lilongZoom00'+(flagZoomPicture)+'.jpg" alt=""/>');
//             $(".month_list .zoom .bigImage").prepend(imageZoomContent);
//             //imageZoomContent.animate({"width":1200},2000);
//             imageZoomContent.animate({"opacity":0},0.00000001);
//             imageZoomContent.animate({"opacity":1},1000);
//         });

//     });


//     //Ë«»÷Í¼Æ¬ÍË³ö
//     $(".month_list .zoom .bigImage").dblclick(function () {
//         $(".month_list .zoom .bigImage").fadeOut(2000);
//     });
// });

// //µÚÒ»¸öÔÂ·ÝµÄÍ¼Æ¬ÓÒ²àÍ¼Æ¬Ëõ·ÅÍ¼end


//第一个月份的图片右侧图片缩放图start
$(".month_list .zoom .zoom_frame .zoom_picture").click(function () {
    var flagZoomPicture = $(this).index()+1;
    var jqimagesZoomFrame = $(".month_list .zoom .zoom_frame").children("li");
    var imageZoomContent = $('<img src="images/lilongZoom00'+(flagZoomPicture)+'.jpg" alt=""/>');
    $(".month_list .zoom .bigImage").prepend(imageZoomContent);
    $(".month_list .zoom .bigImage").show(2000);
    //上一张图片按钮的逻辑
    $(".month_list .zoom .bigImage span.prevImage").click(function () {
        $(".month_list .zoom .bigImage").animate({"width":0},1000, function () {
            flagZoomPicture--;
            if(flagZoomPicture === 0){
                flagZoomPicture=jqimagesZoomFrame.length;
            }
            imageZoomContent.remove();
            imageZoomContent = $('<img src="images/lilongZoom00'+(flagZoomPicture)+'.jpg" alt=""/>');
            $(".month_list .zoom .bigImage").prepend(imageZoomContent);
            $(".month_list .zoom .bigImage").animate({"width":1200},0.0000001, function () {
                $(".month_list .zoom .bigImage").animate({"opacity":0},0.0000001, function () {
                    $(".month_list .zoom .bigImage").animate({"opacity":1},1000);
                });
            });


        });

    });


    //下一张图片按钮的逻辑
    $(".month_list .zoom .bigImage span.nextImage").click(function () {


        $(".month_list .zoom .bigImage").animate({"width":0},1000, function () {
            flagZoomPicture++;
            if(flagZoomPicture === jqimagesZoomFrame.length+1){
                flagZoomPicture = 1;
            }
            imageZoomContent.remove();
            imageZoomContent = $('<img src="images/lilongZoom00'+(flagZoomPicture)+'.jpg" alt=""/>');
            $(".month_list .zoom .bigImage").prepend(imageZoomContent);
            $(".month_list .zoom .bigImage").animate({"width":1200},0.0000001, function () {
                $(".month_list .zoom .bigImage").animate({"opacity":0},0.0000001, function () {
                    $(".month_list .zoom .bigImage").animate({"opacity":1},1000);
                });
            });


        });

    });


    //双击图片退出
    $(".month_list .zoom .bigImage").dblclick(function () {
        $(".month_list .zoom .bigImage").fadeOut(2000);
    });
});

//第一个月份的图片右侧图片缩放图end
































    //¸øÃ¿ÈýÔÂ·ÝµÄÍ¼Æ¬Ìí¼ÓÑùÊ½start
    $("#monthListMmarch").find("li").mouseenter(function () {
        $(this).css("opacity",1).siblings("li").css("opacity",0.3);
    });
    $("#monthListMmarch").mouseleave(function () {
        $(this).find("li").css("opacity",1);
    });
    //¸øÈýÔÂ·ÝµÄÍ¼Æ¬Ìí¼ÓÑùÊ½end




    //¸ø¶þÔÂ·ÝµÄÍ¼Æ¬Ìí¼ÓÑùÊ½start
    $("#monthListFeb").find("li").click(function () {
        $(this).fadeTo(2000,1);
    }).mouseleave(function () {
        $(this).fadeTo(1000,0.1);
    });
    //¸ø¶þÔÂ·ÝµÄÍ¼Æ¬Ìí¼ÓÑùÊ½end

    //¸øÒ»ÔÂ·ÝµÄÍ¼Æ¬Ìí¼ÓÑùÊ½start
    $("#monthListJan").find("li").click(function () {
        hideOrShow();
    });

    //¸øÒ»ÔÂ·ÝµÄÍ¼Æ¬Ìí¼ÓÑùÊ½end

    //×îºóÒ»¸öÔÂ·ÝµÄÍ¼Æ¬ÑùÊ½²Á³öÍ¼Æ¬¿ªÊ¼
    var eraserStr = "";
    for(var i = 0; i < 100;i++){
        var leftEraser = i%6*44.5;
        var topEraser = parseInt(i/6)*31.5;
        eraserStr += "<div class ='eraserPic' style ='left:"+leftEraser+'px;'+"top:"+topEraser+'px;'+"background-position:"+(-leftEraser)+'px '+(-topEraser)+'px'+"'></div>";
    }
    $(".month_list_last ul li div.pic").html(eraserStr);
    var jqDivEraser = $(".month_list_last ul li div.pic");
    for(var j = 0; j < jqDivEraser.children("div").length; j++){
        jqDivEraser.children("div")[j].onmouseenter = function () {
            this.style.transition = "0s";
            this.style.opacity = 1;
        }
        jqDivEraser.children("div")[j].onmouseleave = function () {
            this.style.transition = "10s";
            this.style.opacity = 0.3;
        }
    }
    //×îºóÒ»¸öÔÂ·ÝµÄÍ¼Æ¬Ìí¼Ó±³¾°start
var jqLiArr =  $(".month_list_last ul").children("li");
for(var j = 0; j < jqLiArr.length; j++){
    jqLiArr.eq(j).find(".eraserPic").css("backgroundImage",'url(images/lilong2017030'+(j+1)+'.jpg)');
}

//×îºóÒ»¸öÔÂ·ÝµÄÍ¼Æ¬Ìí¼Ó±³¾°end

    //×îºóÒ»¸öÔÂ·ÝµÄÍ¼Æ¬ÑùÊ½²Á³öÍ¼Æ¬½áÊø


    //¹ö¶¯ÂÖ²¥Í¼¿ªÊ¼
    var trunPlay = document.getElementsByClassName("trunPlay")[0];
    var ul = trunPlay.children[2];
    var imgWidth = trunPlay.offsetWidth;
    var timer;
    var count=0;
    var num=0;
    var left = trunPlay.getElementsByClassName("left")[0];
    var right = trunPlay.getElementsByClassName("right")[0];



    //½ÚÁ÷Ä£Ê½¿ª¹ØÉùÃ÷
    var onOffTurnPlay = true;

    //ÂÖ²¥Í¼ÏÂ·½µÄ°´Å¥
    var ol = document.createElement("ol");
    trunPlay.appendChild(ol);
    for(var i = 0; i < ul.children.length; i++){
        var newOlLi = document.createElement("li");
        newOlLi.innerHTML = i+1;
        ol.appendChild(newOlLi);
    }
    var olLiArr = ol.children;
    ol.children[0].style.backgroundColor = "red";
    for(var j =0; j < olLiArr.length; j++){
        olLiArr[j].index = j;
        olLiArr[j].onmouseenter = function () {
            for(var i =0; i < olLiArr.length; i++){
                olLiArr[i].style.backgroundColor = "";
            }

            count = num =  this.index;
            olLiArr[num].style.backgroundColor = "red";
            animate(ul,{"left":-imgWidth*count});
        }
    }








    ul.appendChild(ul.children[0].cloneNode(true));
    var liArr = ul.children;

    for(var i = 0; i < liArr.length; i++){
        liArr[i].index = i;
    }
    trunPlay.onmouseenter = function () {
        left.style.zIndex = 1;
        right.style.zIndex = 1;
        clearInterval(timer);

    }
    right.onclick = function () {
        if(onOffTurnPlay){
            onOffTurnPlay = false;
            autoPlay();
        }

    }
    left.onclick = function () {
        if(onOffTurnPlay){
            onOffTurnPlay = false;
            count--;
            num--;
            if(num===-1){
                num = olLiArr.length-1;
            }
            if(count === -1){
                ul.style.left = -liArr.length*imgWidth + "px";
                count= liArr.length-2;
            }
            for(var i =0; i < olLiArr.length; i++){
                olLiArr[i].style.backgroundColor = "";
            }

            animate(ul,{"left":-imgWidth*count});
            olLiArr[num].style.backgroundColor ="red" ;
    }

    }
    timer = setInterval(autoPlay,1300);
    trunPlay.onmouseleave = function () {
        left.style.zIndex = 0;
        right.style.zIndex = 0;
        timer = setInterval(autoPlay,1300);
    }

    function autoPlay(){
        count++;
        num++;
        if(num === olLiArr.length){
            num=0;
        }
        if(count === liArr.length){
            ul.style.left = 0;
            count = 1;
        }
        for(var i =0; i < olLiArr.length; i++){
            olLiArr[i].style.backgroundColor = "";
        }
        olLiArr[num].style.backgroundColor = "red";
        animate(ul,{"left":-imgWidth*(count)});
    }


    //¹ö¶¯ÂÖ²¥Í¼½áÊø







    //·µ»Ø¶¥²¿Ð¡»ð¼ýstart
    var rocket = document.getElementsByClassName("rocket")[0];
    rocket.onclick = function () {

        if(onOffFloorRocket){
            onOffFloorRocket = false;
            clearInterval(timerRocket);
            var timerRocket = setInterval(function () {
                var leaderRocket = scroll().top;
                var stepRocket = (0 - leaderRocket)/10;
                stepRocket = stepRocket > 0 ? Math.ceil(stepRocket) : Math.floor(stepRocket);
                leaderRocket += stepRocket;
                window.scrollTo(0,leaderRocket);
                if(leaderRocket === 0){
                    clearInterval(timerRocket);
                    onOffFloorRocket = true;
                }
            },30)
        }

    }

    //·µ»Ø¶¥²¿Ð¡»ð¼ýend



    //Â¥²ãÌø×ª¿ªÊ¼

    var month_listArr = document.getElementsByClassName("month_list");

    var leaderFloorSkip = 0;
    var ol = document.getElementsByClassName("floorSkip")[0];

    for(var i = 0; i < month_listArr.length; i++){
        var newLi = document.createElement("li");
        newLi.innerHTML =month_listArr[i].getElementsByTagName("h3")[0].innerHTML;
        ol.appendChild(newLi);

    }
    var newLiArr = ol.children;


    //Îª±ÜÃâÌø×ªÂ¥²ãºÍÐ¡»ð¼ýµÄ³ÌÐò³åÍ»,ÉèÖÃÁËÒ»¸ö¿ª¹Ø
    var onOffFloorRocket =true;
    for(var j = 0; j < newLiArr.length; j++){
        newLiArr[j].index = j;
        newLiArr[j].onclick = function () {
            if(onOffFloorRocket){
                onOffFloorRocket = false;
                var targetFloorSkip = month_listArr[this.index].offsetTop -nav.offsetHeight ;
                clearInterval(timerFloorSkip);
                var timerFloorSkip = setInterval(function () {
                    var stepFloorSkip = (targetFloorSkip - leaderFloorSkip)/10;
                    stepFloorSkip = stepFloorSkip > 0 ? Math.ceil(stepFloorSkip) : Math.floor(stepFloorSkip);
                    leaderFloorSkip += stepFloorSkip;
                    window.scrollTo(0,leaderFloorSkip);
                    if(targetFloorSkip === leaderFloorSkip){
                        clearInterval(timerFloorSkip);
                        onOffFloorRocket = true;
                    }
                },30)
            }


        }

    }


    //¼ì²âÒ³ÃæµÄ¹ö¶¯¾àÀë(¸¨ÖúÂ¥²ãµ÷ÔÈ,·µ»Ø¶¥²¿Ð¡»ð¼ý,¹Ì¶¨µ¼º½À¸)
    window.onscroll = function () {
        //Â¥²ãÌøÔ¾
        leaderFloorSkip = scroll().top;


        //·µ»Ø¶¥²¿Ð¡»ð¼ý
        if(scroll().top > 1500){
            rocket.style.display = "block";
        }else{
            rocket.style.display = "none";
        }

        //¹Ì¶¨µ¼º½À¸
        if(scroll().top > head.offsetHeight){
            nav.style.position = "fixed";
            nav.style.top = 0;
            nav.style.zIndex = 4;
            location_index.style.marginTop = 55 +"px";
        }
        else{
            nav.style.position = "";
            location_index.style.marginTop = 0;
        }
    }


    //Â¥²ãÌø×ª½áÊø


    function animate(ele,json,fn){
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var bool = true;
            for(var k in json){
                if(k==="z-index"){
                    ele.style.zIndex = json[k];
                }else if(k==="opacity"){
                    if(getStyle(ele,k)*10===0){
                        var leader = 0;
                    }else{
                        var leader = parseInt(getStyle(ele,k)*10) ||10;
                    }
                    var step = (parseInt(json[k])*10 -leader)/10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    ele.style[k] = leader/10;
                    ele.style.filter = "alpha(opacity="+leader*10+")";
                    if(leader!==parseInt((json[k])*10)){
                        bool = false;
                    }
                }else{
                    var leader = parseInt(getStyle(ele,k)) || 0;
                    var step = (json[k] - leader)/10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    ele.style[k] = leader + "px";
                    if(leader !==json[k]){
                       bool = false;
                    }
                }
            }
            if(bool){
                clearInterval(ele.timer);
                onOffTurnPlay = true;
                if(fn){
                    fn();
                }
            }
        },30)
    }


    //»ñÈ¡ÑùÊ½º¯Êý
    function getStyle(ele,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(ele,null)[attr];
        }else{
            return ele.currentStyle[attr];
        }
    }

    //»ñÈ¡ÆÁÄ»µÄ¹ö¶¯¾àÀëº¯Êý
    function scroll(){
        return {
            left:window.pageXOffset || document.documentElement.scrollLeft,
            top:window.pageYOffset || document.documentElement.scrollTop
        }
    }

    function hideOrShow() {
        //ÏÔÊ¾ÕÚÕÖ²ãºÍÌí¼Ó±íµ¥µÄºÐ×Ó;
        $("#j_mask").toggle();
        $("#j_formAdd").toggle();
    }


}
