var items = new Array();
var button = document.getElementById("button");
var animationSpeed;

button.onclick = function () {
    var sayi = document.getElementById("myNumber").value;
    var speed = document.getElementById("speed").value;
    animationSpeed = speed;
    var speed2 = speed * 4;
    var i = 0;
    state = 0;
    transactions();

    function transactions() {
        if (i < sayi) {
            items[i] = Math.floor(Math.random() * 100);
            var div = document.createElement('div');
            var t = document.createTextNode(items[i]);
            div.className = 'box';
            div.appendChild(t);
            document.getElementById("boxes").appendChild(div);
            var p5 = setTimeout(prevAdd, speed);
            i++;
            setTimeout(transactions, speed2);
        } else {
            var button2 = document.getElementById("button-2");
            button2.onclick = function () {
                var bul = document.getElementById("willBeFoundValue").value;
                var eklenecek = document.getElementById("willBeAddValue").value;
                var result = 0;
                for (var j = 0; j < sayi; j++) {
                    if (items[j] == bul) {
                        result++;
                    }
                }
                if (result > 0) {
                    state++;
                    var yeniList = new Array();
                    sayi++;
                    var calisti = 0;
                    var g = 0;
                    var iterbiter;
                    while (g < sayi) {
                        if (items[g] == bul && calisti == 0) {
                            iterbiter = g;
                            yeniList[g] = items[g];
                            yeniList[g + 1] = eklenecek;
                            calisti++;
                        } else {
                            if (calisti > 0) {
                                yeniList[g + 1] = items[g];
                            } else {
                                yeniList[g] = items[g];
                            }
                        }
                        g++;
                    }
                    var w = 0;
                    iterbiterfc();
                    function iterbiterfc() {
                        if (w < iterbiter + 1) {
                            var p1 = document.createElement('div');
                            p1.className = 'space';
                            document.getElementById("iterbiterler").appendChild(p1);
                            w++;
                            return setTimeout(iterbiterfc, speed * 2);
                        } else {
                           
                        }
                    }
                    var c = 0;
                    transactions2();
                    function transactions2() {
                        if (c < sayi) {
                            var div = document.createElement('div');
                            var t = document.createTextNode(yeniList[c]);
                            div.className = 'box';
                            div.appendChild(t);
                            document.getElementById("boxes2").appendChild(div);
                            var p10 = setTimeout(prevAdd, speed);
                            c++;
                            setTimeout(transactions2, speed2);
                        } else {
                           
                        }
                    }
                } else {
                    alert("Number not Found");
                }
            }
        }
    }
}

function prevAdd() {
    var p3 = document.createElement('div');
    var k = document.createTextNode("←prev");
    p3.className = 'prev';
    p3.appendChild(k);
    if (state == 0) {
        document.getElementById("prevs").appendChild(p3);
    } else {
        document.getElementById("prevs2").appendChild(p3);
    }
    return setTimeout(nextAdd, animationSpeed);
}

function nextAdd() {
    var p2 = document.createElement('div');
    var m = document.createTextNode("next→");
    p2.className = 'next';
    p2.appendChild(m);
    if (state == 0) {
        document.getElementById("nexts").appendChild(p2);
    } else {
        document.getElementById("nexts2").appendChild(p2);
    }
    return setTimeout(spaceAdd, animationSpeed);
}

function spaceAdd() {
    var p1 = document.createElement('div');
    p1.className = 'space';
    if (state == 0) {
        document.getElementById("iterler").appendChild(p1);
    } else {
        document.getElementById("iterler2").appendChild(p1);
    }
    return 0;
}



