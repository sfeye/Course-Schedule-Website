// File: /public/javascript/form.js

$( function() {
    var $usrInput = $('#usr');
    var $pwdInput = $('#pwd');
    var $enterButton = $('#enter');
    var $errorSpan = $('#error-span');
    var $loginHeading = $('#login');

    function validateUsr() {
        if ($usrInput.val() === '') {
            $errorSpan.attr('class', 'error');
            $errorSpan.html('*please enter a username');
            $usrInput.focus();

        } else {
            $errorSpan.attr('class', 'no-error');
            $errorSpan.html('*');
        }
    }

    function validatePwd() {
        if ($pwdInput.val() === '') {
            $errorSpan.attr('class', 'error');
            $errorSpan.html('*please enter a password');
            $pwdInput.focus();

        } else {
            $errorSpan.attr('class', 'no-error');
            $errorSpan.html('*');
        }
    }

    function getEnter(e) {
        e.preventDefault();

        var qs = { usr: $usrInput.val(), pwd: $pwdInput.val() };
   
        $.get('/enter', qs, function(response, status) {
            if (response.error) 
            { 
                $loginHeading.html(response.error); 
            }
            else                
            { 
                $loginHeading.html(response.enter); 
                location.href = "http://localhost:3000/api";
            }
        }, 'json');
    }

    // Register the events.
    $usrInput.on('blur', validateUsr);
    $pwdInput.on('blur', validatePwd);
    $enterButton.on('click', getEnter);

    $usrInput.focus();
});