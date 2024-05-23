$(document).ready(function(){
    
    $('.submit-form-event').click(function(){
        var error = [];
        $('.email-form .error-message').html("");
        $('.email-form .sent-message').hide();
        if($('.email-form input[name=name]').val()==""){
          error.push('Name is required');
        }
        if($('.email-form input[name=email]').val()==""){
          error.push('Email is required');
        }
        if($('.email-form input[name=number]').val()==""){
          error.push('Number is required');
        }
        if($('.email-form input[name=password]').val()==""){
          error.push('Password is required');
        }
        if($('.email-form input[name=subject]').val()==""){
          error.push('Subject is required');
        }
        if($('.email-form textarea[name=message]').val()==""){
          error.push('Message is required');
        }

        if(error.length > 0){
          $('.email-form .error-message').html(error.join('<br/>'));
        }else{
          $('.email-form .sent-message').show();
        }
    }); 

});