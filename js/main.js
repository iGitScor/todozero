$(document).ready(function () {
    initTabLinks();

    closeAllOtherTabs('now');

    updateDateTime();

    setInterval(updateDateTime, 30000);
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
    tabLink.click(function (event) {
        event.preventDefault();

        $('.tab-link').each(function () {
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
    $('.tab-link').each(function () {
        initTabLink($(this));
    });
}


/**
 * Refresh the "todos left" count
 *
 * @return {undefined}
 */
function refreshTodosLeft() {
    var activeTab = getActiveTab();
    var todosLeft;

    if (activeTab === undefined) {
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
    $('#day-day').html(moment().format('DD'));
    $('#day-month').html(moment().format('MM'));
    $('#day-year').html(moment().format('YYYY'));
    $('#time-hours').html(moment().format('HH'));
    $('#time-minutes').html(moment().format('mm'));
}
