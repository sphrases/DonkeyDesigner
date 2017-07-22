var donkeyCanvas = new fabric.Canvas('donkeyCanvas', {
    backgroundColor: "#f4f4f4"
});
donkeyCanvas.setWidth(700);
donkeyCanvas.setHeight(400);


$('#dummyButton1').click(function (e) {
    console.log(donkeyCanvas.getActiveObject().get('type'));
});

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


$('#exportButton').click(function (e) {
    exportToFile();
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


function exportToFile() {
    if (donkeyCanvas.getObjects().length != 0) {
        donkeyCanvas._activeObject = null;
        var objs = donkeyCanvas.getObjects().map(function (o) {
            return o.set('active', true);
        });


        var group = new fabric.Group(objs, {
            originX: 'center',
            originY: 'center'
        });

        donkeyCanvas._activeObject = null;
        donkeyCanvas.setActiveGroup(group.setCoords()).renderAll();
        var allObjects = donkeyCanvas.getActiveGroup().getObjects();

        var exportArray = [["__--This is a test Export--__"]];


        for (var i = 0; i < allObjects.length; i++) {
            exportArray.push(getShapeType(allObjects[i]));
        }
        //exportArray done
        console.log(exportArray);
        //now to txt file

        var csvContent = "data:text/plain;charset=utf-8,";
        exportArray.forEach(function(infoArray, index){
            var dataString = infoArray.join(",");
            csvContent += index < exportArray.length ? dataString+ "\n" : dataString;

        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "export .txt");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".

    }
}


function getShapeType(object) {
    var objectArray = [];
    switch (object.get('type')) {
        case('circle'):
            objectArray = ['circle', Math.floor(object.left), Math.floor(object.top), object.radius];
            break;
        case('rect'):
            objectArray = ['rect', Math.floor(object.left), Math.floor(object.top), object.width, object.height];
            break;
        case('triangle'):
            objectArray = ['triangle', Math.floor(object.left), Math.floor(object.top)];
            break;
        case('image'):
            objectArray = ['image', Math.floor(object.left), Math.floor(object.top)];
            break;
        default:

            break;
    }
    return objectArray;
}
