$(function(){

    Hotkey(document.body, 'keydown', {
        'ctrl+z' : function( event ){
            $('#hotkey-' + event.data.keys.replace('+', '-')).addClass('active');
        }
    });
    
    $(document.body).on('keyup', function(){
       $('.hotkeys').removeClass('active');
    });
});
