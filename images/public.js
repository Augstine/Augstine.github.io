!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.cookie=e()}}(function(){function e(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)}function t(e){return e instanceof Array}function n(e){return Array.prototype.slice.call(e)}function r(){if(!(this instanceof r))return new r}var o=Object.names||function(e){var t=[],n="";for(n in e)e.hasOwnProperty(n)&&t.push(n);return t};r.prototype={get:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return unescape(o.substring(t.length,o.length))}return!1},set:function(t,n,r){if(e(t))for(var o in t)t.hasOwnProperty(o)&&this.set(o,t[o],n);else{var i=e(r)?r:{expires:r},u=void 0!==i.expires?i.expires:"",a=typeof u,f=void 0!==i.path?";path="+i.path:";path=/",l=i.domain?";domain="+i.domain:"",s=i.secure?";secure":"";"string"===a&&""!==u?u=new Date(u):"number"===a&&(u=new Date(+new Date+864e5*u)),""!==u&&"toGMTString"in u&&(u=";expires="+u.toGMTString()),document.cookie=t+"="+escape(n)+u+f+l+s}},remove:function(e){e=t(e)?e:n(arguments);for(var r=0,o=e.length;r<o;r++)this.set(e[r],"",-1);return e},clear:function(e){return e?this.remove(e):this.remove(o(this.all()))},all:function(){if(""===document.cookie)return{};for(var e=document.cookie.split("; "),t={},n=0,r=e.length;n<r;n++){var o=e[n].split("=");t[unescape(o[0])]=unescape(o[1])}return t}};var i=function(t,n,o){var i=arguments;return 0===i.length?r().all():1===i.length&&null===t?r().clear():2!==i.length||n?"string"!=typeof t||n?e(t)||i.length>1&&t&&n?r().set(t,n,o):null===n?r().remove(t):r().all():r().get(t):r().clear(t)};for(var u in r.prototype)i[u]=r.prototype[u];return i});

if($('.fengge_wap').length > 0) { $('.nav-block .fengge_wap:eq(1) span a').css({'width':'auto','margin-right':'38px'}); }

if($('.close-reg').length > 0 || $('.close-reg0').length > 0){  $('.close-reg,.close-reg0').click(function(){$('.reg').animate({height:'0px', width:'0px',left:'50%',top:'100%',marginLeft:'0px', marginTop:'0px'});})  }
if(cookie.get('firstpop') && $('.reg').length > 0) { $('.reg').hide(); }

var thisurl = window.location.href;
var secdom = thisurl.split('/')[2].split('.')[0];
if($('.nav').length > 0){ $('.nav ul li:last').children('a').attr({'href':'https://jinshuju.net/f/G4R0PB', 'target':'_blank'}).html('投诉建议<span>COMPLAINT</span>'); }

if(document.getElementById('reg')) {
  var domain = (window.location.href.split('/'))[2].split('.');domain = domain[domain.length-2]+'.'+domain[domain.length-1];document.domain = domain;document.getElementById('reg').src = 'http://yiny.' + domain + '/form/list?s=5';
}

if($('.ps').length > 0) { $('.ps').click(function(){ window.location.href="http://weix.tphoto.cn/award/zgo?s=" + thisurl; }); }

if($('.which-sto').length > 0) {
$('.which-sto').html('<a href="http://sz.tphoto.cn"></a><a href="http://wx.tphoto.cn"></a><a href="http://sanya.tphoto.cn"></a><a href="http://ks.tphoto.cn"></a><a href="http://cs.tphoto.cn"></a>');
}

