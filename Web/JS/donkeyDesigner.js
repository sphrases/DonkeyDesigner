var donkeyCanvas = new fabric.Canvas('donkeyCanvas', {
    backgroundColor: "#f4f4f4"
});
donkeyCanvas.setWidth(700);
donkeyCanvas.setHeight(400);

donkeyCanvas.on('mouse:down', function (param) {
    var object = param.target;
    if (object != null) {
        switch (object.get('type')) {
            case('circle'):
                //showCircleControls();
                break;
            case('rect'):
                break;
            case('triangle'):
                break;
            case('image'):
                break;
            case('i-text'):
                break;
            case('text'):
                break;
            case('textbox'):
                showTextControls(object);
                $('#elementSettingsDiv').visibility = true;
                elemendAdded = true;
                break;
            default:

                break;
        }
    } else {
        $('#elementSettingsDiv').empty();
        $('#elementSettingsDiv').visibility = false;
        elemendAdded = false;
    }

});

var globalParams = {
    borderColor: '#42c4c7',
    cornerColor: '#42c4c7',
    cornerSize: 8,
    transparentCorners: false,
    hasRotatingPoint: false
}
var elemendAdded = false;
var dummyText = "This is a placeholder text, to see how your text-field looks";



//Buttons
$('#addRectangleButton').click(function (e) {
    var rect = new fabric.Rect({
        width: 100, height: 100, fill: getRandomColor(), left: 50, top: 50
    });
    rect.set(globalParams);
    donkeyCanvas.add(rect); // add object

});


$('#addCircleButton').click(function (e) {
    var circ = new fabric.Circle({
        radius: 50, fill: getRandomColor(), left: 50, top: 50
    });
    circ.set(globalParams);
    donkeyCanvas.add(circ); // add object

});


$('#addTextButton').click(function (e) {
    var textBox = new fabric.Textbox(dummyText, {
        fontFamily: 'arial',
        fontSize: 27,
        fill: getRandomColor(),
        left: 40,
        top: 40,
    });
    textBox.set(globalParams);
    donkeyCanvas.add(textBox);
});


$('#exportButton').click(function (e) {
    exportToFile();
});

$('#addImageButton').click(function (e) {

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





//Other Functions
function exportToFile() {
    donkeyCanvas._activeObject = null;
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

        var date = new Date();
        var dateTime = (date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1 ) + "-" + date.getUTCDate() + "--" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds());


        var exportArray = [["# " + dateTime + " Export"]];


        for (var i = 0; i < allObjects.length; i++) {
            exportArray.push(getShapeType(allObjects[i]));
        }
        //exportArray done
        console.log(exportArray);
        //now to txt file

        var csvContent = "data:text/plain;charset=utf-8,";
        exportArray.forEach(function (infoArray, index) {
            var dataString = infoArray.join(",");
            csvContent += index < exportArray.length ? dataString + "\n" : dataString;

        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");

        link.setAttribute("href", encodedUri);
        link.setAttribute("download", dateTime + "-export.txt");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".

    }
}

function showTextControls(object) {
    if (!elemendAdded) {
        var div = document.createElement("div");
        div.style.width = "500px";
        div.style.color = "white";
        div.style.margin = "10px auto"

        var button = document.createElement("button");
        button.class = "donkeyButtons";


        div.innerHTML = "<button class='controlButtons'  onclick='increaseTextSize()'>" +
            " + </button>" +
            "<span>text size</span>" +
            "<button class='controlButtons'  onclick='decreaseTextSize()'>" +
            " - </button>";
        document.getElementById('elementSettingsDiv').appendChild(div);
    }
}

function increaseTextSize() {
    var object = donkeyCanvas.getActiveObject();
    var fontSize = object.get('fontSize');
    fontSize += 1;
    object.set('fontSize', fontSize);
    donkeyCanvas.renderAll();
}

function decreaseTextSize(object) {
    var object = donkeyCanvas.getActiveObject();
    var fontSize = object.get('fontSize');
    fontSize -= 1;
    object.set('fontSize', fontSize);
    donkeyCanvas.renderAll();
}


//Get Value functions
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
        case('i-text'):
            objectArray = ['i-text', Math.floor(object.left), Math.floor(object.top), Math.floor(object.width), Math.floor(object.height), object.fontSize, object.text];
            break;
        case('text'):
            objectArray = ['text', Math.floor(object.left), Math.floor(object.top), Math.floor(object.width), Math.floor(object.height), object.fontSize, object.text];
            break;
        case('textbox'):
            objectArray = ['textbox', Math.floor(object.left), Math.floor(object.top), Math.floor(object.width), Math.floor(object.height), object.fontSize, object.text];
            break;
        default:

            break;
    }
    return objectArray;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

