function myFunction() {
  var x = document.getElementById("demo");
  x.style.fontSize = "25px"; 
  x.style.color = "red"; 
}

function pointy_hex_corner(center, size, i) {
    var angle_deg = 60 * i - 30;
    var angle_rad = Math.PI / 180 * angle_deg;
    var Point = {
        x : center.x + size * Math.cos(angle_rad),
        y : center.y + size * Math.sin(angle_rad)
    };
    return Point;
}

function collect_hex_vertexes(center, size) {
    var hex_vertexes = [];
    var i;
    for (i = 0; i < 6; i++) {
        var vertex = pointy_hex_corner(center, size, i);
        hex_vertexes.push(vertex);
    }
    return hex_vertexes;
}

function draw_hex(center, size) {
    var hex_vertexes = collect_hex_vertexes(center, size);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(hex_vertexes[0].x, hex_vertexes[0].y);
    var i;
    for (i = 1; i < 6; i++) {
        ctx.lineTo(hex_vertexes[i].x, hex_vertexes[i].y);
    }
    ctx.lineTo(hex_vertexes[0].x, hex_vertexes[0].y);
    ctx.stroke();
}

function draw_row(center_start, )

function main() {
    // alert('main');
    var center = {
        x : 100,
        y : 100
    }
    var size = 30;
    draw_hex(center, size);
}
