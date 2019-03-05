export default function (s,d) {
    s.props = {};
    s.customLoadImage = {};
    s.onSetAppState = () => {}
    s.img = null;
    s.url = '';
    s.isLoaded = false;
    s.isResized = false;
    let isDecimated = false;
    let decimateFactor = 20;
    const maxDecimate = 100;
    var pg = null;
    s.timer = 2;
    s.lastFrame = 0;
    s.setup = function() {
        s.createCanvas(s.windowWidth, s.windowHeight)
        s.disableFriendlyErrors = true;
        s.createGraphics(s.windowWidth, s.windowHeight);
        // console.log('::: displayDensity:', s.displayDensity())
        // console.log('::: pixelDensity:', s.pixelDensity())
    }

    s.closeSketch = function() {
        s.isLoaded = false;
        s.isDecimated = false;
    }


    s.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.url && !s.isLoaded) {
          s.img = s.loadImage(props.url, () => {
            s.isLoaded = true;
            s.isResized = false;
          }, () => { s.img = s.loadImage(props.url)
          });  // Load the image

          s.url = props.url
          s.customLoadImage = props.customLoadImage;
        }
        if (props.clicked) {
          s.isLoaded = false
        }
    }

    s.decimate = function() {
      for (let x = 0; x < s.width; x=x+decimateFactor) {
        for (let y = 0; y < s.height; y=y+decimateFactor ) {
            const newColor = s.img.get(x,y);
            s.fill(newColor);
            s.noStroke();
             s.rect(x, y, decimateFactor, decimateFactor);
        }
      }
     // img.updatePixels();
    }

    s.imageResize = function () {
      if (s.isLoaded && !s.isResized) {

      }
    }

    s.windowResized = function () {

    //  s.img.resize(s.windowWidth, s.windowHeight);
    }

    s.draw = function() {
      debugger;
      var millis = s.timestamp;

      if(s.frameCount % 1 == 0) {
        s.clear();
      }
      s.fill(255,0,0);
      s.rect(s.mouseX,s.mouseY,150,150);
      // pg.clear();
      if(s.mouseIsPressed){
        debugger
        s.clear();
      }
      // s.rect(s.mouseX,s.mouseY,50,50);
//
      //s.clear();
    }
}
