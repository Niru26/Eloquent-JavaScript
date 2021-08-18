let string = '#';
for (let i = 0; i < 7; i++) {
    console.log(string);
    string += '#'
}

/*
for (let string = '#'; string.length < 7; string += '#') {
    console.log (string);
}; */

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
};

/* for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
        output += 'Fizz';
    }
    if (i % 5 === 0) {
        output += 'Buzz'
    }
    console.log (output || i);
}; */

let lineOdd = '';
let lineEven = '';
let chessBoard = '';
let size = 8;


for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) {
        lineOdd += '  ';
    }
    if (i % 2 === 0) {
        lineOdd += '#';
    }
}

console.log(`odd line - ${lineOdd}`);

for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) {
        lineEven += '#';
    }
    if (i % 2 === 0) {
        lineEven += '  ';
    }
}

console.log(`even line - ${lineEven}`);

for (let i = 1; i <= size; i++) {
    if (i === 1 || i % 2 !== 0) {
        chessBoard += lineOdd + '\n';
    }
    if (i % 2 === 0) {
        chessBoard += lineEven + '\n';
    }

}; 

/* for (let row = 0; row < size; row++ ) {
    for (let column = 0;  column < size; column++) {
        if ((row + column) % 2 === 0) {
            chessBoard += '  ';
        }
        else {
            chessBoard += '#';
        }
    }
    chessBoard += '\n';
} */

console.log(chessBoard);

const square = function (x) {
    return x * x;
}

let temp = square (12);
console.log (temp);
console.log (square (12));