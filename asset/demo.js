$(function(){

    Hotkey(document.body, 'keypress', {
        'ctrl+z' : function( event ){
            console.log(event.data);
        }
    });
});