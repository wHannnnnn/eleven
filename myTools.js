//绑定兼容性函数
function bind(obj,evType,evFn) {
    // 根据浏览器能力进行检测  如果识别支持addEventListener 就直接使用这个绑定方式
    // 如果不支持这个方法 则按照后面的方式进行绑定

    obj.handle = function(){
        evFn.call(obj);
    }

    if(obj.addEventListener){
        // 标准浏览器走这个绑定
        obj.addEventListener(evType,evFn,false);
        obj.handle = evFn;
    }else if(obj.attachEvent) {
        //IE6 7 8 走这个绑定方式
        obj.attachEvent("on"+evType,obj.handle);
    } else {
        // 以上方法都不支持的很老的浏览器 走这个方法
        obj["on"+evType] = evFn;

    }
}


function $(selector,fuji) {
    // 如果想从某一个元素里面去获取标签名 那么你需要传入特定的父级
    // 大部分情况下 一般是从整个文档下获取  所有我们最好在内部处理一下
    //如果没有传入父级　那么则直接从文档下获取标签　　如果传入了父级　那么从传入的父级下获取标签名
    fuji = fuji || document;

    if(selector.charAt(0)=="#") {
        return document.getElementById(selector.substring(1));
    }else {
        return fuji.getElementsByTagName(selector);
    }


}


// 解绑函数
function unbind(obj,evType,evFn) {
    if(obj.removeEventListener) {
        obj.removeEventListener(evType,obj.handle,false);
    }else if(obj.detachEvent) {
        obj.detachEvent("on"+evType,obj.handle);
    }else {
        obj["on"+evType] = null;
    }

}



//操作节点的兼容性
function prev(obj) {
    var prevEle = obj.previousElementSibling || obj.previousSibling;

    if(prevEle&&prevEle.nodeType==1){
        return prevEle;
    }else {
        return null;
    }
}


function next(obj) {
    var nextEle = obj.nextElementSibling || obj.nextSibling;

    if(nextEle&&nextEle.nodeType==1){
        return nextEle;
    }else {
        return null;
    }
}

function last(obj) {
    var lastEle = obj.lastElementChild || obj.lastChild;

    if(lastEle&&lastEle.nodeType==1){
        return lastEle;
    }else {
        return null;
    }
}
function first(obj) {
    //    传入 obj 之后
    //     标准浏览器中 可以识别第一个属性 获取的是第一个元素节点类型
    //     非标准    不能识别第一个属性 为假 然后走后面  可以识别第二个属性  并且只包含元素节点
    //  如果一个子节点都没有  标准和非标准浏览器都获取不到元素节点  则  firstEle不存在 ，那么返回null
    //  如果里面只有一个文本节点 那么 文本节点也是存在的 是真的  所以要再加一个条件 限制住文本
    var firstEle = obj.firstElementChild || obj.firstChild;

    if(firstEle&&firstEle.nodeType==1){
        return firstEle;
    }else {
        return null;
    }


//获取兼容性样式函数
    function getStyle(obj,attr) {

        if(window.getComputedStyle) {
            return getComputedStyle(obj)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }





}/**
 * Created by wanghan on 2017/9/18.
 */
