window.onload = function(){

    //次级导航栏  start
    $(".brand").mouseover(function() {
        $(this).find(".drop").stop().slideDown();
    }).mouseout(function() {
        $(this).find(".drop").stop().slideUp();
    })
    //次级导航栏  end
    //
    //
    //鼠标悬浮向上飘起
        $(".tlhz span").mouseenter(function () {

            //$(this).stop(true,false).animate({"top": -50}, 600);
            lowTwoAnimate(this,{"top":-50});

        });
    $(".tlhz span").mouseleave(function () {
            //$(this).stop(true,false).animate({"top": -50}, 600);
            lowTwoAnimate(this,{"top":0});
        });



    // 大框框动画效果
          var what = document.getElementsByClassName("what")[0];
        var aTags = what.getElementsByTagName('ul');
        for(var i=0;i<aTags.length;i++){
            aTags[i].onmouseenter=function(){
                var _this = this.getElementsByTagName('li')[0];
                startMove(_this,{top:-20,opacity:0},function(){
                    _this.style.top="40px";
                    startMove(_this,{top:0,opacity:100});
                });
            };
        }
   function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
var timer=null;
function startMove(obj,json,fn){
    var flag=true;
    window.clearInterval(obj.timer);
    var aLi=document.getElementsByTagName("li");
    obj.timer=setInterval(function(){

        for(var attr in json){
            var icur=0;
            if(attr=="opacity"){
                icur=parseFloat(getStyle(obj,attr))*100;
            }else {
                icur = parseInt(getStyle(obj, attr));
            }

            var speed=(json[attr]-icur)/20;
            var speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(json[attr]!=icur){
                flag=false;
            }else{flag=true}    //flag=true 定义在定时器外，循环执行一次后，flag=false ，无法再变为true，加else
            if(attr=="opacity"){
                obj.style.filer="alpha(opacity:"+(icur+speed)+")";
                obj.style.opacity=(icur+speed)/100;
            }
            obj.style[attr]=icur+speed+"px"
        }
        if(flag){clearInterval(obj.timer);
            if(fn){fn()}}
    },30)

}



// 圆圈滑动进入

    window.onscroll = function () {
        // 固定导航栏
          var top = $(document).scrollTop();
        if($(".head").height()<top) {
            $(".nav").addClass("fixed");
            $(".tlhz").css("margin-top",$(".nav").height()+126);
        }else {
            $(".nav").removeClass("fixed");
            $(".tlhz").css("margin-top",126);
        }
        // 固定导航栏
        if( $(document).scrollTop() >= 600 ){
            $(".tlt1").animate({"left":60,"opacity":0.7},1000,function(){
                $(".tlt2").animate({"left":330,"opacity":0.7},1000,function(){
                    $(".tlt3").animate({"left":600,"opacity":0.7},1000,function(){
                        $(".tlt4").animate({"left":870,"opacity":0.7},1000,function(){

                            // �������,Բ�Ǳ����
                            $(".whtl .ys").mouseenter(function(){
                                $(this).stop(true).animate({"border-radius":21,"width":266,"height":289,"margin-top":13,"margin-left":-30,"opacity":"1"}).find("p").stop(true).animate({"opacity":1});
                            })//span


                            $(".whtl .ys").mouseleave(function(){
                                $(this).stop(true).animate({"border-radius":90,"width":180,"height":180,"margin-top":70,"opacity":"1"}).find("p").stop(true).animate({"opacity":0});
                            })//span
                         });//zuihou
                    })
                });

            });
        }
        if( $(document).scrollTop() >= 870 ){
            $(".sel").show(3500);
        }

    }



// 底部预约拍照
    $(".the-submit li").mouseenter(function(){
        $(this).find("p").stop().animate({"font-size":32,"opacity":"0.5"},1000);
    })//submit
    $(".the-submit li").mouseleave(function(){
        $(this).find("p").stop().animate({"font-size":23,"opacity":"1"},1000);
    })//submit



//    验证手机号

     var inp2 = document.getElementById("inp2");
    var span1 = document.getElementById("span1");
    var anniu = document.getElementById("anniu");
    function change(id,fn) {
        id.onblur = fn;
    }


    change(inp2,function() {
        if(/^((13[0-9])|(17[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/
                .test(this.value)) {
             //alert(11);
            span1.innerHTML="手机号码正确";
            span1.className="red";
            anniu.className="anniu";

        }
        else {
              //alert(22);
            span1.innerHTML="手机号码输入不正确";
            span1.className="cuowu";

        }
    })

    var anniu = document.getElementById("anniu");
    anniu.onclick = function () {

        location.href="register.html";
    }
   




}//window