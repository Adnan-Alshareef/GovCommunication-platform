function setClass(target){
    if(target == 1){
        let x = document.getElementsByClassName('investor-btn')[target]
        x.classList.add("investor-btn-active")
        let y =  document.getElementsByClassName('investor-btn')[target-1]
        y.classList.remove("investor-btn-active")
    }

    if(target == 0){
        let x = document.getElementsByClassName('investor-btn')[target]
        x.classList.add("investor-btn-active")
        let y =  document.getElementsByClassName('investor-btn')[target+1]
        y.classList.remove("investor-btn-active")
    }
    let id ;
    $(".investor-btn-active").each(function(){
        id = $(this).attr('id');
     });
     if(id === 'foreign'){
        var elms = document.querySelectorAll("[id='saudi-field']");
        for(var i = 0; i < elms.length; i++) 
          {
              elms[i].classList.add('d-none')
          }
          elms = document.querySelectorAll("[id='foreign-field']");
          for(var i = 0; i < elms.length; i++) 
          {
              elms[i].classList.remove('d-none')
          }
          elms = document.querySelectorAll("[id='enlarge-field']");
          for(var i = 0; i < elms.length; i++) 
          {
              elms[i].classList.remove('col-md-4')
              elms[i].classList.add('col-md-6')
          }
          document.getElementById("reg_certificate_no").required=false
          document.getElementById('country').value = ''
     }else if(id === 'saudi'){
        var elms = document.querySelectorAll("[id='saudi-field']");
        for(var i = 0; i < elms.length; i++) 
        {
            elms[i].classList.remove('d-none')
        }
        elms = document.querySelectorAll("[id='foreign-field']");
        for(var i = 0; i < elms.length; i++) 
        {
            elms[i].classList.add('d-none')
        }
        elms = document.querySelectorAll("[id='enlarge-field']");
        for(var i = 0; i < elms.length; i++) 
        {
            elms[i].classList.remove('col-md-6')
            elms[i].classList.add('col-md-4')
        }
        document.getElementById("reg_certificate_no").required=true
        document.getElementById('country').value = document.getElementById('Saudi Arabia').value
     }
  
}
$(document).ready(function() {
    var elms = document.querySelectorAll("[id='foreign-field']");
    for (var i = 0; i < elms.length; i++) {
        elms[i].classList.add('d-none')
    }
});