(function(){
try {
if($('.showtype').length > 0) {
var newshownum=0;
    var newshowtimer = setInterval(function(){
          newshownum++;
          $(".showtype li").eq(newshownum%3).mouseover();
        },3000);
    $(".showtype li").mouseover(function(){

      clearInterval(newshowtimer);
      $(".showbanar").find("ul").css("left",-$(this).index()*245);
      $(this).addClass("active").siblings("li").removeClass("active");
      newshownum = $(this).index();
    })
    $(".showtype li").mouseout(function(){
      newshowtimer = setInterval(function(){
          newshownum++;
          if(newshownum == 3){
           newshownum=0;
          }
          $(".showbanar").find("ul").css("left",-newshownum*245);
           $(".showtype li").eq(newshownum).addClass("active").siblings("li").removeClass("active");
        },3000);
    })
}
}catch(e) {
}
})();

/*function getSiteInfo(){var e=document.createElement('script');var turl=window.location.href;var secdom=turl.split('/')[2].split('.')[0];var isx=(turl.split('.'))[0].toString().indexOf('x')<0?false:true;e.id='gk';e.src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js";document.getElementsByTagName('head')[0].appendChild(e);if(document.getElementById('gk')){var you=false;var tan=function(){var link='http://tb.53kf.com/code/client/10135307/2';var _53code=document.createElement("script");if(isx){_53code.src="//tb.53kf.com/code/code/10135307/3";link='http://tb.53kf.com/code/client/10135307/3'}else{_53code.src="//tb.53kf.com/code/code/10135307/2";link='http://tb.53kf.com/code/client/10135307/2'}if(typeof remote_ip_info!='undefined'){if(remote_ip_info['city']=="\u65e0\u9521"){_53code.src="//tb.53kf.com/code/code/10135307/3";link='http://tb.53kf.com/code/client/10135307/3'}else if(remote_ip_info['city']=='\u82cf\u5dde'){_53code.src="//tb.53kf.com/code/code/10135307/2";link='http://tb.53kf.com/code/client/10135307/2'}}if(secdom=='sanya'||secdom=='txlhlz'||secdom=='tlxhzg'||secdom=='tgldhtzd'){_53code.src="//tb.53kf.com/code/code/10135307/7";link='http://tb.53kf.com/code/client/10135307/7'}var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(_53code,s);if(!document.getElementsByClassName){document.getElementsByClassName=function(className){return this.querySelectorAll("."+className)};Element.prototype.getElementsByClassName=document.getElementsByClassName}var zixuns=document.getElementsByClassName('zixuns');if(zixuns.length>0){var l=zixuns.length;for(var i=0;i<l;i++){if(typeof remote_ip_info!='undefined'&&remote_ip_info['city']=="\u65e0\u9521"){zixuns[i].onclick=function(){window.open(link,'window',"height=500,width=750,modal=yes,alwaysRaised=yes")}}else{zixuns[i].onclick=function(){window.open(link,'window',"height=500,width=750,modal=yes,alwaysRaised=yes")}}}}you=true};e.onload=new function(){tan()};window.setTimeout(function(){if(!you){tan()}},2000)}}getSiteInfo();*/

