hotkey
======
readme

include :
```html
<script src="./jquery-1.10.2.min.js"></script>
<script src="./hotkey.js"></script>
```


```javascript
Hotkey(document.body, 'keyup', {
    'left' : function( event ){
        console.log( event.data );  
    }
});
```
    
