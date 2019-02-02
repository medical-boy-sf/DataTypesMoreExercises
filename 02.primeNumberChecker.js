function primeNumberChecker(number) {
    number = Number(number);
    let isPrime = "true";
    for (let i = 2; i <= Math.trunc(Math.sqrt(number)); i += 1) {
        if (number % i === 0) {
            isPrime = "false";
            break;
        }
    }

    console.log(isPrime);
}