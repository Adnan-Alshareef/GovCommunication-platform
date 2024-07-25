delete_choices = document.getElementsByClassName('delete_choice')
delete_choices = [].slice.call(delete_choices)
delete_choices.forEach(element => {
    element.onclick = function() {
        delete_choice_element(element)
    }
});

function delete_choice_element(element) {
    document.getElementsByClassName('display-alert-choices')[0].style.display = "none";
    input_counter = element.parentElement.parentElement.parentElement.parentElement.childElementCount;
    console.log(input_counter)
    if (input_counter > 2) {
        element.parentElement.parentElement.parentElement.remove()
    } else {
        document.getElementsByClassName('display-alert-choices-less')[0].style.display = "block";
    }
}


function delete_edit_choice_element(element) {
    document.getElementsByClassName('display-alert-choices')[1].style.display = "none";
    input_counter = element.parentElement.parentElement.parentElement.parentElement.childElementCount;
    console.log(input_counter)
    if (input_counter > 2) {
        element.parentElement.parentElement.parentElement.remove()
    } else {
        document.getElementsByClassName('display-alert-choices-less')[1].style.display = "block";
    }
}




//function delete_category_element(element) {
//    document.getElementsByClassName('display-alert-categories')[0].style.display = "none";
//    input_counter = document.getElementsByClassName('category_elements')[0].childElementCount;
//    console.log(input_counter)
//    if (input_counter > 2) {
//        element.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
//    }
//}