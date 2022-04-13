
let input = process.argv.slice(2);

let timer =  function(seconds) {
  
  for (let i = 0; i < seconds; i++) {
    
    if (seconds[i] > 0) {
      let delay = seconds[i] * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    }
  }
};
timer(input);
