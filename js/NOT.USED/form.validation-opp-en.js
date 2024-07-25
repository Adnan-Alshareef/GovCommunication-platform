(function() {
    "use strict";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
            "submit",
            function(event) {
                if (!form.checkValidity()) {
                    var form_it = document.getElementById('apply_opp_form')
                    var file_list = form_it.querySelectorAll('input[type="file"]')
                    for (let index = 0; index < file_list.length; index++) {
                        var file_id = file_list[index].id
                        if (!file_list[index].files[0]) {
                            let element = document.getElementById(file_id + '-error')
                            element.classList.add('d-block')
                        } else {
                            document.getElementById(file_id + '-error').classList.remove('d-block')
                        }
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