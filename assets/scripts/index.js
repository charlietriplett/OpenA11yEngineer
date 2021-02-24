// Allow :active styles to work in your CSS on a page in Mobile Safari:
document.addEventListener("touchstart", function(){}, true);


// Expander toggle
$( ".expander-toggle" ).click(function() {
    if( $(this).attr('aria-expanded') == 'false' ) {
        $(this).attr('aria-expanded', 'true').next(".expander-content" ).addClass('visible').attr('aria-hidden', 'false');
    } else if( $(this).attr('aria-expanded') == 'true' ) {
        $(this).attr('aria-expanded', 'false').next(".expander-content" ).removeClass('visible').attr('aria-hidden', 'true');
    }
});


// Trigger alert
$("#show-alert").click(function() {
    console.log('TEST');
    $('[role="alert"]').toggleClass('visible')
});



$("#show-password").on('change', function() {
    if($(this).is(":checked")) {
        $('#password').attr('type', 'text')
    } else if($(this).is(":not(:checked)")) {
        $('#password').attr('type', 'password')
    }
});


// Dialog support
var isDialogSupported = true;
if (!window.HTMLDialogElement) {
    document.body.classList.add("no-dialog");
    isDialogSupported = false;
}

showModal.onclick = () => {
    if (isDialogSupported) {
        modal.showModal();
    } else {
        modal.setAttribute("open", "");
        $('#pageContainer').css('display','none');
    }
    //   Focus first input when dialog opens
    modal.focus();
};

closeModal.onclick = () => {
    if (isDialogSupported) {
        modal.close();
    } else {
        modal.removeAttribute("open", "");
        $('#pageContainer').css('display','block');
    }
    setTimeout(function(){
        showModal.focus();
    }, 25);
};

$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        if (isDialogSupported) {
            modal.close();
        } else {
            modal.removeAttribute("open", "");
            $('#pageContainer').css('display','block');
        }
        setTimeout(function(){
            showModal.focus();
        }, 25);
    }
});

