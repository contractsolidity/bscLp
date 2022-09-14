$(function(){

    // navigation
    const headerToggler = $('.header__navtoggler');
    const headerNav = $('.header .nav.nav--mobile');
    const hederToggle = function(){
        headerToggler.click(function(){
            headerNav.toggle();
        })
    }
    hederToggle();
    $(window).resize(function(){
        if ($(window).width() <= 1240) {
            headerNav.css('display', 'none');
        }
    })



    // slide
    const helpTitle = $('.i-help__list-title');
    const helpText = $('.i-help__list-text');
    const helpToggle = function(){
        helpTitle.click(function(){
            $(this).parent().siblings().find(helpText).slideUp();
            $(this).next(helpText).slideToggle();
        })
    }
    helpToggle();
  var clipboard = new ClipboardJS('.js-copy');
  clipboard.on('success', function (e) {
    layer.open({
      content: "copy success",
      skin: 'msg',
      time: 2 //2秒后自动关闭
    });
  });
  clipboard.on('error', function (e) {
    layer.open({
      content: "copy faild",
      skin: 'msg',
      time: 2
    });
  });
})