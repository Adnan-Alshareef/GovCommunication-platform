var id
updateList = function(props) {

    console.log(props);
    input = document.getElementById(props.id);
    id = props.id
    item = input.files[0]
    var output = document.getElementById(`${props.id}_wrapper`);
    console.log(`${props.id}_wrapper`);
    console.log(output)
    input.parentElement.parentElement.children[0].hidden = true;
    output.innerHTML = `<div class="col-12" id="` + props.id + `">
    <div class="row">
    <div class="col-2 me-2 me-lg-0 me-md-0 p-1 text-center">
    <img src="` + location.origin + `/images/blue_file_icon.png" alt = "" >
    </div>
   <div class="col-8 p-1 text-truncate">` + item.name + `</div>
   <div class="col-2 p-1 text-center"><a class="delete_button_attachment" id='${props.id}' type="button" onclick="removeFileItem(this.id)"></a>` + `</div>
   </div>
   </div>`

}

function removeFileItem(props) {
    console.log('Remove');
    console.log(props);
    input = document.getElementById(props);
    var output = document.getElementById(`${props}_wrapper`);
    input.files[0] = null
    $("#" + props + "").val(null);
    output.innerHTML = ""
    input.parentElement.parentElement.children[0].hidden = false;
}


updateListOpp = function(props) {
    input = document.getElementById(props);
    var output = document.getElementById(`${props}_wrapper`);
    id = props
    item = input.files[0]
    output.innerHTML = `<div class="col-12 d-flex flex-row col-lg-8 mt-5' id="` + props + `"><div class="col-12 d-flex flex-row col-lg-8 mt-3">
    <div class="col-2 me-2 me-lg-0 me-md-0 p-1 text-center">
    <img src="` + location.origin + `/images/blue_file_icon.png" alt = "" >
    </div>
   <div class="col-8 p-1 text-truncate">` + item.name + `</div>
   <div class="col-2 p-1 text-center"><a class="delete_button_attachment" id='${props}' href="#" onclick="removeFileItemOpp(this.id)"></a>` + `</div>
   </div>
   </div>`
}

function removeFileItemOpp(props) {
    input = document.getElementById(props);
    var output = document.getElementById(`${props}_wrapper`);
    input.files[0] = null
    $("#" + props + "").val(null);
    output.innerHTML = ""
}



function catAddPic(props) {
    var file = document.getElementById(props).files[0]
    if (file) {
        var wrapper = document.getElementById('icon-wrapper')
        wrapper.classList.remove('d-none')
        var img = document.getElementById('icon-img')
        img.src = URL.createObjectURL(document.getElementById(props).files[0])
        var current = document.getElementById(props)
        current.parentElement.parentElement.classList.add('d-none')
        $("#file").val(null);
    }
}

function deleteCatPic(props) {
    props.parentElement.classList.add('d-none')
    var wrapper = document.getElementById('add-wrapper')
    wrapper.classList.remove('d-none')
    $("#file").val(null);
}