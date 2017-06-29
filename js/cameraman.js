window.onload = function(){

    window.onscroll = function () {
        var top = $(document).scrollTop();
        if($(".head").height()<top) {
            $(".nav").addClass("fixed");
            $(".topbanner").css("margin-top",$(".nav").height());
        }else {
            $(".nav").removeClass("fixed");
            $(".topbanner").css("margin-top",0);
        }
    }
        //次级导航栏  start
        $(".brand").mouseover(function() {
            $(this).find(".drop").stop().slideDown();
        }).mouseout(function() {
            $(this).find(".drop").stop().slideUp();
        })
        //次级导航栏  end



    var del = document.getElementsByClassName("del")[0];
    var topbanner = document.getElementsByClassName("topbanner")[0];

    var pic1 =document.getElementsByClassName("pic1")[0];
    var pic2 =document.getElementsByClassName("pic2")[0];
    var pic3 =document.getElementsByClassName("pic3")[0];
    var pic4 =document.getElementsByClassName("pic4")[0];
    var pic5 =document.getElementsByClassName("pic5")[0];

    var ul1 = pic1.getElementsByTagName("ul")[0];

    var ul2 = pic2.getElementsByTagName("ul")[0];
    var ul3 = pic3.getElementsByTagName("ul")[0];
    var ul4 = pic4.getElementsByTagName("ul")[0];
    var ul5 = pic5.getElementsByTagName("ul")[0];

    //点击圆圈背景关闭
    del.onclick = function(){
        lowAnimate(topbanner,{"height": 0});
        lowAnimate(document.body,{"background-position-y":173});
    }//del.onclick



    pic(ul1,0,36);
    pic(ul2,37,73);
    pic(ul3,74,110);   //5
    pic(ul4,114,150);  //2
    pic(ul5,151,187);   //-2
    var pic = document.getElementsByClassName("pic")[0];
    var pdivArr = pic.getElementsByTagName("div");

    for(var i=1;i<pdivArr.length;i++){
       pdivArr[i].style.opacity = 0;
        pdivArr[i].style.display="none";
    }
    // 循环添加图片  位置,起始图片,结束图片
    function pic (location,s,e){
        for(var i=s; i<e; i++){
            var newli = document.createElement("li");
            newli.innerHTML = '<img src="images/c'+i+'.jpg" alt=""/><p>The '+(i+1)+' th</p>';
            location.appendChild(newli);
        }

    }//pic


// 切换图片


    var majordomo = document.getElementsByClassName("majordomo")[0];
    var liArr = majordomo.getElementsByTagName("li");
    var count=0;
    for(var i=0 ;i<liArr.length;i++){
        liArr[i].onmouseover = function(){

           for(var j=0; j<liArr.length;j++){
               liArr[j].className="yanse";
           }
            this.className = "lihover";

        }//onmouseover

        liArr[i].index = i;
        liArr[i].onclick = function() {

            for (var j = 0; j < liArr.length; j++) {
                liArr[j].className = "yanse";
                lowAnimate( pdivArr[j],{"opacity":0});
                pdivArr[j].style.display="none";

            }
            this.className = "lionclick";
            lowAnimate(pdivArr[this.index],{"opacity":1});
            pdivArr[this.index].style.display="block";

        }
    }//for

    var dliArr = pic.getElementsByTagName("li");
    console.log(dliArr);
    for(var i=0; i<dliArr.length;i++){
        dliArr[i].onmouseenter = function(){
            for(var j=0;j<dliArr.length;j++){
                dliArr[j].className="";
            }
            this.className="ph";
        }//dliArr

    }





// 点击人物头像就放大
    $(function () {
        var x = 10;
        var y = 20;
        console.log($(".pic li img").attr("src"));
        $(".pic li").mouseover(function (e) {
            // this.myTitle = this.title;
            // this.title = "";
            // var imgTitle = this.myTitle? "<br/>"+this.myTitle : "";
            var tooltip = "<div id ='tooltip'><img src='"+$(this).children("img").attr("src")+"' alt='' /></div>";
            $("body").append(tooltip);
            $("#tooltip").css({
                "left": e.pageX + x + "px",
                "top": e.pageY + y + "px"
            }).show("slow");
        }).mouseout(function(e) {
            // this.title = this.myTitle;
            $("#tooltip").hide("slow").remove();
        })
        $("li").mousemove(function (e) {
            $("#tooltip").css({
                "left": e.pageX + x + "px",
                "top": e.pageY + y + "px"
            });
        })
    })







}//window