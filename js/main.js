$(document).ready(function() {
    initTabLinks();

    closeAllOtherTabs('now');

    updateDateTime();

    setInterval(updateDateTime, 60000);
});

/**
 * Returns the name of the active tab
 *
 * @return {string|undefined}
 */
function getActiveTab() {
    return $('.tab-active').data('tabname');
}

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

//    refreshTodosLeft();
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

        openTab(tabLink.data('tabname'));
    });
}

/**
 * [initTabLinks description]
 * @return {[type]} [description]
 */
function initTabLinks() {
    $('.tab-link').each(function() {
        initTabLink($(this));
    });
}

/**
 * [leadingZeros description]
 * @param  {[type]} chainToComplete [description]
 * @param  {[type]} nbChar          [description]
 * @return {[type]}                 [description]
 */
function leadingZeros(chainToComplete, nbChar) {
    var chain = chainToComplete.toString();

    if (chain.length >= nbChar) {
        return chain;
    }

    return leadingZeros(String(0).concat(chain), nbChar--);
}

/**
 * Refresh the "todos left" count
 *
 * @return {undefined}
 */
function refreshTodosLeft() {
    var activeTab = getActiveTab();
    var todosLeft;

    if (typeof activeTab === 'undefined') {
        return false;
    }

    todosLeft = $('#' + activeTab + ' .todo').length;

    $('#todos-left').html(todosLeft);
}

/**
 * [updateDateTime description]
 * @return {[type]} [description]
 */
function updateDateTime() {
    var dateTime = new Date();
    var year, month, day, hours, minutes;

    year = dateTime.getFullYear();
    month = leadingZeros(dateTime.getMonth(), 2);
    day = leadingZeros(dateTime.getDate(), 2);
    hours = leadingZeros(dateTime.getHours(), 2);
    minutes = leadingZeros(dateTime.getMinutes(), 2);

    $('#day-day').html(day);
    $('#day-month').html(month);
    $('#day-year').html(year);
    $('#time-hours').html(hours);
    $('#time-minutes').html(minutes);
}
