
function fillZero (value, width) {
    let output = String (value);
    while (output.length < width) {
      output = '0' + output;
    }
    return output;
  };

  let myOutput = fillZero (21, 3);
  console.log (myOutput);
  
  function output (cows, width) {
      console.log (`${fillZero (cows, width)} - коров`);
  };

  output (3, 4);