(function(){var isie=navigator.userAgent.indexOf("MSIE")>-1?true:false;function CusWindow(){this.f=document.createElement("iframe");if(isie){this.f=document.createElement("form");this.f.method="post";this.f.target="_blank"}this.f.style.display="none";document.body.appendChild(this.f)}online=[];var zixunqq=[];zixunqq[0]=2850700525;var qqonlineapi="http://webpresence.qq.com/getonline?Type=1&";for(var i=0;i<zixunqq.length;i++){qqonlineapi+=zixunqq[i]+":"}var $qqonlineapi=document.createElement("script");$qqonlineapi.setAttribute("id","qqonline");$qqonlineapi.setAttribute("src",qqonlineapi);var $zixunqq=document.getElementById("zixunqq");var $qqs=document.getElementsByTagName("a");document.getElementsByTagName("head")[0].insertBefore($qqonlineapi,document.getElementsByTagName("head")[0].childNodes[0]);CusWindow.prototype.open=function(url){if(isie){this.f.action=url;this.f.submit()}else{this.f.src=url}};var cuswindow=new CusWindow();var openfun=function(){var list_qq=new Array();for(var i=0;i<zixunqq.length;i++){if(online[i]==1){list_qq.push(zixunqq[i])}}if(list_qq.length<1){list_qq=zixunqq}if(window.location.href.toString().search('join.html')>-1){var list_qq=[];list_qq[0]=3135366001}window.open('http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODA0ODM0Nl80Mzg4MzlfNDAwMDAyNTEyN18yXw');/*cuswindow.open("http://wpa.qq.com/msgrd?v=3&uin="+list_qq[Math.floor(Math.random()*(list_qq.length))]+"&site=www.tphoto.cn&menu=yes")*/ };if($zixunqq){$zixunqq.onclick=function(){openfun()}}for(var i=0;i<$qqs.length;i++){if($qqs[i].className.toString().search('zixunqq')>-1){$qqs[i].onclick=function(){openfun()}}}})();
function showMap(ob,x,y,title,msg,place){var point=new BMap.Point(x,y);var marker=new BMap.Marker(point);var map=new BMap.Map(ob);map.addOverlay(marker);map.centerAndZoom(point,18);var opts={width:200,height:100,title:title,enableMessage:true,message:msg};map.addControl(new BMap.MapTypeControl());map.setCurrentCity("苏州");map.enableScrollWheelZoom(true);var infoWindow=new BMap.InfoWindow(place,opts);marker.addEventListener("onmouseover",function(){map.openInfoWindow(infoWindow,point)})}
if(document.getElementById("map0")){showMap("map0",120.621698,31.31631,"太郎花子苏州运营总部","太郎花子苏州运营总部<br>电话：400-002-5127<br/>","地址：苏州市姑苏区养育巷415号<br/>电话：400-002-5127");}
if(document.getElementById("map1")){showMap("map1",120.622413,31.316564,"太郎花子苏州景德路店","太郎花子景德路店<br>电话：400-002-5127<br/>","地址：苏州市平江区景德路193-195号<br/>电话：400-002-5127");}
if(document.getElementById("map2")){showMap("map2",120.625436,31.312387,"太郎花子苏州干将路店","太郎花子干将路店<br>电话：400-002-5127<br/>","地址：苏州市平江区干将西路120号<br/>电话：400-002-5127");}
if(document.getElementById("map3")){showMap("map3",120.636338,31.242861,"太郎花子吴中摄影基地 ","太郎花子新概念婚纱摄影基地 <br>电话：0512-67071290<br/>","地址： 江苏省苏州市吴中区吴中大道27号(近加油站) <br/>电话：0512-67071290");}
if(document.getElementById("map4")){showMap("map4",120.603731,31.260666,"太郎花子威斯汀摄影基地","太郎花子威斯汀摄影基地<br>电话：4000025127<br/>","地址：石湖西路与友新路交叉口石湖景区右转北商业街B栋<br/>电话：4000025127");}
if(document.getElementById("map5")){showMap("map5",120.311502,31.577753,"太郎花子无锡新生路店","太郎花子无锡新生路店<br>电话：4000025127<br/>","地址：江苏省无锡市新生路104号<br/>电话：4000025127");}
if(document.getElementById("map6")){showMap("map6",120.563693,31.207571,"干将路店凤凰城拍摄基地","干将路店凤凰城拍摄基地<br>电话：4000025127<br/>","地址：苏州市吴中区吴中大道2588号第一公园B5幢<br/>电话：4000025127");}
if(document.getElementById("map7")){showMap("map7",120.248612,31.558418,"新生路店拍摄基地","新生路店拍摄基地<br>电话：4000025127<br/>","地址：无锡市滨湖区梁清路815号<br/>电话：4000025127")}
if(document.getElementById("map8")){showMap("map8",109.519628,18.226971,"太郎花子三亚店","太郎花子三亚店<br>电话：4000025127<br/>","地址：三亚市小东海半山半岛二期103<br/>电话：4000025127")}
if(document.getElementById("map9")){showMap("map9",120.962127,31.410756,"太郎花子昆山店","太郎花子昆山店<br>电话：4000025127<br/>","地址：昆山市紫竹路699号皇冠假日酒店<br/>电话：4000025127")}
if(document.getElementById("map10")){showMap("map10",120.78457,31.662718,"太郎花子常熟店","太郎花子常熟店<br>电话：4000025127<br/>","地址：常熟市开元大道6号皇冠假日酒店<br/>电话：4000025127")}

