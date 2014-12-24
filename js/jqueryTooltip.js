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
});



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