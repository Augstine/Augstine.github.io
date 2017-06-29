/**
 * Created by admin on 2017/4/19.
 */



window.onload = function(){
    // var priceActive = document.getElementsByClassName("priceactive")[0];
    // var padisplay = document.getElementsByClassName("padisplay")[0];
    // priceActive.onmouseover = function(){
    //     padisplay.style.display = "block";
    // }
    // priceActive.onmouseout = function(){
    //     padisplay.style.display = "none";
    // }
    


    //--------------------ÂÖ²¥---------------------
    //»ñÈ¡ÊÂ¼þÔ´
    var lunbo = document.getElementsByClassName("lunbo")[0];
    var ul = lunbo.getElementsByTagName("ul")[0];
    var ulLiArr = ul.children;
    var ol = ul.nextElementSibling || ul.nextSibling;
    var olLiArr = ol.children;
    var arr = document.getElementsByClassName("arr")[0];
    var imgWidth = lunbo.offsetWidth;

    var left = arr.children[0];
    var right = arr.children[1];

    //Êó±ê½øÈëÐ¡Ô²µã,µãÁÁµ±Ç°Ô²µã,
    //ÐèÇó2: Êó±ê·Åµ½olÖÐµÄliÉÏ,ÈÃulÒÆ¶¯¶ÔÓ¦Ë÷ÒýÖµ¸öÍ¼Æ¬µÄ¿í¶È;(°¸Àý1)
    ul.appendChild(ulLiArr[0].cloneNode(true))
    for(var i=0;i<olLiArr.length;i++){
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function(){
            for(var j=0;j<olLiArr.length;j++){
                olLiArr[j].className = "";
            }
            this.className = "current";
            animate2(ul,-this.index*imgWidth);
            key = squ = this.index;
        }

    }



    var key = 0;//Ô²µãË÷ÒýÖµ;
    var squ = 0;//Í¼Æ¬Ë÷ÒýÖµ;



    right.onclick = autoPlay;


    left.onclick = function (){
        key--;
        squ--;
        if(key === -1){
            key =olLiArr.length-1;
        }
        if(squ === -1){
            ul.style.left = -(ulLiArr.length-1)*imgWidth+"px";
            squ = ulLiArr.length-2;
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[key].className = "current";
        //(2).ÒÆ¶¯ul£»
        animate2(ul,-squ*imgWidth)

    }


    var timer = setInterval(autoPlay,2500)
    //Êó±ê½øÈëÂÖ²¥Çø;·½Ïò¼ýÍ·¸¡ÏÖ;
    lunbo.onmouseover = function (){
        arr.style.display = "block"
        clearInterval(timer);
    }
    lunbo.onmouseout = function (){
        arr.style.display = "none"
        timer = setInterval(autoPlay,2500)
    }

    function autoPlay(){
        key++;
        squ++;
        if(key === olLiArr.length){
            key = 0;
        }
        if(squ === 5){
            ul.style.left =0;
            squ = 1;
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[key].className = "current";
        animate2(ul,-squ*imgWidth);
    }
//---------------------ÂÖ²¥ÇøÓò---------------------

    //--------------»î¶¯Õ¹Ê¾ÇøÓò-------------------------

    //
    var acbox = document.getElementsByClassName("acbox")[0];
    //var imgArr = acbox.getElementsByTagName("img");
    var acmaskArr = acbox.getElementsByClassName("acmask");
    var mask = acbox.getElementsByClassName("mask");



    //Êó±ê½øÈëacmask.maskÏÔÊ¾.Àë¿ªÒþ²Ø;
    for(var i=0;i<acmaskArr.length;i++){
        acmaskArr[i].index = i;
        acmaskArr[i].onmouseover = function(){
            var json1 = {"opacity":0.6}
            //alert(1);
            for(var j=0;j<mask.length;j++){
                mask[j].className="mask hide";
            }
            mask[this.index].className ="mask show";
            //alert(1);
            animate1(mask[this.index],json1,30);
        }
        acmaskArr[i].onmouseout = function(){
            var json2 = {"opacity":0}
            //for(var i=0;i<mask.length;i++){
                mask[this.index].className = "mask hide";
            animate1(mask[this.index],json2,30);
            //}
        }
    }


    //$(".acmask").mouseenter(function(){
    //    //alert(1)
    //    $(this).children(".mask").fadeTo(30,0.5);
    //})



//----------------Í¼Æ¬¸ü¶àÐÅÏ¢µã»÷
//    var infoArr = document.getElementsByClassName("info1");
    var aArr = document.getElementsByClassName("vn");

    for(var i=0;i<aArr.length;i++){
        aArr[i].index = i;
        aArr[i].onmouseover = function(){
            //alert(1)
            var json3 = {"width":130}
            animate1(aArr[this.index],json3,40)
        }
        aArr[i].onmouseout = function(){
            //alert(1)
            var json4 = {"width":115}
            animate1(aArr[this.index],json4,40)
        }
    }
//--------------------ÉãÓ°ÇøÓòÕ¹Ê¾
    var tphl = document.getElementsByClassName("tphl");
    var bfc = document.getElementsByClassName("bfc");
    for(var i=0;i<tphl.length;i++){
        tphl[i].index = i;
        tphl[i].onmouseover = function (){
            var json5 = {"opacity":0}
            for(var j=0;j<bfc.length;j++){
                bfc[j].style.opacity="0.8";
            }
            //bfc[this.index].style.opacity="0";
            animate1(bfc[this.index],json5,10)
        }
        tphl[i].onmouseout = function(){
            var json6 = {"opacity":0.8}
            //bfc[this.index].style.opacity="0";
            animate1(bfc[this.index],json6,10)
        }
    }

     //------------------底部返回顶部图标以及小火箭;
    var sctop = document.getElementsByClassName("scrolltop")[0];
    var aArea = sctop.getElementsByTagName("a")[0];
    var timer1 = null;
    var leader = 0;
    var back = document.getElementsByClassName("backtop")[0];
    window.onscroll = function(){
         var top = $(document).scrollTop();
        if($(".head").height()<top) {
            $(".nav").addClass("fixed");
            $(".topBanner").css("margin-top",$(".nav").height());
        }else {
            $(".nav").removeClass("fixed");
            $(".topBanner").css("margin-top",0);
        }
        leader = scroll().top;
        if(scroll().top>1000){
            back.style.display = "block";
        }else{
            back.style.display = "none";
        }
    }

     //次级导航栏  start
    $(".brand").mouseover(function() {
        $(this).find(".drop").stop().slideDown();
    }).mouseout(function() {
        $(this).find(".drop").stop().slideUp();
    })
    //次级导航栏  end

    //鼠标移入图标样式改变;
    aArea.onmouseover = function() {
        //alert(1);
        this.style.backgroundPosition = "-117px -2px"
    }
    aArea.onclick = fn;
    back.onclick = fn;
    function fn(){
        //瞬间闪动到页面最顶端;
        //    window.scrollTo(0,0);
        //模拟缓动动画,页面滑动到最顶端;
        //就是把缓动的逻辑拿过来,把移动盒子变成移动页面;
        clearInterval(timer1);
        timer1 = setInterval(function () {
            //0.leader的获取;  === 页面的纵坐标;
            //页面的纵坐标  === 页面被卷去的头部;
            //1.获取步长;
            var step = (0 - leader)/10;
            //2.二次处理
            step = step > 0?Math.ceil(step):Math.floor(step);
            //3.赋值;
            leader = leader + step;
            window.scrollTo(0,leader);
            //4.清除定时器;
            if(leader === 0){
                clearInterval(timer1);
                //alert("已到顶端了!");
            }
        },30);
    }
    //鼠标移出图标样式变回;
    aArea.onmouseout = function(){
        this.style.backgroundPosition="-7px -2px";
    }






    //var fixedbox = document.getElementsByClassName("fixed")[0];
    //var fixr = fixedbox.getElementsByClassName("fixr")[0];
    //var closefixr = fixr.getElementsByClassName("")

    //ÓÒ·½¹Ì¶¨¶¨Î»
    $(".fix").click(function(){
        $(this).css("zIndex","5").siblings().css("zIndex","1");
    })
    //$(".closefixr").click(function(){
    //
    //})
    $(".thclose").click(function(){
        $(".fix").animate({"right":-197},50,function(){
            //$(".thclose").animate({"right":0},30,function(){
                $(".thclose").css("display","none").siblings(".thopen").css("display","block")
                //$(".thopen").animate({"right":0},500)
            //})
        })
    })
    $(".thopen").click(function(){
        $(".fix").animate({"right":0},50,function(){
            //$(".thopen").animate({"right":197},30,function(){
                $(".thopen").css("display","none").siblings(".thclose").css("display","block")
                $(".thclose").animate({"right":197},500)
            //})
        })
    })



    //×ó·½¹Ì¶¨¶¨Î»
    //Êó±ê½øÈëli±êÇ©.±³¾°Í¼µÄy×ø±ê¸Ä±ä xÖá×ø±ê²»±ä;
    var fixl = document.getElementsByClassName("fixl")[0];
    //var ul = fixl.getElementsByTagName("ul")[0];
    //var liArr = ul.children;
    var aArr1 =document.getElementsByClassName("lfx");
    for(var i=0;i<aArr1.length;i++){
        aArr1[i].index = i
        aArr1[i].onmouseover = function(){
            for(var j=0;j<aArr1.length;j++){
                aArr1[j].style.backgroundPositionY=0;
            }
            var json7 = {"backgroundPositionY":-82}
            animate1(aArr1[this.index],json7,30)
            aArr[this.index].style.backgroundPositionY="-"+json7[0]+"px";
        }
        aArr1[i].onmouseout = function(){
            var json7 = {"backgroundPositionY":0}
            animate1(aArr1[this.index],json7,30)
            aArr1[this.index].style.backgroundPositionY="-"+json7[0]+"px";
        }
    }



    //Â¥²ãÌøÔ¾
    var betofloor = document.getElementsByClassName("betofloor");
    var floor = document.getElementsByClassName("floor");
    var target1 = 0;
    var timer2 = null;
    var leader2=leader;
    var bool = true;
    for(var i=0;i<betofloor.length;i++){
        betofloor[i].index = i;
        betofloor[i].onclick = function(){
            console.log(this.index);
            target1 = floor[this.index].offsetTop;
            console.log(target1);
            //µã»÷Ö®ºó,ÀûÓÃË÷ÒýÖµ,È»ºó»ñÈ¡µ½ulÖÐµÄli¸ÃË÷ÒýÖµÎ»ÖÃµÄli¾àÀë¶¥²¿µÄ¾àÀë;
            //target = 2000;//µã»÷Ö®ºó,ÀûÓÃË÷ÒýÖµ,È»ºó»ñÈ¡µ½ulÖÐµÄli¸ÃË÷ÒýÖµÎ»ÖÃµÄli¾àÀë¶¥²¿µÄ¾àÀë;
            //alert("hello")
            //console.log(target1);
            //console.log(this.index);
            // window.scrollTo(0,1000);
            //3.Ëæ±ã¸øÄ¿±êÎ»ÖÃ¸¶Ò»¸öÖµ,È»ºóÀûÓÃ»º¶¯¶¯»­,ÈÃÒ³Ãæ×ßµ½Ä¿±êÎ»ÖÃ;
            clearInterval(timer2)
            timer2 = setInterval(function(){
                //1.»ñÈ¡²½³¤
                var step = (target1-leader2)/10;
                //2.¶þ´Î´¦Àí²½³¤
                step = step>0?Math.ceil(step):Math.floor(step);
                leader2 = leader2 + step;
                window.scrollTo(0,leader2);

                if(target1 === leader2){
                    clearInterval(timer2);

                }else{
                    bool = false;
                }
            },30)
            // if(bool){
            //     clearInterval(timer2)
            // }
        }
        //console.log(i);
    }
    ////»ñÈ¡Ò³ÃæµÄ×Ý×ø±ê;
    //window.onscroll = function () {
    //    //Ò³Ãæ¶¥²¿±»¾íÈ¥¶àÉÙ,×Ý×ø±ê¾ÍÊÇ¶àÉÙ
    //    leader = scroll().top;
    //}








}

function animate1(ele,json,t,fn){
    //ÒªÓÃ¶¨Ê±Æ÷,ÏÈÇå¶¨Ê±Æ÷;
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){
            //1.²»´øµ¥Î»µÄÊôÐÔ;               z-index;
            //2.Ð¡ÊýÎªÖ÷µÄÊôÐÔ;(¼æÈÝÎÊÌâ)      opacity;
            //Ë¼Â·£ºÆÕÍ¨ÊôÐÔÆÕÍ¨´¦Àí;Èç¹ûÊÇÌØÊâÊôÐÔ,ÌØÊâ´¦Àí;  (ifÅÐ¶Ï;)

            //Èç¹ûÊÇz-index: Ö±½Ó¸³Öµ;ÒòÎª²ã¼¶²»ÐèÒªÑ­Ðò½¥½ø;
            if(k === "z-index"){
                //²»Éæ¼°Çå³ý¶¨Ê±Æ÷;
                ele.style.zIndex = json[k];

                //Èç¹ûÊÇopacity: ½øÐÐÐ¡Êýµ½ÕûÊý×ª»», ¼æÈÝie678;
            }else if(k === "opacity"){
                //1.¼ÆËãµÄÊ±ºò·Å´ó10±¶(100±¶),¸³ÖµµÄÊ±ºòËõÐ¡10(100±¶);
                //Èç¹ûÍ¸Ã÷¶ÈÎª0,ÄÇÃ´ÌØÊâ´¦Àí,²»¶¼ÄÜÓë0²ÅÈ¡Õû;
                if(getStyle(ele,k)*10 === 0){
                    var leader = 0;
                }else{
                    var leader = parseInt(getStyle(ele,k)*10) || 10;//ÒòÎª´øÓÐµ¥Î»,ËùÒÔÈ¥³ýpx;
                }
                var step = (parseInt(json[k]*10)-leader)/10;
                //¶þ´Î´¦Àí;  ´óÓÚ0ÏòÉÏÈ¡Õû,Ð¡ÓÚ0ÏòÏÂÈ¡Õû;//ÈýÔªÔËËãÖ»ÄÜ¼ÆËãÖµ,²»ÄÜ¸³Öµ;
                step = step>0?Math.ceil(step):Math.floor(step);
                //¸³Öµ
                leader = leader + step;
                //¸³ÖµµÄÊ±ºòÒªËõÐ¡10±¶;
                ele.style[k] = leader/10;
                //¸³ÖµµÄÊ±ºòÒª¼æÈÝie678;  filter;
                ele.style.filter = "alpha(opacity="+leader*10+")";

                //ÓÐÒ»¸öÃ»ÓÐµ½´ïÖ¸¶¨Î»ÖÃÒ²²»ÄÜÇå³ý¶¨Ê±Æ÷;
                if(parseInt(json[k]*10) !== leader){
                    bool = false;
                }

                //ÆÕÍ¨ÊôÐÔ;ÆÕÍ¨´¦Àí;
            }else{
                //»ñÈ¡²½³¤;leaderÀí½âÎªµ±Ç°ÖµµÄÒâË¼;
                var leader = parseInt(getStyle(ele,k)) || 0;//ÒòÎª´øÓÐµ¥Î»,ËùÒÔÈ¥³ýpx;
                var step = (json[k]-leader)/10;
                //¶þ´Î´¦Àí;  ´óÓÚ0ÏòÉÏÈ¡Õû,Ð¡ÓÚ0ÏòÏÂÈ¡Õû;//ÈýÔªÔËËãÖ»ÄÜ¼ÆËãÖµ,²»ÄÜ¸³Öµ;
                step = step>0?Math.ceil(step):Math.floor(step);
                //¸³Öµ
                leader = leader + step;
                ele.style[k] = leader + "px";
                //ÓÐÒ»¸öÃ»ÓÐµ½´ïÖ¸¶¨Î»ÖÃÒ²²»ÄÜÇå³ý¶¨Ê±Æ÷;
                if(json[k] !== leader){
                    bool = false;
                }
            }
        }
        console.log(1);
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },t);
}

function getStyle(ele,attr){
    //ÅÐ¶Ï:ä¯ÀÀÆ÷Ö§³ÖÄÄ¸ö·½·¨»òÕßÊôÐÔ;Ö§³ÖÄÄ¸öµ÷ÓÃÄÄ¸ö;
    if(window.getComputedStyle !== undefined){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}


function animate2(ele,target){
    clearInterval(ele.timer);
    ele.timer = setInterval(function (){
        var step = target>ele.offsetLeft?10:-10;
        ele.style.left = ele.offsetLeft + step + "px";
        if(Math.abs(target-ele.offsetLeft)<= Math.abs(step)){
            clearInterval(ele.timer);
            ele.style.left = target + "px";
        }
    },5)
}
function scroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElemen
    }
}