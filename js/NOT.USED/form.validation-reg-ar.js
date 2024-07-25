(function() {
    "use strict";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
    // Loop over them and prevent submission
    $('#saudi').click(function(e) {
        document.getElementById('investor-value').value = 'Saudi';
    });
    $('#foreign').click(function(e) {
        document.getElementById('investor-value').value = 'foreign';
    });
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
            "submit",
            function(event) {
                let x = document.getElementById('investor-choice')
                let investorChoice = x.getElementsByClassName('investor-btn-active')[0].id
                var failed = false;
                if (investorChoice === 'foreign') {
                    if (document.getElementById('file1')) {
                        document.getElementById('file1-error').innerHTML = "يجب رفع الملف"
                        document.getElementById('file1-error').classList.add('d-block')
                    } else {
                        document.getElementById('file1-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file2')) {
                        document.getElementById('file2-error').innerHTML = "يجب رفع الملف"
                        document.getElementById('file2-error').classList.add('d-block')
                    } else {
                        document.getElementById('file2-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file3')) {
                        document.getElementById('file3-error').innerHTML = "يجب رفع الملف"
                        document.getElementById('file3-error').classList.add('d-block')
                    } else {
                        document.getElementById('file3-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file4')) {
                        document.getElementById('file4-error').innerHTML = "يجب رفع الملف"
                        document.getElementById('file4-error').classList.add('d-block')
                    } else {
                        document.getElementById('file4-error').classList.remove('d-block')
                    }
                } else if (investorChoice === 'saudi') {
                    if (document.getElementById('file5')) {
                        document.getElementById('file5-error').innerHTML = "يجب رفع الملف"
                        document.getElementById('file5-error').classList.add('d-block')
                    } else {
                        document.getElementById('file5-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file6')) {
                        document.getElementById('file6-error').innerHTML = "يجب رفع الملف"
                        document.getElementById('file6-error').classList.add('d-block')
                    } else {
                        document.getElementById('file6-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file7')) {
                        document.getElementById('file7-error').innerHTML = "يجب رفع الملف"
                        document.getElementById('file7-error').classList.add('d-block')
                    } else {
                        document.getElementById('file7-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file8')) {
                        document.getElementById('file8-error').innerHTML = "يجب رفع الملف"
                        document.getElementById('file8-error').classList.add('d-block')
                    } else {
                        document.getElementById('file8-error').classList.remove('d-block')
                    }
                }
                if ($("[name='checkbox_select']:checked").length == 0) {
                    $("[name='checkbox_select']").attr('required', true);
                    failed = true;
                    document.getElementById('checkbox-error').innerHTML = "يجب اختيار خدمة على الأقل"
                    document.getElementById('checkbox-error').classList.add('d-block')
                } else {
                    $("[name='checkbox_select']").attr('required', false);
                    document.getElementById('checkbox-error').classList.remove('d-block')
                }
                const yOffset = -10;
                var errors = document.querySelectorAll(".form-control:invalid");
                const y =
                    errors[0].getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                errors[0].focus();
                if (!form.checkValidity()) {
                    failed = true;
                }
                if (failed == true) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
})();

function check() {
    let item = document.getElementById("checkbox_group");
}