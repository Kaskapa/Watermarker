var container = document.getElementById('real-img');
var movableTextDiv = document.getElementById('watermark-text-container');
var isDown = false;
var offset = [0, 0];

movableTextDiv.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        movableTextDiv.offsetLeft - e.clientX,
        movableTextDiv.offsetTop - e.clientY
    ];
}, true);

movableTextDiv.addEventListener('mouseup', function() {
    isDown = false;
}, true);

movableTextDiv.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        var mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        var offsetX = mousePosition.x + offset[0];
        var offsetY = mousePosition.y + offset[1];
        if (offsetX < container.offsetLeft) offsetX = container.offsetLeft;
        if (offsetY < container.offsetTop) offsetY = container.offsetTop;
        if (offsetX > container.offsetLeft + container.offsetWidth - movableTextDiv.offsetWidth) offsetX = container.offsetLeft + container.offsetWidth - movableTextDiv.offsetWidth;
        if (offsetY > container.offsetTop + container.offsetHeight - movableTextDiv.offsetHeight) offsetY = container.offsetTop + container.offsetHeight - movableTextDiv.offsetHeight;

        movableTextDiv.style.left = offsetX + 'px';
        movableTextDiv.style.top  = offsetY + 'px';
    }
}, true);

var movableImageDiv = document.getElementById('watermark-image-container');
var isDown = false;
var offset = [0, 0];

movableImageDiv.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        movableImageDiv.offsetLeft - e.clientX,
        movableImageDiv.offsetTop - e.clientY
    ];
}, true);

movableImageDiv.addEventListener('mouseup', function() {
    isDown = false;
}, true);

movableImageDiv.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        var mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        var offsetX = mousePosition.x + offset[0];
        var offsetY = mousePosition.y + offset[1];
        if (offsetX < container.offsetLeft) offsetX = container.offsetLeft;
        if (offsetY < container.offsetTop) offsetY = container.offsetTop;
        if (offsetX > container.offsetLeft + container.offsetWidth - movableImageDiv.offsetWidth) offsetX = container.offsetLeft + container.offsetWidth - movableImageDiv.offsetWidth;
        if (offsetY > container.offsetTop + container.offsetHeight - movableImageDiv.offsetHeight) offsetY = container.offsetTop + container.offsetHeight - movableImageDiv.offsetHeight;

        movableImageDiv.style.left = offsetX + 'px';
        movableImageDiv.style.top  = offsetY + 'px';
    }
}, true);