if($('.left-fixed').length > 0) {   $('.left-fixed a:eq(3)').attr('href', 'https://jinshuju.net/f/G4R0PB');  }

if(secdom.indexOf('x') > -1 && $('.bottom-fixed').length > 0) {
  $('.bottom-fixed a.bottom-avtivity').css('background-image', 'url(http://new.tphoto.cn/skins/2016/img/fixed_activity2.png)');
}
var list_secdom = ['www', 'sz', 'wx', 'sanya', 'product', 'ks', 'cs'];
if(jQuery.inArray(secdom, list_secdom) < 0) {
  if($('.mx_site_box').length > 0) {
    $('.mx_site_box').hide();
  }
  if($('.which-sto').length > 0) {
    $('.which-sto').hide();
  }
}

var issy = false;

switch(secdom){
  case'sanya':
  case'txlhlz':
  case'tlxhzg':
  case'tgldhtzd':
  case'tslsyhmz':
  case'tslwyheiz':
  case'tslwyhbz':
  $('.nav li:eq(3) a').attr('href', '/products/clip-place-84.html');
  issy = true;
  break;
}

if(issy) {
function getSiteInfo(){var e=document.createElement('script');var turl=window.location.href;var secdom=turl.split('/')[2].split('.')[0];var isx=(turl.split('.'))[0].toString().indexOf('x')<0?false:true;e.id='gk';e.src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js";document.getElementsByTagName('head')[0].appendChild(e);if(document.getElementById('gk')){var you=false;var tan=function(){var link='http://tb.53kf.com/code/client/10135307/2';var _53code=document.createElement("script");if(isx){_53code.src="//tb.53kf.com/code/code/10135307/3";link='http://tb.53kf.com/code/client/10135307/3'}else{_53code.src="//tb.53kf.com/code/code/10135307/2";link='http://tb.53kf.com/code/client/10135307/2'}if(typeof remote_ip_info!='undefined'){if(remote_ip_info['city']=="\u65e0\u9521"){_53code.src="//tb.53kf.com/code/code/10135307/3";link='http://tb.53kf.com/code/client/10135307/3'}else if(remote_ip_info['city']=='\u82cf\u5dde'){_53code.src="//tb.53kf.com/code/code/10135307/2";link='http://tb.53kf.com/code/client/10135307/2'}}switch(secdom){case'sanya':case'txlhlz':case'tlxhzg':case'tgldhtzd':case'tslsyhmz':case'tslyhllz':case'tslyhllz':case'tslwyheiz':case'tslwyhbz':case'tslsyhgz':_53code.src="//tb.53kf.com/code/code/10135307/7";link='http://tb.53kf.com/code/client/10135307/7';break}var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(_53code,s);if(!document.getElementsByClassName){document.getElementsByClassName=function(className){return this.querySelectorAll("."+className)};Element.prototype.getElementsByClassName=document.getElementsByClassName}var zixuns=document.getElementsByClassName('zixuns');if(zixuns.length>0){var l=zixuns.length;for(var i=0;i<l;i++){if(typeof remote_ip_info!='undefined'&&remote_ip_info['city']=="\u65e0\u9521"){zixuns[i].onclick=function(){window.open(link,'window',"height=500,width=750,modal=yes,alwaysRaised=yes")}}else{zixuns[i].onclick=function(){window.open(link,'window',"height=500,width=750,modal=yes,alwaysRaised=yes")}}}}you=true};e.onload=new function(){tan()};window.setTimeout(function(){if(!you){tan()}},2000)}}getSiteInfo();
} else {
  try {
$(document).delegate('.zixuns', 'click', function(){
window.open('http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT70409253&lng=cn','window',"height=500,width=750,modal=yes,alwaysRaised=yes");
  });
  }catch(e){
$('.zixuns').click(function(){ window.open('http://put.zoosnet.net/LR/Chatpre.aspx?id=PUT70409253&lng=cn','window',"height=500,width=750,modal=yes,alwaysRaised=yes"); });
  }
}

if($('.right_fixed').length > 0) {
var stsite = '/products';
var hdurl = '';
if(secdom == 'sanya') {
hdurl = '/recent/201702/116806.html';
} else if(secdom.indexOf('product') > -1 || secdom.indexOf('www') > -1) {
stsite = 'http://product.tphoto.cn';
hdurl = 'http://www.tphoto.cn/newlatest/ltime/2017/0331/16787.html';
} else if(secdom.indexOf('x') > -1 ) {
hdurl = '/ltime/201703/127031.html';
} else if(secdom.indexOf('ks') > -1 ) {
hdurl = '/ltime/201703/126131.html';
} else {
hdurl = '/ltime/201703/126031.html';
}

if(issy) {
hdurl = '/recent/201702/116806.html';
}

$('.right_fixed a:eq(0)').attr('href', stsite + '/newcase-201704-02.html');
$('.right_fixed a:eq(1)').attr('href', stsite + '/newcase-201704-01.html');
$('.right_fixed a:eq(2)').attr('href', stsite + '/newcase-201703-04.html');
$('.right_fixed a:eq(3)').attr('href',  hdurl);
}


try {
var list_secdom = ['tlhxzg', 'gtsdlzt', 'tlhgz'];
if(!issy) {
(function(){
var listqq = document.createElement('div');listqq.id = 'listqq';listqq.className = 'listqq';
var list_qqs = [3076116038,1427276100,272568267,2850700525,2850700505,2787034177,2850700526];
var qq_names = ['沐尘','小灰','满满','小汐','晨晨','妍妍','阳阳'];
if(jQuery.inArray(secdom, list_secdom) > -1) {
list_qqs=[3296569651];qq_names=['贝贝'];
}
var l = list_qqs.length,htmls='';for(var i=0; i<l; i++) {htmls += '<li><a target="_self" href="tencent://message/?uin='+list_qqs[i]+'Site=&Menu=yes"><img src="http://www.tphoto.cn/public/qq/q1.png"> 客服'+qq_names[i]+'</a></li>';}listqq.innerHTML = '<div class="closeqq" id="closeqq">×</div><img src="http://www.tphoto.cn/public/qq/q2.png"><ul>'+htmls+'</ul>';document.body.appendChild(listqq);
var isqh = false;
$('#closeqq').click(function(){
var $this = $(this);
if(!isqh) {
$('#listqq').animate({right:-85},'fast',function(){
$this.text('展开');
isqh = true;
});
} else {
$('#listqq').animate({right:0},'fast',function(){
$this.text('×');
isqh = false;
});
}
});

})();
}
}catch(e) {

}

(function(){
$('.mvlink li').click(function(){
 $(this).addClass('activebg').siblings().removeClass('activebg').parent().prev().children().eq($(this).index()- 1).show().siblings().hide();});

if($(".team-tab").length > 0) {
$(".team-tab li").click(function(){
  $(".team-tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
  $(".team-photo").hide().eq($(this).index()).show();
});
$(".team-tab li:eq(2)").click();
}

if($(".footwrap").length > 0) {
$('.footwrap dl:last').hide();
}

$('.day-photo-box').children('div:last').css('margin-right','0');

if(issy) {
$('.week-photo-box').children('div:eq(3)').css('margin-right','0');
$('.week-photo-box').children('div:eq(7)').css('margin-right','0');
$('.week-photo-box div:eq(7)').css('margin-right','0');
$('.style-photo-box div:eq(3)').css('margin-right','0');
$('.style-photo-box div:eq(7)').css('margin-right','0');
$('.style-photo-box div:eq(11)').css('margin-right','0');
}


$('.footwrap dl:last').css('border-right','none');
 //$('.ac-box li:odd').css('margin-right','0');
$(window).scroll(function(){
  var top = $(window).scrollTop();
  if (top>500){$(".left-fixed").slideDown();$(".totop").slideDown(300);}
  else{$(".left-fixed").slideUp();$(".totop").slideUp(200); }
    if (top>200){$(".right_fixed").show();}
  else{$(".right_fixed").hide();}
})

$(".totop").click(function () {$('body,html').animate({ scrollTop: 0 }, 300);return false;});
$(".top").click(function () {$('body,html').animate({ scrollTop: 0 }, 300);return false;});
$('.bottom-avtivity').click(function(){
  $('.reg').css({'width':'','height':'','left':'','top':'','margin-left':'','margin-top':''});
  $('.reg').slideDown(200);
  cookie.set('firstpop', 1, 0.1);
});
$('.close-reg,.close-reg0').click(function(){
  $('.reg').slideUp(200);
  cookie.set('firstpop', 1, 0.1);
});


  time = window.setInterval(function(){$('.og_next').click(); },5000);
  linum = $('.mainlist li').length;
  w = linum * 364;
  $('.piclist').css('width', w + 'px');
  $('.swaplist').html($('.mainlist').html());
  $('.og_next').click(function(){
    if($('.swaplist,.mainlist').is(':animated')){
      $('.swaplist,.mainlist').stop(true,true);
    }
    if($('.mainlist li').length>3){
      ml = parseInt($('.mainlist').css('left'));
      sl = parseInt($('.swaplist').css('left'));
      if(ml<=0 && ml>w*-1){
        $('.swaplist').css({left: '1090px'});
        $('.mainlist').animate({left: ml - 1092 + 'px'},'slow');
        if(ml==(w-1092)*-1){
          $('.swaplist').animate({left: '0px'},'slow');
        }
      }else{
        $('.mainlist').css({left: '1092px'})
        $('.swaplist').animate({left: sl - 1092 + 'px'},'slow');
        if(sl==(w-1092)*-1){
          $('.mainlist').animate({left: '0px'},'slow');
        }
      }
    }
  })
  $('.og_prev').click(function(){

    if($('.swaplist,.mainlist').is(':animated')){
      $('.swaplist,.mainlist').stop(true,true);
    }

    if($('.mainlist li').length>3){
      ml = parseInt($('.mainlist').css('left'));
      sl = parseInt($('.swaplist').css('left'));
      if(ml<=0 && ml>w*-1){
        $('.swaplist').css({left: w * -1 + 'px'});
        $('.mainlist').animate({left: ml + 1092 + 'px'},'slow');
        if(ml==0){
          $('.swaplist').animate({left: (w - 1092) * -1 + 'px'},'slow');
        }
      }else{
        $('.mainlist').css({left: (w - 1092) * -1 + 'px'});
        $('.swaplist').animate({left: sl + 1092 + 'px'},'slow');
        if(sl==0){
          $('.mainlist').animate({left: '0px'},'slow');
        }
      }
    }
  });


$('.og_prev,.og_next').hover(function(){
    $(this).fadeTo('fast',1);
  },function(){
    $(this).fadeTo('fast',0.7);
});


})();

//(function(){function k(a,b,c){if(a.addEventListener)a.addEventListener(b,c,false);else a.attachEvent&&a.attachEvent("on"+b,c)}function g(a){if(typeof window.onload!="function")window.onload=a;else{var b=window.onload;window.onload=function(){b();a()}}}function h(){var a={};for(type in{Top:"",Left:""}){var b=type=="Top"?"Y":"X";if(typeof window["page"+b+"Offset"]!="undefined")a[type.toLowerCase()]=window["page"+b+"Offset"];else{b=document.documentElement.clientHeight?document.documentElement:document.body;a[type.toLowerCase()]=b["scroll"+type]}}return a}function l(){var a=document.body,b;if(window.innerHeight)b=window.innerHeight;else if(a.parentElement.clientHeight)b=a.parentElement.clientHeight;else if(a&&a.clientHeight)b=a.clientHeight;return b}function i(a){this.parent=document.body;this.createEl(this.parent,a);this.size=Math.random()*5+5;this.el.style.width=Math.round(this.size+5)+"px";this.el.style.height=Math.round(this.size+5)+"px";this.maxLeft=document.body.offsetWidth-this.size;this.maxTop=document.body.offsetHeight-this.size;this.left=Math.random()*this.maxLeft;this.top=h().top+1;this.angle=1.4+0.2*Math.random();this.minAngle=1.4;this.maxAngle=1.6;this.angleDelta=0.01*Math.random();this.speed=4+Math.random()}var j=false;g(function(){j=true});var f=true;window.createSnow=function(a,b){if(j){var c=[],m=setInterval(function(){f&&b>c.length&&Math.random()<b*0.0025&&c.push(new i(a));!f&&!c.length&&clearInterval(m);for(var e=h().top,n=l(),d=c.length-1;d>=0;d--)if(c[d])if(c[d].top>$("body,html").height()||c[d].top+c[d].size+1>e+n){c[d].remove();c[d]=null;c.splice(d,1)}else{c[d].move();c[d].draw()}},40);k(window,"scroll",function(){for(var e=c.length-1;e>=0;e--)c[e].draw()})}else g(function(){createSnow(a,b)})};window.removeSnow=function(){f=false};i.prototype={createEl:function(a,b){this.el=document.createElement("img");this.el.setAttribute("src",b+"snow"+Math.floor(Math.random()*4)+".gif");this.el.style.position="absolute";this.el.style.display="block";this.el.style.zIndex="99999";this.parent.appendChild(this.el)},move:function(){if(this.angle<this.minAngle||this.angle>this.maxAngle)this.angleDelta=-this.angleDelta;this.angle+=this.angleDelta;this.left+=this.speed*Math.cos(this.angle*Math.PI);this.top-=this.speed*Math.sin(this.angle*Math.PI);if(this.left<0)this.left=this.maxLeft;else if(this.left>this.maxLeft)this.left=0},draw:function(){this.el.style.top=Math.round(this.top)+"px";this.el.style.left=Math.round(this.left)+"px"},remove:function(){this.parent.removeChild(this.el);this.parent=this.el=null}}})();


(function(){
if($(".numchange").length < 1) return ;
function Ran(n,m){
            return Math.random()*(m-n)+n;
          }
        var cont = "108536";
        var onenice = true;
        for(var i=0;i<cont.length+1;i++){
          $(".numchange").append("<li><ul></ul></li>")
          for(var i=0;i<$(".numchange").children().length;i++){
            for(var j=0;j<20;j++){
              var li = $("<li>"+j%10+"</li>");
              $(".numchange").children("li").eq(i).children("ul").append(li);
              $(".numchange").children("li").eq(i).children("ul").css("top",-Ran(300,1100));
            }
          }
        }

        $(window).scroll(function(){
          if($(".number").offset().top<($(window).scrollTop()+$(window).height()-50) && onenice){

            $(".numchange").find("ul").stop();
                 onenice = ! onenice;
              $(".numchange").find("ul").animate({top:-1700},Ran(1500,2000),"linear",function(){
                      $(this).css("top",Ran(0,-cont[$(this).parent().index()]*90));
                      $(this).animate({top:-cont[$(this).parent().index()]*90},
                        cont[$(this).parent().index()]*220,"linear"
                      )
              })
          }
        });
})();


function addEvent(el,type,fn){if(document.addEventListener){if(el.length){for(var i=0;i<el.length;i++){addEvent(el[i],type,fn)}}else{el.addEventListener(type,fn,false)}}else{if(el.length){for(var i=0;i<el.length;i++){addEvent(el[i],type,fn)}}else{el.attachEvent('on'+type,function(){fn.call(el,window.event)})}}}function stopBubble(event){event=window.event||event;if(document.all){event.cancelBubble=true}else{event.stopPropagation()}}function stopDefault(e){if(e&&e.preventDefault){e.preventDefault()}else{window.event.returnValue=false}return false}function openpop(title,str){var pop=document.getElementById('pop');if(pop){pop.parentNode.removeChild(pop)}pop=document.createElement('div');pop.id='pop';pop.setAttribute('class','pop');pop.innerHTML='<div class="status"><em>'+title+'</em><a title="点我关闭" class="close" id="close">×</a></div><div class="contents"><p>'+str+'</p></div>';document.body.appendChild(pop);var w=pop.clientWidth;var winW=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;pop.style.left=((winW-w)/2)+'px';addEvent(document.getElementById('close'),'click',function(){pop.parentNode.removeChild(pop)});addEvent(document.body,'click',function(){pop.parentNode.removeChild(pop)})}var wbisnull=false;var tbisnull=false;var dzisnull=false;var wbpage=1;var dzpage=1;var tbpage=1;function getComment(arg1,arg2,arg3){if(!arg1||!arg2)return'';var page=arg3;if(arg2){var newitem=document.createElement('div');var idname=arg2.getAttribute('id');if(!arg1.content){switch(idname){case'weibo':wbisnull=true;return false;break;case'dazhong':dzisnull=true;return false;break;case'taobao':tbisnull=true;return false;break}}if(idname=='weibo'&&wbisnull){return false}if(idname=='dazhong'&&dzisnull){return false}if(idname=='taobao'&&tbisnull){return false}switch(idname){case'weibo':wbpage=page;break;case'dazhong':dzpage=page;break;case'taobao':tbpage=page;break}newitem.innerHTML=arg1.content;if(page==1){arg2.innerHTML=arg1.content}else{arg2.appendChild(newitem)}if(idname=='dazhong'||idname=='taobao'){var contenta=document.getElementById(idname).getElementsByTagName('a');for(var i in contenta){if(contenta[i]instanceof HTMLElement){contenta[i].setAttribute('href','javascript:;')}}}var thisH=arg2.clientHeight;addEvent(arg2,'scroll',function(e){var h=this.scrollHeight-thisH;if(this.scrollTop>=(h-250)){switch(idname){case'weibo':getMycoment(idname,++wbpage);break;case'dazhong':getMycoment(idname,++dzpage);break;case'taobao':getMycoment(idname,++tbpage);break}}})}}function getMycoment(type,page){var list=['weibo','taobao','dazhong'];var hastype=false;for(var i=0;i<list.length;i++){if(list[i]==type){hastype=true;break}}if(!hastype){return false}var page=typeof page=='undefined'?1:page;var wb=document.createElement('script');wb.src='http://m.tphoto.cn/jhapp/index.php?c=index&a=haoren&page='+page+'&type='+type;var hs=document.getElementsByTagName('head')[0];hs.parentNode.insertBefore(wb,hs);window.setTimeout(function(){wb.remove()},2200)}if(document.getElementById('weibo')&&document.getElementById('taobao')&&document.getElementById('dazhong')){var tylist=['weibo','taobao','dazhong'];for(var ty in tylist){getMycoment(tylist[ty],1)}}/*if(!issy){createSnow('http://new.tphoto.cn/skins/2016/img/', 60);}*/

try {
$("img").lazyload({placeholder : "http://new.tphoto.cn/skins/2016/img/loading.gif", effect: "fadeIn", threshold: 150, });
}catch(e){

}

document.oncontextmenu = function() { return false; };
