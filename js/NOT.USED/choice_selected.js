$(document).ready(function() {
    $("input").change(function() {
        $('input').parent().removeClass("bg-selected-choice");
        $('input:checked').parent().addClass("bg-selected-choice");
    });
});