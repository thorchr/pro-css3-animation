var html = [];
for (i = 0; i < 30; i++) {
    var randomX = Math.random() * (100 - 1) + 1;
    var randomY = Math.random() * (1200 - 1) + 1;
    var randomZ = Math.random() * (100 - 1) + 1;
html.push('<div style="left:'+randomX+'%;top:'+randomY+'px;width:'+randomZ+'px;height:  '+randomZ+'>
</div>');
}
    $("body").append( html.join('') );