var donkeyCanvas = new fabric.Canvas('donkeyCanvas', {});
donkeyCanvas.setWidth(1000);
donkeyCanvas.setHeight(400);


$('#addRectangleButton').click(function (e) {
    var rect = new fabric.Rect({
        width: 200, height: 200, fill: 'blue', left: 50, top: 50
    });
    donkeyCanvas.add(rect); // add object

});

$('#addCircleButton').click(function (e) {
    var circ = new fabric.Circle({
        radius: 100, fill: 'red', left: 50, top: 50
    });
    donkeyCanvas.add(circ); // add object

});


$('#removeElementButton').click(function (e) {
    if (donkeyCanvas.getActiveGroup() == null) {
        donkeyCanvas.getActiveObject().remove();
    } else {
        var activeGroup = donkeyCanvas.getActiveGroup().getObjects();
        for (var i = 0; i < activeGroup.length; i++) {
            activeGroup[i].remove();
        }
        donkeyCanvas.discardActiveGroup().renderAll();

    }
});

