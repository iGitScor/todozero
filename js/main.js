$(document).ready(function() {
    $('.tab-link').each(function() {
        initTabLink($(this));
    });

    closeAllOtherTabs('now');
});

/**
 * [openTab description]
 * @param  {[type]} tabName [description]
 * @return {[type]}         [description]
 */
function openTab(tabName) {
    var tab = $('#' + tabName);

    if (tab.length === 0) {
        return false;
    }

    closeAllOtherTabs(tabName);

    tab.show();
}

/**
 * [closeAllOtherTabs description]
 * @param  {[type]} tabName [description]
 * @return {[type]}         [description]
 */
function closeAllOtherTabs(tabName) {
    var tab = $('#' + tabName);

    if (tab.length === 0) {
        return false;
    }

    $('.tab').each(function() {
        if ($(this).attr('id') !== tab.attr('id')) {
            $(this).hide();
        }
    });
}

/**
 * [initTabLink description]
 * @param  {[type]} tabLink [description]
 * @return {[type]}         [description]
 */
function initTabLink(tabLink) {
    tabLink.click(function(event) {
        event.preventDefault();

        $('.tab-link').each(function() {
            $(this).removeClass('tab-active');
        });

        tabLink.addClass('tab-active');

        openTab(tabLink.attr('data-tab'));
    });
}
