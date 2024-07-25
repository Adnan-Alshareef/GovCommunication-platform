(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        	var failed = false;
        	if($("div.g-recaptcha").length > 0) {
        		var captchaResponse = grecaptcha.getResponse();
            	if(captchaResponse.length === 0){
            		document.getElementById('captcha-error').classList.add('d-block');
            		failed = true;
            	}else {
                    document.getElementById('captcha-error').classList.remove('d-block')
                }
        	}
        	
          if (!form.checkValidity() || failed) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
