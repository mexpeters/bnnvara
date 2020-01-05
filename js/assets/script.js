(function ($) {

    'use strict';

    var storyTrigger = '.trigger-story',
        tipsTrigger = '.trigger-tips',
        storyPopup = '.popup-box.state-story',
        tipsPopup = '.popup-box.state-tips',
        stateOpen = 'state-open',
        triggerClose = '.trigger-close';

        $(storyTrigger).on('click', function() {
            $(storyPopup).addClass(stateOpen);
        });

        $(tipsTrigger).on('click', function() {
            $(tipsPopup).addClass(stateOpen);
        });

        $(triggerClose).on('click', function() {
            $(storyPopup).removeClass(stateOpen);
            $(tipsPopup).removeClass(stateOpen);
        });

    $(document).on('click', 'a[href^="#"]', function(e) {
        e.preventDefault();
        var target = this.hash,
            bodyOffSet = $('#top').height();
        if($(target).length !== 0) {
            $('html, body').animate({
                scrollTop: ($(target).offset().top-(bodyOffSet+20))
            }, 300);
        }
    });

})(window.jQuery);