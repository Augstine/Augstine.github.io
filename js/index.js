window.onload = function () {
     $("img.lazy").lazyload();
    //固定导航栏  start
    window.onscroll = function () {
        var top = $(document).scrollTop();
        if($(".head").height()<top) {
            $(".nav").addClass("fixed");
            $(".topBanner").css("margin-top",$(".nav").height());
        }else {
            $(".nav").removeClass("fixed");
            $(".topBanner").css("margin-top",0);
        }
        if(top>=1000) {
            $(".toTop").slideDown(1000);
        }else{
            $(".toTop").css("display","none");
        }
        if(top>=4518) {
            processerbar(6000);
        }
    }
    $(".toTop").click(function(){
        $("body").animate({scrollTop:0},1000);
    })
    //固定导航栏  end

    //次级导航栏  start
    $(".brand").mouseover(function() {
        $(this).find(".drop").stop().slideDown();
    }).mouseout(function() {
        $(this).find(".drop").stop().slideUp();
    })
    //次级导航栏  end


    //轮播图 start
    var ul = document.getElementById("ul");
    var liArr = ul.children;
    var ol = document.getElementsByTagName("ol")[0];
    var olLiArr = ol.children;

    var firLi = liArr[0].cloneNode(true);
    ul.appendChild(firLi);
    for(var i=0;i<olLiArr.length;i++) {
        olLiArr[i].index = i;
        liArr[i].style.background = "url('images/b"+(i+1)+".jpg') no-repeat 50% 0 ";
        olLiArr[i].onmouseover = function () {
                for(var j = 0;j<olLiArr.length;j++) {
                    olLiArr[j].className = "";
                }
                this.className = "active";
                oldAnimate(ul,-this.index*ul.offsetHeight);
                pic = square = this.index;
            }
    }
    //animate左右改宽高
    function oldAnimate(ele,target) {
        clearInterval(ele.timer);
        ele.timer =setInterval(function () {
            var step = target>ele.offsetTop?10:-10;
            ele.style.top = ele.offsetTop +step +"px";
            if(Math.abs(ele.offsetTop-target)<=Math.abs(step)){
                ele.style.top = target+"px";
                clearInterval(ele.timer);
            }
        },10);
    }

    var pic = 0 ;
    var square = 0;
    var timer = setInterval(autoPlay,3000);

    ol.onmouseenter = function () {
        clearInterval(timer);
    }
    ol.onmouseleave = function () {
        timer = setInterval(autoPlay,3000);
    }

    function blink() {
        for(var i=0;i<olLiArr.length;i++) {
            olLiArr[i].className = "";
        }
        olLiArr[square].className = "active";
        oldAnimate(ul,-pic*ul.offsetHeight);
    }

    function autoPlay() {
        pic++;
        square++;
        if(square==4){
            square=0;
        }
        if(pic==5) {
            ul.style.top=0;
            pic=1;
        }
        blink();
    }
//轮播图 end

// 风格样片切换 start
    var showBanner = document.getElementsByClassName("showBanner")[0];
    var showBannerUl = showBanner.getElementsByTagName("ul")[0];
    var showBannerLiArr = showBannerUl.getElementsByTagName("li");
    var showType = document.getElementsByClassName("showType")[0];
    var showTypeLiArr = showType.getElementsByTagName("li");
    for(var i =0;i<showTypeLiArr.length;i++) {
        showTypeLiArr[i].index = i;
        showTypeLiArr[i].onclick = function () {
            for(var j=0;j<showTypeLiArr.length;j++) {
                showTypeLiArr[j].className = "";
            }
            this.className = "active";
            lowAnimate(showBannerUl,{"left":-this.index*245})
        }
    }

    $(".channelRight").children("div").mouseenter(function(){
        $(this).find(".mask").animate({"opacity":1,"left":0},"slow");
    })
    $(".channelRight").mouseleave(function(){
        $(this).find(".mask").animate({"opacity":0,"left":-289},"slow");
    })


    //倒计时  start
    time();
    setInterval(time,1000);

    function time(){
        var nowtime=new Date();
        var endtime=new Date("2017,7,29,00:00:00");
        var d=parseInt((endtime-nowtime)/(1000*60*60*24));
        var h=parseInt((endtime-nowtime)/(1000*60*60)%24);
        var m=parseInt((endtime-nowtime)/(1000*60)%60);
        var s=parseInt((endtime-nowtime)/1000%60);
        d = checkTime(d);
        m = checkTime(m);
        s = checkTime(s);
        document.getElementsByClassName("resume")[0].innerHTML=" "+d+"天"+h+"小时"+m+"分"+s+"秒";
    }

    function checkTime(i){
        if(i<10){
            i="0"+i;
        }
        return i;
    }
    //guestPhoto 地标
    var current = 20;
    $(".guestPhoto").children("a").mouseenter(function(){
        $(".guestPhoto span").stop(true).animate({"left":parseInt($(this).offset().left)-87}, "normal");
    }).mouseout(function(){
        $(".guestPhoto span").stop(true).animate({"left":current}, "normal");
    }).click(function (){
        current = parseInt($(this).offset().left)-87;
        $(".guestPhoto span").stop(true).animate({"left":current}, "normal");
    })


//categories
    $(".categoriesBox").children("div").mouseenter(function(){
        $(this).stop(true).animate({"opacity":0.8}, "slow").siblings('div').animate({"opacity":1}, "fast");
        $(this).find(".mengban").stop(true).show(1000);
        $(this).find(".mengbanR").stop(true).show(1000);
    }).mouseleave(function(){
        $(this).stop(true).animate({"opacity":1}, "slow");
        $(this).find(".mengban").hide(1000);
        $(this).find(".mengbanR").hide(1000);
    })

    //每周客照
    $(".tabChange ul li").click(function(){
        $(this).addClass("fontActive").siblings("li").removeClass("fontActive");
        $(".aprilBox").siblings(".aprilBox").stop(false,true).fadeOut(1000).end().eq($(this).index()).stop(true).fadeIn(1000);
    })

//旋转木马
    var arrOfJson = [
        {   //  1
            "width":400,
            "top":70,
            "left":0,
            "opacity":0.2,
            "z-index":2
        },
        {  // 2
            width:600,
            top:120,
            left:50,
            opacity:0.8,
            "z-index":3
        },
        {   // 3
            width:800,
            top:150,
            left:100,
            opacity:1,
            "z-index":4
        },
        {  // 4
            width:600,
            top:120,
            left:400,
            opacity:0.8,
            "z-index":3
        },
        {   //5
            width:400,
            top:70,
            left:600,
            opacity:0.2,
            "z-index":2
        }
    ];
    var dailyBox = document.getElementsByClassName("dailyBox")[0];
    var dailyLiArr = dailyBox.getElementsByTagName("li");
    //var ul = dailyBox.getElementsByTagName("ul")[0];
    var arrow = document.getElementById("arrow");
    var prev = arrow.children[0];
    var next = arrow.children[1];
    var flag = true;

    change();
    next.onclick = function () {
        if(flag){
            flag = false;
            change(true);
        }
    }
    prev.onclick = function () {
        if(flag){
            flag = false;
            change(false);
        }
    }

    function change(bool) {
        if(bool!=undefined) {
            if(bool) {
                arrOfJson.push(arrOfJson.shift());
            }else {
                arrOfJson.unshift(arrOfJson.pop());
            }
        }

        for(var j=0;j<dailyLiArr.length;j++) {
            lowAnimate(dailyLiArr[j],arrOfJson[j],function () {
                flag = true;
            });
        }
    }

    //楼层跳跃   start

    $(".toFloor>ul").children("li").mouseenter(function(){
        $(this).stop().animate({"opacity":0.5},"slow");
    }).mouseleave(function(){
        $(".toFloor>ul").children("li").stop().animate({"opacity":1},"slow");
    }).eq(0).click(function (){
        $("body").animate({scrollTop:680},1000)
    }).next("li").click(function (){
        $("body").animate({scrollTop:1624},1000)
    }).next("li").click(function (){
        $("body").animate({scrollTop:4450},1000)
    })


    //手机模拟滚动条
    var box = document.getElementById("box");
    var con = box.children[0];
    var conImg = con.children[1];
    var scrollBox = box.children[1];
    var bar = scrollBox.children[0];
        //比例求bar的高
    var bili1 = 528/conImg.offsetHeight;
    var barHeight = bili1*(scrollBox.offsetHeight-36);
    bar.style.height = barHeight + "px";

    bar.onmousedown = function (event) {
        event = event || window.event;
        var pagey = event.pageY || event.clientY + scroll().top;
        var bary = bar.offsetTop;
        var y = pagey - bary;
        document.onmousemove = function (event) {
            event = event || window.event;
            var pagey = event.pageY || event.clientY + scroll().top;
            var yy = pagey - y;
            if(yy<0){
                yy = 0;
            }
            if(yy>(scrollBox.offsetHeight-36) - barHeight){
                yy = (scrollBox.offsetHeight-36) - barHeight;
            }
            bar.style.top = yy+"px";
            var bili2 = (conImg.offsetHeight-528)/(scrollBox.offsetHeight-36-barHeight);

            var yyy = bili2*yy;
            conImg.style.top = -yyy + "px";

            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();


        }
    }


    $(".home").click(function () {
            $(".con>img:eq(1)").stop(true).fadeToggle("slow");
    })


    document.onmouseup = function () {
        document.onmousemove = null;
    }


    //登录模态框
    var userName=document.getElementById("userName");
    var psd=document.getElementById("psd");
    var psd1=document.getElementById("psd1");
    var unmInfo=document.getElementsByClassName('unmInfo')[0];
    var count=document.getElementsByClassName('count')[0];
    var psdInfo=document.getElementsByClassName('psdInfo')[0];
    var strong = document.getElementsByClassName("strong")[0];
    var fl=document.getElementsByTagName("P")[0];
    var name_length=0;
    var reg=/[^\w\u4e00-\u9fa5]/g;
    var re_n=/[^\d]/g;
    var re_t=/[^a-zA-Z]/g;
    userName.onfocus=function(){
        unmInfo.style.display="inline-block";
        unmInfo.style.marginLeft = "164px";
        unmInfo.innerHTML='<i class="warn"></i> 6-25个字符，推荐使用中文会员名。'
    }
    userName.onkeyup=function(){
        count.style.visibility="visible";
        name_length=getLength(this.value);
        count.innerHTML=name_length+"个字符";
        if(name_length==0){
            count.style.visibility="hidden";
        }
    }
    userName.onblur=function(){
        if(reg.test(this.value)){
            unmInfo.innerHTML='<i class="cuo"></i>含有非法字符';
        }else if(this.value==""){
            unmInfo.innerHTML='<i class="cuo"></i>不能为空';
        }else if(name_length>25){
            unmInfo.innerHTML='<i class="cuo"></i>长度超过25个字符';
        }else if(name_length<6){
            unmInfo.innerHTML='<i class="cuo"></i>长度少于6个字符';
        }else{
            unmInfo.innerHTML='<i class="right"></i>OK!';
        }
    }

    psd.onfocus=function(){
        psdInfo.style.display="inline-block";
        psdInfo.style.marginLeft = "164px";
        psdInfo.innerHTML='<i class="warn"></i> 6-16个字符，请使用字母加数字或者符号';
    }
    psd.onkeyup=function(){
        if(this.value.length>12) {
            fl.className="active1";
        }else if (this.value.length>8) {
            fl.className="active2";
        }
        else {
            fl.className="";
        }

    }
    psd.onblur=function(){
        var m=findStr(this.value,this.value[0]);
        if(this.value==""){
            psdInfo.innerHTML='<i class="cuo"></i> 不能为空';
        }else if(m==this.value.length){
            console.log(1);
            psdInfo.innerHTML='<i class="cuo"></i> 不能有相同字符';
        }else if(this.value.length<6||this.value.length>16){
            psdInfo.innerHTML='<i class="cuo"></i> 长度应为6-16个字符';
        }else if(!re_n.test(this.value)){
            psdInfo.innerHTML='<i class="cuo"></i> 不能全为数字';
        }else if(!re_t.test(this.value)){
            psdInfo.innerHTML='<i class="cuo"></i> 不能全为字母';
        }else{
            psdInfo.innerHTML='<i class="right"></i> OK';
        }
    }

    function getLength(str){
        return str.replace(/[^\x00-xff]/g,"xx").length;
    }
    function findStr(str,n){
        var temp=0;
        for(var i=0;i<str.length;i++){
            if(str.charAt(i)==n){
                temp++;
            };
        };
        return temp;
    };

    $(".logIn").click(function() {
        $(".maskLog").slideDown("slow");
        $(".container").slideDown("slow");
    })
    $(".closeLogin").click(function() {
        $(".maskLog").slideUp("slow");
        $(".container").slideUp("slow");
    })

    $(".btn2").click(function(){
        location.href = "register.html";
    })

//进度条

    function processerbar(time){
        $("#line").each(function(i,item){
            var a=parseInt($(item).attr("w"));
            $(item).animate({
                width: (a-1)+"%"
            },time);
        });
        var si = window.setInterval(
            function(){
                a=$("#line").width();
                b=(a/200*100).toFixed(0);
                document.getElementById('percent').innerHTML=b+"%";
                document.getElementById('percent').style.left=a-13+"px";
                document.getElementById('msg').innerHTML="上传中";
                if(document.getElementById('percent').innerHTML=="99%") {
                    clearInterval(si);
                    document.getElementById('msg').innerHTML="&nbsp;&nbsp;加载失败";

                    $(".fail").fadeIn(1000);
                }
            },70);
    };

    //评论发布
    var ipt = document.getElementById("ipt");
    var txt = document.getElementById('txt');
    var textarea = document.getElementById("text");
    ipt.onclick = function(){
        var txt2 = textarea.value;
        var textValue = textarea.value.LTrim();
        textarea.value="";
        if(textValue.length>0 ){
            var divs = document.createElement("div");
            var imgs = document.createElement("img");
            var ps = document.createElement("div");
            var inputs = document.createElement("input");
            divs.setAttribute("class","creatediv");
            imgs.setAttribute('class',"createimg");
            ps.setAttribute("class","createdivs");
            inputs.setAttribute("class","createinput");
            imgs.src="images/1.jpg";
            inputs.type="button";
            inputs.value="删除";
            //ps.innerHTML=textValue;
           typeText(txt2);
            divs.appendChild(imgs);
            divs.appendChild(ps);
            divs.appendChild(inputs);
            if(txt.children.length==0){
                txt.appendChild(divs);
            }else{
                txt.insertBefore(divs,get_firstChild(txt))
            }
            inputs.onclick = function(){
                    this.parentNode.parentNode.removeChild(this.parentNode);
            }
            $(".creatediv").animate({"width":207,"height":55,"top":$(".creatediv").height(),"border-radius":0},2000,function(){
                $(".creatediv .createinput").animate({"width":40,"height":20},"slow");
            })
        }

    }

    function get_previousSibling(n) {
        y=n.previousSibling;
        while (y.nodeType!=1) {
            y=y.previousSibling;
        }
        return y;
    }
    function get_nextSibling(n) {
        y=n.nextSibling;
        while (y.nodeType!=1) {
            y=y.nextSibling;
        }
        return y;
    }
    function get_lastChild(n) {
        y=n.lastChild;
        while (y.nodeType!=1) {
            y=y.previousSibling;
        }
        return y;
    }
    function get_firstChild(n) {
        y=n.firstChild;
        while (y.nodeType!=1) {
            y=y.nextSibling;
        }
        return y;
    }

// Trim() , Ltrim() , RTrim()
    String.prototype.Trim = function(){
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    String.prototype.LTrim = function(){
        return this.replace(/(^\s*)/g, "");
    }
    String.prototype.RTrim = function() {
        return this.replace(/(\s*$)/g, "");
    }


    function typeText(str){
        //$(".createdivs:eq(0)").text("");
        var newStr = "";
        var newArr = str.split("");
        var num = 0;
        clearInterval(timer);
        timer = setInterval(function () {
            if(num < newArr.length){
                newStr += newArr[num];
                $(".createdivs:eq(0)").text(newStr);
                num++;
            }else{
                clearInterval(timer);
            }
        },500);
    }



}