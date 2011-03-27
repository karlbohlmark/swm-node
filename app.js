(function init(){
    pos = 0;
    boxWidth = 900;

    var move = function(op){
        var transform = 'translate({0}px, 0px)'.replace('{0}', pos = op(pos, boxWidth));
        console.log(transform);
        document.getElementById('container').style['-webkit-transform'] = transform;
    }

    document.addEventListener('keydown', function(e){
       switch(e.keyCode){
            case 39:
                move(function(pos, width){ return pos -width});
            break;
            case 37:
                move(function(pos, width){return pos + width});
       }
    });
}());