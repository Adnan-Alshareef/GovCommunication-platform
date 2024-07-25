$("#never_radio").change(function() {
    toggle_years()
});
$("#after_radio").change(function() {
    toggle_years()
});

function toggle_years() {
    if (document.getElementById('never_radio').checked) {
        $("#Years_expiry").attr('disabled', 'disabled');
    } else {
        $("#Years_expiry").removeAttr('disabled');
    }
}