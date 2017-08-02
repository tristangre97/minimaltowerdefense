function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'tower_defense', 'MTDScreenshot.png');
}, false);