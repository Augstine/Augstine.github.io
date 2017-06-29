/**
 * Created by Lenovo on 2017/4/15.
 */
//通过id获取元素


// 缓动框架第二版
function lowTwoAnimate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}

//缓动框架;(普通属性和层级透明度)
function lowAnimate(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){

            if(k === "z-index"){
                ele.style.zIndex = json[k];
            }else if(k === "opacity"){
                if(getStyle(ele,k)*10 === 0){
                    var leader = 0;
                }else{
                    var leader = parseInt(getStyle(ele,k)*10) || 10;//因为带有单位,所以去除px;
                }
                var step = (parseInt(json[k]*10)-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader/10;
                ele.style.filter = "alpha(opacity="+leader*10+")";
                if(parseInt(json[k]*10) !== leader){
                    bool = false;
                }
            }else{
                var leader = parseInt(getStyle(ele,k)) || 0;//因为带有单位,所以去除px;
                var step = (json[k]-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader + "px";
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
    },46);
}

//封装一个方法
function getStyle(ele,attr){
    //判断:浏览器支持哪个方法或者属性;支持哪个调用哪个;
    if(window.getComputedStyle !== undefined){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}


//封装的获取页面被卷去的部分;
function lowScroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}



//兼容写法:
function client(){
    //先判断:是否支持window.innnerWidth;  然后在判断是否拥有dtd;有就调用有dtd的,没有就调用另外一个;
    if(window.innerHeight !== undefined){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }else if(document.compatMode === "CSS1Compat"){
        //有dtd
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }else{
        //无dtd
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    }
}

//通过浏览器的宽改变body的背景；
function changeBodyColorForBrowersWidth() {
    //判断浏览器可视区域的宽；
    if(client().width > 960){
        document.body.style.background = "yellowgreen";
    }else if(client().width > 640){
        document.body.style.background = "pink";
    }else{
        document.body.style.background = "skyblue";
    }
}


//操作事件的工具
var Event = {
    removeEvent:function (ele,eve,fn){
        //判断：浏览器是否支持某个方法，支持就调用；
        if(ele.removeEventListener){
            ele.removeEventListener(eve,fn);
        }else if(ele.detachEvent){
            ele.detachEvent("on"+eve,fn);
        }else{
            //dom0;
            ele['on'+eve] = null;
        }
    },
    addEvent:function (ele,eve,fn){
        //判断：浏览器是否支持某个方法，支持就调用；
        if(ele.addEventListener){
            ele.addEventListener(eve,fn);
        }else if(ele.attachEvent){
            ele.attachEvent("on"+eve,fn);
        }else{
            ele["on"+eve] = fn;
        }
    }
}



//模拟jquery
