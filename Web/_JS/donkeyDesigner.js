var donkeyCanvas = new fabric.Canvas('donkeyCanvas', {
    backgroundColor: "#f4f4f4"
});
donkeyCanvas.setWidth(700);
donkeyCanvas.setHeight(400);


$('#addRectangleButton').click(function (e) {
    var rect = new fabric.Rect({
        width: 100, height: 100, fill: 'blue', left: 50, top: 50
    });
    donkeyCanvas.add(rect); // add object

});

$('#addCircleButton').click(function (e) {
    var circ = new fabric.Circle({
        radius: 50, fill: 'red', left: 50, top: 50
    });
    donkeyCanvas.add(circ); // add object

});


$('#removeElementButton').click(function (e) {
    if (!(donkeyCanvas.getActiveGroup() == null && donkeyCanvas.getActiveObject() == null)) {
        if (donkeyCanvas.getActiveGroup() == null) {
            donkeyCanvas.getActiveObject().remove();
        } else {
            var activeGroup = donkeyCanvas.getActiveGroup().getObjects();
            for (var i = 0; i < activeGroup.length; i++) {
                activeGroup[i].remove();
            }
            donkeyCanvas.discardActiveGroup().renderAll();

        }
    }
});

