(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
            if(!event.srcElement[4].files[0]){
                let element = document.getElementById('file1-error')
                element.innerHTML = 'الرجاء إرفاق ملف'
                element.classList.add('d-block')
            }else{
              let element = document.getElementById('file1-error')
              element.classList.remove('d-block')
            }
            if(!event.srcElement[5].files[0]){
                let element = document.getElementById('file2-error')
                element.innerHTML = 'الرجاء إرفاق ملف'
                element.classList.add('d-block')
            }
            else{
              let element = document.getElementById('file2-error')
              element.classList.remove('d-block')
            }
            if(!event.srcElement[6].files[0]){
                let element = document.getElementById('file3-error')
                element.innerHTML = 'الرجاء إرفاق ملف'
                element.classList.add('d-block')
            }
            else{
              let element = document.getElementById('file3-error')
              element.classList.remove('d-block')
            }
            if(!event.srcElement[7].files[0]){
                let element = document.getElementById('file4-error')
                element.innerHTML = 'الرجاء إرفاق ملف'
                element.classList.add('d-block')
            }
            else{
              let element = document.getElementById('file4-error')
              element.classList.remove('d-block')
            }
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
