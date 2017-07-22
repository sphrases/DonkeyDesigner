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
                    ['#ffb646', '#68c74e']

                ]
            }
        }
    });
}