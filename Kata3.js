let size = 8;
let block = '#';
let space = ' ';

function chessBoard(size) {
  for (let x = 0; x < size; x++) {
    let drawLine = '';
    for (let y = 0; y < size; y++) {
      drawLine += (x + y) % 2 === 0 ? block : space;
    }
    console.log(drawLine);
  }
}

chessBoard(size);