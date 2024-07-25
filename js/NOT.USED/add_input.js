function add_choice(elements_class_name) {
    document.getElementsByClassName('display-alert-choices')[0].style.display = "none";
    document.getElementsByClassName('display-alert-choices-less')[0].style.display = "none";
    input_counter = document.getElementsByClassName(elements_class_name)[0].childElementCount;

    if (input_counter < 4) {
        var input_element = document.createElement("div");
        input_element.classList.add('choice_element');
        input_element.innerHTML = `
        <div class="row">
            <div class="col-lg-1">
                <input class="custom_radio_button" type="radio" id="radio_choice_` + (input_counter + 1) + `" name="question_number"><label for="radio_choice_` + (input_counter + 1) + `"></label>
            </div>
            <div class="col-lg-10"><input id="choice_` + (input_counter + 1) + `" type="text" class="form-control choice_value_item" placeholder="Choice" required></div>
            <div class="col-lg-1">
                <input type="button" class="delete_choice" onclick="delete_choice_element(this)"></div>
        </div>`
        document.getElementsByClassName(elements_class_name)[0].appendChild(input_element);
        input_counter++;
    } else {
        document.getElementsByClassName('display-alert-choices')[0].style.display = "block";
    }
}



function fill_choices(string_of_choices) {
    edit_choices = document.getElementsByClassName('edit_choices_elements')[0];
    edit_choices.innerHTML = ""
    arr = string_of_choices.split(';')

    
    for (let input_counter = 0; input_counter < arr.length; input_counter++) {
        values = arr[input_counter].split(',');
        isChecked = ""
        if (values[1]=="true") {
            isChecked = "checked"
        } else {
            isChecked = ""
        }
        
        var input_element = document.createElement("div");
        input_element.classList.add('choice_element');
        input_element.innerHTML = `
        <div class="row">
            <div class="col-lg-1">
                <input class="custom_radio_button" type="radio" id="edit_radio_choice_` + (input_counter + 1) + `" name="edit_question_number" ` + isChecked +`><label for="edit_radio_choice_` + (input_counter + 1) + `"></label>
            </div>
            <div class="col-lg-10"><input id="choice_` + (input_counter + 1) + `" type="text" class="form-control choice_value_item update_choice_value_item" placeholder="Choice" required value="`+values[0]+`"></div>
            <div class="col-lg-1">
                <input type="button" class="delete_choice" onclick="delete_edit_choice_element(this)"></div>
        </div>`
        edit_choices.appendChild(input_element);
    }
    //document.getElementsByClassName('display-alert-choices')[0].style.display = "none";
    //document.getElementsByClassName('display-alert-choices-less')[0].style.display = "none";
    //input_counter = document.getElementsByClassName(elements_class_name)[0].childElementCount;

}




//function add_category() {
//    input_counter = document.getElementsByClassName('category_elements')[0].childElementCount;

//    if (input_counter < 3) {
//        document.getElementsByClassName('display-alert-categories')[0].style.display = "none";
//        var input_element = document.createElement("div");
//        input_element.classList.add('category_element');
//        input_element.innerHTML = `
//        <div class="row">
//        <div class="col-lg-6"><label for="category_` + input_counter + `">Category :</label>
//                                            <select name="" id="category_` + input_counter + `" class="form-select">
//                                                <option disabled="" selected="">Select Category ..</option>
//                                                <option value="Aviation electronic/Avionics">Aviation electronic/Avionics</option>
//                                                <option value="Navigation controls">Navigation controls</option>
//                                            </select>
//                                        </div>

//                                        <div class="col-lg-6">
//                                        <div class="row">
//                                            <label for="num_of_questions_` + input_counter + `">Number of Questions :</label>
//                                            <div class="col-lg-10">
//                                            <input type="text" class="form-control" id="num_of_questions_` + input_counter + `" placeholder="">
//                                            </div>

//                                            <div class="col-lg-2">
//                                            <input type="button" class="delete_choice w-100" onclick="delete_category_element(this)">
//                                            </div>
//                                            </div>
//                                        </div>
//        </div>`
//        document.getElementsByClassName('category_elements')[0].appendChild(input_element);
//        input_counter++;
//    } else {
//        document.getElementsByClassName('display-alert-categories')[0].style.display = "block";
//    }
//}