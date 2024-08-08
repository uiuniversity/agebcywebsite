jQuery(document).ready(function($){
    $(document).on('click', '.details', function(){
        $('.details').removeClass('active');
        $(this).addClass('active');
    })
})