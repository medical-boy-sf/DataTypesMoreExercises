function triangleArea(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let s = (a + b + c) / 2;
    let area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));
    console.log(area);
}