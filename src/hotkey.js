(function($){

    var specialKeys = {
      8: "backspace",
      9: "tab",
      10: "return",
      13: "return",
      16: "shift",
      17: "ctrl",
      18: "alt",
      19: "pause",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "del",
      59: ";",
      61: "=",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",
      144: "numlock",
      145: "scroll",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    };


    function Hotkey( element, eventType, shortcut ){

        var shortcuts = {};
        $.each(shortcut, function( key, value ){
            if( typeof value == 'function' ){
                shortcuts[key] = value;
            } else if( typeof value == 'object' && value.keys != undefined ){
                typeof value.keys == 'string' && (value.keys = value.keys.split(','));
                $.each(value.keys, function(idx, key){
                    shortcuts[key] = value.callback;
                });
            }
        });

        $(element).on( eventType, function( event ){
            var keyName = Hotkey.keyHandler(event);

            if( shortcuts[keyName] == undefined ) return;

            event.data = event.data || {};
            event.data.keys = keyName;

            typeof shortcuts[keyName] == 'function' && shortcuts[keyName].apply( this, [ event ] );
        });
    };

    Hotkey.keyHandler = function( event ){
        var special = specialKeys[event.which] || '',
            character = special || String.fromCharCode(event.which).toLowerCase(),
            keyName = '';

        $.each(['alt', 'ctrl', 'shift'], function(idx, specialKey){
            if( event[specialKey + 'Key'] ){
                keyName += specialKey + '+';
            }
        });
        keyName += character;

        return keyName;
    }

    window.Hotkey = Hotkey;
}(jQuery));
