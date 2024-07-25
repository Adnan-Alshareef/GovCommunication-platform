
let lastIndex = ''
$(function() {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else if(form.checkValidity()){
          document.getElementById(lastIndex).remove()
        }

        form.classList.add('was-validated')
      }, false)
    })
});


function deletePic(props) {
  let div = document.getElementById(props)
  div.parentElement.parentElement.parentElement.remove();
  let targetDivID = parseInt(props.match(/\d+/))
  let targetDelete = document.getElementById('wrapper-file'+targetDivID)
  targetDelete.remove()
}





function addPic(props) {
  let file = document.getElementById(props).files[0];
  let slider = document.getElementsByClassName("slick-track")[0];
  index = slider.childElementCount;
  $(".admin-opp-details-slider").slick(
    "slickAdd",
    '<div class="slick-slide slick-active" data-slick-index="' +
      index +
      '" aria-hidden="false" style="width: 216px;">' +
      '<div><div class="admin-img-wrapper" style="width: 100%; display: inline-block;">' +
      '<img class="img-slider-admin"  src="' +
      URL.createObjectURL(file) +
      '">' +
      '<button onclick="deletePic(this.id)" id="file'+parseInt(props.substr(4))+'-wrapper-button" type="button" class="btn btn-danger" tabindex="' +
      index +
      '"></button>' +
      "</div></div></div>"
  );
  let newID = parseInt(props.match(/\d+/))+1
  let oldFile = document.getElementById('wrapper-'+props)
  let newFile = document.getElementById('files-wrapper')
  lastIndex = 'wrapper-file'+newID
  oldFile.classList.add('d-none')
  newFile.insertAdjacentHTML('beforeend','<label class="btn add" id="wrapper-file'+newID+'"> Add Photo <input type="file" id="file'+newID+'" onchange="addPic(this.id)" multiple="" hidden=""> </label>')
}


function addPicAR(props) {
  let file = document.getElementById(props).files[0];
  let slider = document.getElementsByClassName("slick-track")[0];
  index = slider.childElementCount;
  $(".admin-opp-details-slider").slick(
    "slickAdd",
    '<div class="slick-slide slick-active" data-slick-index="' +
      index +
      '" aria-hidden="false" style="width: 216px;">' +
      '<div><div class="admin-img-wrapper" style="width: 100%; display: inline-block;">' +
      '<img class="img-slider-admin"  src="' +
      URL.createObjectURL(file) +
      '">' +
      '<button onclick="deletePic(this.id)" id="file'+parseInt(props.substr(4))+'-wrapper-button" type="button" class="btn btn-danger" tabindex="' +
      index +
      '"></button>' +
      "</div></div></div>"
  );
  let newID = parseInt(props.match(/\d+/))+1
  let oldFile = document.getElementById('wrapper-'+props)
  let newFile = document.getElementById('files-wrapper')
  lastIndex = 'wrapper-file'+newID
  oldFile.classList.add('d-none')
  newFile.insertAdjacentHTML('beforeend','<label class="btn add" id="file'+newID+'-wrapper"> إضافة صور <input type="file" id="file'+newID+'" onchange="addPicAR(this.id)" multiple="" hidden=""> </label>')
}



function addPicNews(props) {
  let file = document.getElementById(props).files[0];
  let slider = document.getElementsByClassName("slick-track")[0];
  index = slider.childElementCount;
  if(file){
    document.getElementById('add-button').classList.add('d-none')
  }
  $(".admin-opp-details-slider").slick(
    "slickAdd",
    '<div class="slick-slide slick-active" data-slick-index="' +
      index +
      '" aria-hidden="false" style="width: 216px;">' +
      '<div><div class="admin-img-wrapper" style="width: 100%; display: inline-block;">' +
      '<img class="img-slider-admin" src="' +
      URL.createObjectURL(file) +
      '">' +
      '<button onclick="deletePicNews(this)" type="button" class="btn btn-danger" tabindex="' +
      index +
      '"></button>' +
      "</div></div></div>"
  );
}

function deletePicNews(div) {
  div.parentElement.parentElement.parentElement.remove();
  document.getElementById('add-button').classList.remove('d-none')
  $("#file").val(null);
}
