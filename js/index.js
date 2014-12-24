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


//=================subStringTooltip===================
$(document).ready(function(){
    subStringTooltip(".subString",20);
});

function subStringTooltip(className,maxLength){
    $(className).each(function(index,element){

        var value = $.trim($(element).html());
        var computeLength = computeByLength(value,maxLength);
        var realLength = computeLength.realLength;
        var subIndex = computeLength.subIndex;
        console.info("index="+index+" subIndex="+subIndex+" realLength="+realLength+" value="+value );

        if(realLength>maxLength){
            var subStr = value.substring(0,subIndex)+"...";
            console.info("subStr(0,10)="+subStr);
            $(element).html(subStr).css("color","blue");
            $(element).tooltip({
                title:value
            });
        }
    });
}

//计算字符串长度 汉字算两个
function computeByLength(value,maxLength){
    var realLength = value.length;
    var subIndex = 10;
    var count = 0;
    for (var i = 0; i < realLength; i++) {
        if (value.charCodeAt(i) > 127) {
            realLength++;
            count++;
        }
        count++;
        if (count<=maxLength) {
            subIndex = i+1;
        };
    }
    return {
        realLength:realLength,
        subIndex:subIndex
    };
}

//==============/. subStringTooltip=====================

//=======================img tooltip========================
$(document).ready(function(){
    imgTooltip();
});

function imgTooltip(){
    $(".imgTooltip").each(function(index,element){
        var src= $(element).attr("name");
        var html = '<img src="'+src+'" width="100%">';
        $(element).tooltip({
            html:true,
            title:html
        }).css("color","blue");
    });
}

//===================/. img tooltip====================================