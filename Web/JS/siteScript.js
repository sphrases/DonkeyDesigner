/**
 * Created by sphra on 22.07.2017.
 */

function fancyMode() {
    var granim = new Granim({
        element: '#granimInstance',
        name: 'basic-gradient',
        direction: 'left-right',
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#42c4c7', '#ff465b'],
                    ['#ffb646', '#68c74e'],
                    ['#54ffee', '#68c74e']
                ]
            }
        }
    });
}

//load all images
// Image factory
var createImage = function(src, title) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.class = 'preloadImage';
    img.style.width = "120px";
    img.style.height = "auto";
    img.style.margin = "10px";

    img.onclick = function() {
        addImageElement(img);
        $('#elementSettingsDiv').empty();

    };
    return img;
};

// array of images
var images = [];

// push two images to the array
images.push(createImage("../RES/ZebraDesignerImages/BEAB.BMP", "BEAB"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLC.bmp", "SYMKLC"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLC.bmp", "SYMBOLC"));
images.push(createImage("../RES/ZebraDesignerImages/EURO.BMP", "EURO"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLXN.bmp", "SYMKLXN"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLE.bmp", "SYMKLE"));
images.push(createImage("../RES/ZebraDesignerImages/RECTANGL.BMP", "RECTANGL"));
images.push(createImage("../RES/ZebraDesignerImages/ETL.BMP", "ETL"));
images.push(createImage("../RES/ZebraDesignerImages/UL.BMP", "UL"));
images.push(createImage("../RES/ZebraDesignerImages/CORROSIV.BMP", "CORROSIV"));
images.push(createImage("../RES/ZebraDesignerImages/HAZARD.BMP", "HAZARD"));
images.push(createImage("../RES/ZebraDesignerImages/TOXIC.BMP", "TOXIC"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLT.bmp", "SYMKLT"));
images.push(createImage("../RES/ZebraDesignerImages/EARTH.BMP", "EARTH"));
images.push(createImage("../RES/ZebraDesignerImages/CE.BMP", "CE"));
images.push(createImage("../RES/ZebraDesignerImages/REG_TM.BMP", "REG_TM"));
images.push(createImage("../RES/ZebraDesignerImages/LEGS.BMP", "LEGS"));
images.push(createImage("../RES/ZebraDesignerImages/F_CIRC.BMP", "F_CIRC"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLFP.bmp", "SYMBOLFP"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLO.bmp", "SYMBOLO"));
images.push(createImage("../RES/ZebraDesignerImages/D.BMP", "D"));
images.push(createImage("../RES/ZebraDesignerImages/COPY_RGT.BMP", "COPY_RGT"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLFP.bmp", "SYMKLFP"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLN.bmp", "SYMBOLN"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLE.bmp", "SYMBOLE"));
images.push(createImage("../RES/ZebraDesignerImages/FRAGILE.BMP", "FRAGILE"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLN.bmp", "SYMKLN"));
images.push(createImage("../RES/ZebraDesignerImages/FLAMMABL.BMP", "FLAMMABL"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLO.bmp", "SYMKLO"));
images.push(createImage("../RES/ZebraDesignerImages/CIRCLE.BMP", "CIRCLE"));
images.push(createImage("../RES/ZebraDesignerImages/EXPLOSIV.BMP", "EXPLOSIV"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLF.bmp", "SYMBOLF"));
images.push(createImage("../RES/ZebraDesignerImages/UMBRELLA.BMP", "UMBRELLA"));
images.push(createImage("../RES/ZebraDesignerImages/N.BMP", "N"));
images.push(createImage("../RES/ZebraDesignerImages/WARNING.BMP", "WARNING"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLTP.bmp", "SYMBOLTP"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLF.bmp", "SYMKLF"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLT.bmp", "SYMBOLT"));
images.push(createImage("../RES/ZebraDesignerImages/CSA.BMP", "CSA"));
images.push(createImage("../RES/ZebraDesignerImages/TUV.BMP", "TUV"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLXI.bmp", "SYMKLXI"));
images.push(createImage("../RES/ZebraDesignerImages/FLAME.BMP", "FLAME"));
images.push(createImage("../RES/ZebraDesignerImages/S.BMP", "S"));
images.push(createImage("../RES/ZebraDesignerImages/SYMKLTP.bmp", "SYMKLTP"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLXI.bmp", "SYMBOLXI"));
images.push(createImage("../RES/ZebraDesignerImages/K.BMP", "K"));
images.push(createImage("../RES/ZebraDesignerImages/OXIDIZE.BMP", "OXIDIZE"));
images.push(createImage("../RES/ZebraDesignerImages/SYMBOLXN.bmp", "SYMBOLXN"));
images.push(createImage("../RES/ZebraDesignerImages/S_PLUS.BMP", "S_PLUS"));
images.push(createImage("../RES/ZebraDesignerImages/SHOCK.BMP", "SHOCK"));
images.push(createImage("../RES/ZebraDesignerImages/BS_KITE.BMP", "BS_KITE"));
images.push(createImage("../RES/ZebraDesignerImages/FI.BMP", "FI"));
images.push(createImage("../RES/ZebraDesignerImages/DRIP.BMP", "DRIP"));

// output
function getImageByName(name) {
    for(var i = 0; i < images.length; i++) {
        if(images[i].title == name) {
            return images[i];
        }
    }
    return null;
}