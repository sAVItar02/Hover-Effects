new ClipboardJS('.copyBtnCSS');
new ClipboardJS('.copyBtnHTML');

let sidebarOneBtn = $('.sidebar-1-btn');
let sidebarTwoBtn = $('.sidebar-2-btn');
let overlay = $('.overlay');
let sidebarOneCode = $('.sidebar-1-code-popup');
let sidebarTwoCode = $('.sidebar-2-code-popup');
let closeBtn = $('.fa-times');
let copyBtnCSS = $('.copyBtnCSS');
let copyBtnHTML = $('.copyBtnHTML');
let alertSpanCSS = $('.alertCSS');
let alertSpanHTML = $('.alertHTML');

sidebarOneBtn.on('click', function(){
    overlay.css('transform', 'scale(1)');
    sidebarOneCode.css('transform', 'scale(1)');
});

closeBtn.on('click', function(){
    overlay.css('transform', 'scale(0)');
    sidebarOneCode.css('transform', 'scale(0)');
    sidebarTwoCode.css('transform', 'scale(0)');
});

copyBtnCSS.on('click', function(){
    alertSpanCSS.css('transform', 'translateX(500%) scale(1)');
    setTimeout(() => {
        alertSpanCSS.css('transform', 'translateX(500%) scale(0)')
    }, 1500);
});

copyBtnHTML.on('click', function(){
    alertSpanHTML.css('transform', 'translateX(500%) scale(1)');
    setTimeout(() => {
        alertSpanHTML.css('transform', 'translateX(500%) scale(0)')
    }, 1500);
});

sidebarTwoBtn.on('click', function(){
    overlay.css('transform', 'scale(1)');
    sidebarTwoCode.css('transform', 'scale(1)');
});