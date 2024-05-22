window.initializeQuagga = function(){
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-container'),
            constraints: {
                width: {ideal: 1280},
                height: {ideal: 720},
                facingMode: "environment",
            },
        },
        decoder: {
            readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader'],
            debug: {
                drawBoundingBox: true,
                showFrequency: true,
                drawScanline: true,
                showPattern: true,
            },
        },
        locate: true
    }, function (err) {
        if (err) {
            console.error('Quagga initialization failed:', err);
            return;
        }
        console.log("Quagga initialization succeeded");
        Quagga.start();
    });

    Quagga.onDetected(function (result) {
        console.log("Barcode detected:", result.codeResult.code);
        // alert("Barcode detected: " + result.codeResult.code);
        Livewire.dispatch('barcodeScanned', {code: result.codeResult.code})
        document.getElementById('code').value = result.codeResult.code;
        document.getElementById('scanner-container').style.display = 'none';
        Quagga.stop(); // Stop scanning after a barcode is detected
    });
    // Quagga.onProcessed(function (result) {
    //     var drawingCtx = Quagga.canvas.ctx.overlay,
    //         drawingCanvas = Quagga.canvas.dom.overlay;
    //
    //     if (result) {
    //         if (result.boxes) {
    //             drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
    //             result.boxes.filter(function (box) {
    //                 return box !== result.box;
    //             }).forEach(function (box) {
    //                 Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
    //             });
    //         }
    //
    //         if (result.box) {
    //             Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
    //         }
    //
    //         if (result.codeResult && result.codeResult.code) {
    //             Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
    //         }
    //     }
    // });
};
