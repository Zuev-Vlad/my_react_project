document.addEventListener("DOMContentLoaded", () => {
    console.log('test')

    var c = document.getElementById('canvas');
    var context = c.getContext("2d");
    var centerx = context.canvas.width / 2;
    var centery = context.canvas.height / 2;

    let btn = document.getElementById('#draw')

    context.clearRect(0, 0, 300, 300);

    context.moveTo(centerx, centery);
    context.beginPath();
    for (i = 0; i < 720; i++) {
        angle = 0.1 * i;
        x = centerx + (a + b * angle) * Math.cos(angle);
        y = centery + (a + b * angle) * Math.sin(angle);

        context.lineTo(x, y);
    }
    context.strokeStyle = "#000";
    context.stroke();

});