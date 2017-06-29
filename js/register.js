/**
 * Created by Administrator on 2017/4/23.
 */

window.onload = function () {


    
     //次级导航栏  start
    $(".brand").mouseover(function() {
        $(this).find(".drop").stop().slideDown();
    }).mouseout(function() {
        $(this).find(".drop").stop().slideUp();
    })
    //次级导航栏  end
  

    //验证表单
    var dlmk = document.getElementsByClassName("dlmk")[0];
    var inpArr = dlmk.getElementsByTagName("input");
    var password = document.getElementById("password");

    //手机号
    fn(inpArr[4],/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/);

    //邮箱
    fn(inpArr[5],/^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/);

    //账号
    fn(inpArr[0],/^[a-zA-Z0-9_-]{4,20}$/);


    //是否符合密码标准
    inpArr[1].onblur = function () {
        if (this.value.trim() === "") {

            return;
        }

        if (/^[\$a-zA-Z0-9_-]{6,18}$/.test(this.value)) {


            this.nextSibling.className = "right";
            this.nextSibling.innerHTML = "输入正确";

            if (/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/.test(this.value)) {
                password.className = "pwd1 str4";
            } else if (/^([a-z].*[0-9])|([A-Z].*[0-9])|([0-9].*[a-zA-Z])$/.test(this.value)) {
                password.className = "pwd1 str3";
            } else if (/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)) {
                password.className = "pwd1 str2";
            } else {
                password.className = "pwd1 str1";
            }


        } else {
            this.nextSibling.className = "wrong";
            this.nextSibling.innerHTML = "您输入的格式有误!";
        }



    }

    //绑定事件并设置正则表达式
    function fn(ele, reg) {
        ele.onblur = function () {
            if (this.value.trim() === "") {

                this.nextSibling.className = "";
                this.nextSibling.innerHTML = "不能为空";
                return;
            }
            if(reg.test(this.value)){

                this.nextSibling.className = "right";
                this.nextSibling.innerHTML = "输入正确";
            }else {

                this.nextSibling.className = "wrong";
                this.nextSibling.innerHTML = "您输入的格式有误!";
                console.log(this.nextSibling);
            }
        }

    }




    //倒计时跳转












}//window







$(window).ready(function(){

//         //最开始进度条滑动
    $(".span1").animate({"width":250},1000,function(){
        $(".img1").animate({"width":40,"opacity":1});
        $(".cyws").show(1000);
    })
//
////// 点击按钮之后,跳转到注册页面
    $("a").click(function(){
        //进度条部分
        $(".span2").animate({"width":250},1000,function(){
            $(".img2").animate({"width":40,"opacity":1});
        })
        $(".cyws").hide(1000);
        $(".creg").fadeIn(1000);
    })//anniu

    //    点击注册页按钮 跳转到成功页面
      $("#ccbtn").click(function(){
          $(".span3").animate({"width":250},1000,function(){
              $(".img3").animate({"width":40,"opacity":1});
              $(".span4").animate({"width":250,"opacity":1});
          })
          $(".creg").animate({"width":0,"height":0},1000,function(){
              $(".dlmk").css("display","none");
          });
              $(".cyws").css("display","none");
          $(".ccsue").css("display","block").show(1000);


          var a = $(".ccsue").css("display") ;
          if(a == "block"){
              function jump(count) {
                  window.setTimeout(function(){
                      count--;
                      if(count > 0) {
                          $(".fanhui").html("即将在"+count+"秒之后返回首页");
                          jump(count);
                      } else {
                          location.href="index.html";
                      }
                  }, 1000);
              }
              jump(5);
          }







      })//click







})//window

