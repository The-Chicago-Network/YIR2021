const getNum = (min, max) => {
    return Math.floor(
      Math.random() * (max - min) + min
    );
}

const generateCircles = (canvasW, canvasH, circleSizeLow, circleSizeHigh, circleSpacing, redPercentLow, redPercentHigh, greenPercentLow, greenPercentHigh, bluePercentLow, bluePercentHigh) => {
    createCanvas(canvasW, canvasH);
    const startEndW = canvasW-circleSpacing;
    const startEndH = canvasH-circleSpacing;
    // Generate circles
    for (let i=circleSpacing; i<startEndW; i+=circleSpacing) {
        for (let j=circleSpacing; j<startEndH; j+=circleSpacing) {
            let size = getNum(circleSizeLow,circleSizeHigh);
            let c = color(
                getNum(redPercentLow,redPercentHigh), 
                getNum(greenPercentLow,greenPercentHigh), 
                getNum(bluePercentLow,bluePercentHigh)
            );
            fill(c);
            noStroke();
            ellipse(i, j, size, size);
        }
    }
}

function setup() {
    // Get viewport dimensions (https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions)
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    colorMode(RGB,100);
    generateCircles(vw, vh, 5, 60, 60, 10, 80, 50, 275, 50, 100);
}

function draw() {

}
  