var script = document.createElement("script");
script.type = "text/javascript";
script.src = 'http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js';
document.getElementsByTagName("head")[0].appendChild(script);

script.onload = function () {
    var iframe = document.getElementById('iframeautoheight');
    var pjkc = iframe.contentWindow.document.getElementById('pjkc');
    var courseCount = pjkc.length;
    var courseNames = [];
    for (var i = 0; i < pjkc.childNodes.length; i++) {
        var option = pjkc.childNodes[i];
        if (option.nodeName == '#text') {
            continue;
        }
        courseNames.push(option.innerText);
    }
    evaluate(iframe);
    var cc = 0;
    console.log('已评价: ' + courseNames[cc]);
    iframe.onload = function () {
        if (cc < courseCount - 1) {
            evaluate(iframe);
            cc++;
            console.log('已评价: ' + courseNames[cc]);
        } else {
            console.log('所有' + courseCount + '门课程已评价完成');
        }
    };
};

function evaluate(iframe) {
    var obj= iframe.contentDocument.getElementsByTagName('select');
    for(i = 1; i < obj.length; i++) {
        obj[i].value = '优';
    }
    var rid = Math.max(1, Math.floor(Math.random() * obj.length));
    obj[rid].value = '良';
    iframe.contentDocument.getElementById('Button1').click();
}