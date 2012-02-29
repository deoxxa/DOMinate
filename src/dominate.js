// DOMinate by Adrian Sieber

function DOMinate(a, b, c) {

    function d(a, b) {
        b = document.createElement(a.split("#")[0]);
        b.id = a.split("#")[1] || null;
        return b
    }

    if ("" + a[0] === a[0]) a[0] = d(a[0]);

    for (c = 1; c < a.length; c++) {
        if ("" + a[c] === a[c])
            a[0].innerHTML = a[c];

        else if (a[c] instanceof Array)
            a[c][0] = d(a[c][0]),
            a[0].appendChild(a[c][0]),
            DOMinate(a[c])

        else
            for (b in a[c])
                a[0].setAttribute(b, a[c][b])
    }

    return a[0]
}