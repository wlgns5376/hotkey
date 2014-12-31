hotkey
======
readme

include :

```html
<script src="./vender/jquery-1.10.2.min.js"></script>
<script src="./src/hotkey.js"></script>
```

example :

```javascript
Hotkey(document.body, 'keydown', {
    'ctrl+z' : function( event ){
        console.log( event.data );  
    }
});
```
    
