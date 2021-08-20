function count() {
    let a = +document.getElementById("1").value;
    let b = +document.getElementById("2").value;
    let c = document.getElementById("3").value;
    let d = document.getElementById("4");
    if (c == '+') {
        d.value = (a + b);
    }
    if (c == '-') {
        d.value = (a - b);
    }
    if (c == '*') {
        d.value = (a * b);
    }
    if (c == '/') {
        d.value = (a / b);
    }
}


