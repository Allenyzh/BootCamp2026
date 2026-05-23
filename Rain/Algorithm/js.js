function printPascaleTriangle(n) {


    for (let i = 0; i < n; i++) {

        let row = [1];
        let value = 1;
       
        for (let j = 1; j <= i; j++) {
            value = value * (i - j + 1) / j;
            row.push(value);
        }

        let spaces = ' '.repeat(n - i - 1);
        console.log(spaces + row.join(' '));
  
    }
}
printPascaleTriangle(5);

