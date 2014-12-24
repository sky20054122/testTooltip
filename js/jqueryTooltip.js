/**
 * Created by brxy on 2014/12/23.
 */


$(document).ready(function(){

    $(".tooltip-test").tooltip();

    $(".left").tooltip({
        position:{
            my:"right right", //tooltip元素对准点
            at:"left left"  //hover元素对准点
        }
    });
    $(".top").tooltip({
        position:{
            at:"top top",
            my:"bottom bottom"
        }
    });
    $(".bottom").tooltip({
        position:{
            my:"top top",
            at:"bottom bottom"
        }
    });

    $(".right").tooltip({
        position:{
            my:"left left",
            at:"right right "
        }
    });

    $(".username").tooltip({
        content:"tooltip长文本测试，tooltip长文本测试tooltip长文本测试tooltip长文本测试tooltip长文本测试tooltip长文本测试tooltip长文本测试tooltip长文本测试"
    });

    $("#jsContent").tooltip({
        content:"js指定tooltip内容，标签必须有title，然后js指定content才有效"
    });

    $("#longBtn").tooltip({
        track: true //跟随鼠标移动
    });

   $("#effect").tooltip({
       show: {
           duration: "fast"
       },
       hide: {
           effect: "hide"
       }

   });

    pointLengthTooltip("#pointLength");

    pointLengthClassTooltip(".pointLength");


});


function pointLengthClassTooltip(className){
    $(className).each(function(index,element){

        var value = $.trim($(element).html());
        var realLength = value.length;
        console.info("index="+index+"; value="+value+" realLength="+realLength);

        if(realLength>10){
            var subStr = value.substring(0,10)+"...";
            console.info("subStr(0,10)="+subStr);
            $(element).html(subStr);
            $(element).tooltip({
                content:value
            });
        }
    });

}

function pointLengthTooltip(id){
    var value = $(id).html();
    var realLength = value.length;
    if(realLength>10){
        $(id).html(value.substring(0,10)+"...");
        $(id).tooltip({
            content:value
        });
    }
}
//================subStringTooltip=======================
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
                content:value
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

//================/. subStringTooltip=======================






//=======================img tooltip========================
$(document).ready(function(){
    imgTooltip();
});

function imgTooltip(){
    $(".imgTooltip").each(function(index,element){
        var src= $(element).attr("name");
        var html = '<img src="'+src+'" width="100%">';
        $(element).tooltip({
            content:html
        });
    });
}

//===================/. img tooltip====================================