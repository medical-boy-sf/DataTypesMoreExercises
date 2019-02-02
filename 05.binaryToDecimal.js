function binaryToDecimal(binary) {
    let sum = 0;
    let power = 0;

    while(binary > 0) {
        let lastDigit = binary % 10;
        sum += lastDigit * Math.pow(2, power);
        power += 1;
        binary = Math.trunc(binary / 10);
    }

    console.log(sum);
}