function chessBoard(n) {
    n = Number(n);
    let message = `<div class="chessboard">\n`;
    for (let i = 0; i < n; i++) {
        message += `  <div>\n`;
        if (i % 2 === 0) {
            for (let j = 0; j < n; j++) {
                if (j % 2 === 0) {
                    message += `    <span class="black"></span>\n`;
                } else {
                    message += `    <span class="white"></span>\n`;
                }
            }
        } else {
            for (let j = 0; j < n; j++) {
                if (j % 2 === 0) {
                    message += `    <span class="white"></span>\n`;
                } else {
                    message += `    <span class="black"></span>\n`;
                }
            }
        }
        message += `  </div>\n`;
    }
    message += "</div>";
    console.log(message);
}