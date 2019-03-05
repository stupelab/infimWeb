export default function (s) {
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

    s.setup = function() {
        s.createCanvas(s.windowWidth, s.windowHeight)
        s.disableFriendlyErrors = true;
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
        s.img.loadPixels();
          s.img.resize(s.windowWidth, s.windowHeight);
        s.isResized = true;
      }
    }

    s.windowResized = function () {

      s.img.resize(s.windowWidth, s.windowHeight);
    }

    s.draw = function() {
        if (s.frameCount % 60 === 1) {
          //  s.onSetAppState({ frameRate: s.frameRate().toFixed(1) })
        }
        s.imageResize();
        //Miramos que tengamos imagen cargada y este hecho el resize
        if(s.img && (s.img.width === s.windowWidth)) {

          if (s.mouseX > 0 && s.mouseX < s.width && s.mouseY > 0 && s.mouseY < s.height) {
            decimateFactor = decimateFactor - 4 ;
            if(decimateFactor > maxDecimate / 2) {
              //const dF = s.constrain(s.int(decimateFactor), s.wi, maxDecimate);
              s.decimate();
            }else {
              s.image(s.img, 0, 0, s.width, s.height );
            }
            isDecimated = false;
          }else if(!isDecimated){
              decimateFactor = maxDecimate;
              s.background(0);
              isDecimated = true;
              s.decimate()
          }
        }
    }
}
