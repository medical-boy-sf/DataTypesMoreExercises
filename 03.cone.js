function cone(r, h) {
    r = Number(r);
    h = Number(h);
    let l = Math.sqrt((Math.pow(r, 2) + Math.pow(h, 2)));
    let volume = (Math.PI * r * r * h) / 3;
    let totalArea = Math.PI * r * l + Math.PI * r * r;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}