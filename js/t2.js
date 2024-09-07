function fadeIn() {
    var text = $(".content")
        .text()
        .replace(/^\s+|\s+$/g, "");
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for (; i < length; i += sp) {
        txt = text.substring(i, i + sp);
        html.push('<span class="c animated">' + txt + "</span>");
    }
    $(".content").removeClass("c").html(html.join(""));

    for (i = 0, length = html.length; i < length; i++) {
        !(function (i) {
            setTimeout(function () {
                $(".content").find(".animated").eq(i).addClass("fadeIn");
            }, i * 380);
        })(i);
    }
}

// document.querySelector(".content").onclick = () => {
//     document.querySelector("#heart").hidden = false;
//     document.querySelector("body").style.backgroundColor = "#542246";
//     document.querySelector("#heart").hidden = false;
//     fadeIn();
// };

setTimeout(() => {
    document.querySelector("#heart").hidden = false;
    document.querySelector("body").style.backgroundColor = "#542246";
    fadeIn();
}, 3000); // Adjust the delay time (2000ms = 2 seconds) as needed

document.querySelector(".content").onclick = () => {
    document.querySelector("#heart").hidden = false;
    document.querySelector("body").style.backgroundColor = "#542246";
};
