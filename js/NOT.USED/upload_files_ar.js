let id
updateList = function(props) {
     input = document.getElementById(props);
     id = props
        item = input.files[0]
        input.parentElement.parentElement.innerHTML =  `<div class="col-12 d-flex flex-row col-lg' id="`+ props + `"><div class="col-12 d-flex flex-row col-lg"><div class="col-2 me-2 me-lg-0 me-md-0 p-1 text-center"><img src="` + location.origin + `/images/blue_file_icon.png" alt = "" ></div>
    <div class="col-10 p-1 text-truncate">`+item.name+`</div>
    <div class="col-1 p-1 text-center"><a class="delete_button_attachment" href="#" onclick="removeFileItem(this)"></a>` + `</li>
    </div>
    </div>`
}

function removeFileItem(props) {
    props.parentElement.parentElement.parentElement.parentElement.innerHTML = ' <label class="btn btn-default upload">'+
   'رفع <input type="file" name="file" id="'+id+'" onchange="javascript:updateList(this.id)" hidden>'+
'</label>'
}

