//�󶨼����Ժ���
function bind(obj,evType,evFn) {
    // ����������������м��  ���ʶ��֧��addEventListener ��ֱ��ʹ������󶨷�ʽ
    // �����֧��������� ���պ���ķ�ʽ���а�

    obj.handle = function(){
        evFn.call(obj);
    }

    if(obj.addEventListener){
        // ��׼������������
        obj.addEventListener(evType,evFn,false);
        obj.handle = evFn;
    }else if(obj.attachEvent) {
        //IE6 7 8 ������󶨷�ʽ
        obj.attachEvent("on"+evType,obj.handle);
    } else {
        // ���Ϸ�������֧�ֵĺ��ϵ������ ���������
        obj["on"+evType] = evFn;

    }
}


function $(selector,fuji) {
    // ������ĳһ��Ԫ������ȥ��ȡ��ǩ�� ��ô����Ҫ�����ض��ĸ���
    // �󲿷������ һ���Ǵ������ĵ��»�ȡ  ��������������ڲ�����һ��
    //���û�д��븸������ô��ֱ�Ӵ��ĵ��»�ȡ��ǩ������������˸�������ô�Ӵ���ĸ����»�ȡ��ǩ��
    fuji = fuji || document;

    if(selector.charAt(0)=="#") {
        return document.getElementById(selector.substring(1));
    }else {
        return fuji.getElementsByTagName(selector);
    }


}


// �����
function unbind(obj,evType,evFn) {
    if(obj.removeEventListener) {
        obj.removeEventListener(evType,obj.handle,false);
    }else if(obj.detachEvent) {
        obj.detachEvent("on"+evType,obj.handle);
    }else {
        obj["on"+evType] = null;
    }

}



//�����ڵ�ļ�����
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
    //    ���� obj ֮��
    //     ��׼������� ����ʶ���һ������ ��ȡ���ǵ�һ��Ԫ�ؽڵ�����
    //     �Ǳ�׼    ����ʶ���һ������ Ϊ�� Ȼ���ߺ���  ����ʶ��ڶ�������  ����ֻ����Ԫ�ؽڵ�
    //  ���һ���ӽڵ㶼û��  ��׼�ͷǱ�׼���������ȡ����Ԫ�ؽڵ�  ��  firstEle������ ����ô����null
    //  �������ֻ��һ���ı��ڵ� ��ô �ı��ڵ�Ҳ�Ǵ��ڵ� �����  ����Ҫ�ټ�һ������ ����ס�ı�
    var firstEle = obj.firstElementChild || obj.firstChild;

    if(firstEle&&firstEle.nodeType==1){
        return firstEle;
    }else {
        return null;
    }


//��ȡ��������ʽ����
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
