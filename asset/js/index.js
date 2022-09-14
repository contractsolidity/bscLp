$(function(){

    // my referral reward
    const referralArea =  $('.i-total__group2-subgroup2-block3 .i-total__title');
    const referralSelector =  $('.i-total__group2-subgroup2-block3-layer');
    const referralItem =  $('.i-total__group2-subgroup2-block3-layer li');
    const referralToggle = function(){
        referralArea.click(function(){
            referralSelector.toggle();
        })
        referralSelector.click(function(){
            referralSelector.hide();
        })
    }
    referralToggle();



    // contract popup
    const contractOpener = $('.i-visual__contract');
    const contractPopup = $('.i-contractpop');
    const contractCloser = $('.i-contractpop__closer');

    const contractShow = function(){
        contractOpener.click(function(){
            contractPopup.show();
            return false;
        })
        contractCloser.click(function(){
            contractPopup.hide();
        })
    }
    contractShow();

})