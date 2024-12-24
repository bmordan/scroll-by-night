let { innerWidth: width, innerHeight: height } = window;

$(window).on('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
});

gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    EaselPlugin,
    PixiPlugin,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase);

const controller = new ScrollMagic.Controller();
const sky = document.getElementById("#sky");

const theSkyScene = new ScrollMagic.Scene({
    triggerElement: sky,
    triggerHook: 0,
    offset: () => {
        
        return window.innerHeight + window.innerHeight - 200;
    },
    duration: "100%",
    reverse: true
});

// const theLandScene = new ScrollMagic.Scene({
//     triggerElement: "#screen-block-horizon",
//     triggerHook: 0.8,
//     reverse: true
// });

theSkyScene
    .setPin("#sky")
    .addTo(controller)
    .addIndicators({
        colorTrigger: "lime",
        name: "#sky",
    })

// theLandScene
//     .setPin("#screen-block-horizon")
//     .addTo(controller)
//     .addIndicators({
//         name: "#screen-block-horizon"
//     });