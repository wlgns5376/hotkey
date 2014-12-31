$(function(){

    Hotkey(document.body, 'keydown', {
        'ctrl+z' : function( event ){
            console.log(event.data);
        }
    });
});