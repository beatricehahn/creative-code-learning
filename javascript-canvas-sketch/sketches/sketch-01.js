const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
  // Dimensions can fit an A4 paper size by passing the string "A4"
  // and pixelsPerInch: 300, orientation: 'landscape'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    let x, y;

    const off = width * 0.02;

    // Create 5 x 5 array of squares containing squares
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){
            x =  ix + (w + gap)*i;
            y = iy + (h + gap) * j;
            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();
            
            if (Math.random() > 0.5){
                context.beginPath();
                context.rect(x + off/2, y + off/2, w- off, h - off);
                context.stroke();
            }

        }  
    }
  };
};

canvasSketch(sketch, settings);
