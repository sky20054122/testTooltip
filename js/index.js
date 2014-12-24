/**
 * Created by brxy on 2014/12/23.
 */


$(document).ready(function(){
    $(".tooltip-test").tooltip();

    $("#jsContent").tooltip({
        title:"Default title value if title attribute isn't present. If a function is given, it will be called with its this reference set to the element that the tooltip is attached to.",
        delay:0,  //delay: { "show": 500, "hide": 100 }
        html:false, // if true Insert HTML into the tooltip
        placement:"auto", //top | bottom | left | right | auto.
        trigger:"hover focus" //How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space.
    });


    pointLengthTooltip("#pointLength");
});

function pointLengthTooltip(id){
    var value = $(id).html();
    var realLength = value.length;
    if(realLength>10){
        $(id).html(value.substring(0,10)+"...");
        $(id).tooltip({
            title:value
        });
    }
}

//计算字符串长度 汉字算两个
function computeByLength(value){
    var length = value.length;
    var subIndex = 10;
    var count = 0;
    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 127) {
            length++;
            count++;
        }
        count++;
        if (count<=20) {
            subIndex = i+1;
        };
    }
    return {
        length:length,
        subIndex:subIndex
    };
}