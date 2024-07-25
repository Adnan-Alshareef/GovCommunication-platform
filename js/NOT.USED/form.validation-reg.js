(function() {
    "use strict";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");
    // Loop over them and prevent submission
    $('#saudi').click(function(e) {
        document.getElementById('country').value = document.getElementById('Saudi Arabia').value
        document.getElementById('country').disabled = true;
        document.getElementById('investor-value').value = 'true';
        $('#reg_certificate_no').attr('required', true);
    });
    $('#foreign').click(function(e) {
        document.getElementById('country').disabled = false;
        document.getElementById('country').selectedIndex = 0;
        document.getElementById('investor-value').value = 'false';
        $('#reg_certificate_no').attr('required', false);
        document.getElementById('reg_certificate_no').value = '';
    });
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
            "submit",
            function(event) {
                let x = document.getElementById('investor-choice')
                let investorChoice = x.getElementsByClassName('investor-btn-active')[0].id
                var failed = false;
                if (investorChoice === 'foreign') {
                    if (document.getElementById('file1').value == "" || document.getElementById('file1').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file1-error').classList.add('d-block')
                    } else {
                        document.getElementById('file1-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file7').value == "" || document.getElementById('file7').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file7-error').classList.add('d-block')
                    } else {
                        document.getElementById('file7-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file8').value == "" || document.getElementById('file8').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file8-error').classList.add('d-block')
                    } else {
                        document.getElementById('file8-error').classList.remove('d-block')
                    }
                }

                if (investorChoice === 'saudi') {
                    console.log(event)
                    if (document.getElementById('file2').value == "" || document.getElementById('file2').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file2-error').classList.add('d-block')
                    } else {
                        document.getElementById('file2-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file3').value == "" || document.getElementById('file3').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file3-error').classList.add('d-block')
                    } else {
                        document.getElementById('file3-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file4').value == "" || document.getElementById('file4').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file4-error').classList.add('d-block')
                    } else {
                        document.getElementById('file4-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file5').value == "" || document.getElementById('file5').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file5-error').classList.add('d-block')
                    } else {
                        document.getElementById('file5-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file6').value == "" || document.getElementById('file6').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file6-error').classList.add('d-block')
                    } else {
                        document.getElementById('file6-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file7').value == "" || document.getElementById('file7').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file7-error').classList.add('d-block')
                    } else {
                        document.getElementById('file7-error').classList.remove('d-block')
                    }
                    if (document.getElementById('file8').value == "" || document.getElementById('file8').files[0].size > 10 * 1024 * 1024) {
                        document.getElementById('file8-error').classList.add('d-block')
                    } else {
                        document.getElementById('file8-error').classList.remove('d-block')
                    }
                }

                if ($("[name='selectedCategories']:checked").length == 0) {
                    $("[name='selectedCategories']").attr('required', true);
                    failed = true;
                    document.getElementById('checkbox-error').classList.add('d-block')
                } else {
                    $("[name='selectedCategories']").attr('required', false);
                    document.getElementById('checkbox-error').classList.remove('d-block')
                }
                if ($("div.g-recaptcha").length > 0) {
                    var captchaResponse = grecaptcha.getResponse();
                    if (captchaResponse.length === 0) {
                        document.getElementById('captcha-error').classList.add('d-block');
                        failed = true;
                    } else {
                        document.getElementById('captcha-error').classList.remove('d-block')
                    }
                }
                if ($("#password").length > 0) {
                    var captchaResponse = grecaptcha.getResponse();
                    if (captchaResponse.length === 0) {
                        document.getElementById('captcha-error').classList.add('d-block');
                        failed = true;
                    } else {
                        document.getElementById('captcha-error').classList.remove('d-block')
                    }
                }

                /*const yOffset = -10;
                var errors = document.querySelectorAll(".form-control:invalid");
                const y =
                    errors[0].getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                errors[0].focus();*/
                if (!form.checkValidity()) {
                    failed = true;
                }
                if (failed == true) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                document.getElementById('country').disabled = false;
                form.classList.add("was-validated");
            },
            false
        );
    });
})();

function check() {
    let item = document.getElementById("checkbox_group");
}

$('input:required').prev().addClass('required-label');
/* Check all if 'all' is checked */

isAllChecked = 0;
var checkboxes = document.getElementsByName('selectedCategories');

document.getElementById('ggc1').onclick = function() {
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
        (this.checked) ? isAllChecked = checkboxes.length - 1: isAllChecked = 0;
    }
}

/* Uncheck 'all' if something is unchecked */
for (i = 1; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
        document.getElementById('ggc1').checked = false;
    });
}

/* check 'all' if all is checked */
for (i = 1; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function() {
        if (this.checked == true) {
            isAllChecked++;
            if (isAllChecked == (checkboxes.length - 1)) {
                document.getElementById('ggc1').checked = true;
            }
        } else {
            if (isAllChecked != 0) {
                isAllChecked--;
            }
        }
    });
}