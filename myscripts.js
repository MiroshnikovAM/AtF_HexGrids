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

function draw_row(center_start, size, row_lenght) {
    var center = {
        x : center_start.x,
        y : center_start.y
    }
    var i;
    for (i = 0; i < row_lenght; i++) {
        draw_hex(center, size);
        center.x += size * Math.sqrt(3);
    }
}

function draw_grid(center_start, size, row_length, row_quantity) {
    var center = {
        x : center_start.x,
        y : center_start.y
    }
    var hex_width = Math.sqrt(3) * size;
    var hex_height = 2 * size;
    for (i = 0; i < row_quantity; i++) {
        draw_row(center, size, row_length);
        center.y += (hex_height * 3/4);
        if (!(i & 1)) {
            center.x += (hex_width / 2);
        } else {
            center.x = center_start.x;
        }
    }    
}

function main() {
    // alert('main');
    var center = {
        x : 100,
        y : 100
    }
    var size = 30;
    var row_lenght = 5;
    var row_quantity = 5;
    draw_grid(center, size, row_lenght, row_quantity);
}
