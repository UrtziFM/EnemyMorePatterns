/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvasWidth = canvas.width = 500;
canvasHeight = canvas.height = 700;

enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
}