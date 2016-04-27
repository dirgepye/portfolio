console.log("wow")

var shawn = document.getElementById("shawn")
sten = document.getElementById("sten")
house = document.getElementById("house")
lastName = document.getElementById("last-name")
img1 = document.getElementById("img-1")
img2 = document.getElementById("img-2")
img3 = document.getElementById("img-3")
img4 = document.getElementById("img-4")
img5 = document.getElementById("img-5")
img6 = document.getElementById("img-6")
img7 = document.getElementById("img-7")
img8 = document.getElementById("img-8")
img9 = document.getElementById("img-9")
img10 = document.getElementById("img-10")
img11 = document.getElementById("img-11")
img12 = document.getElementById("img-12")
img13 = document.getElementById("img-13")
img14 = document.getElementById("img-14")
links = document.getElementsByClassName("links")


console.log(sten)
console.log(links)


TweenLite.to(shawn, 1.5, {
    opacity: 1,
    bottom: -3
});
TweenLite.to(lastName, 1.5, {
    opacity: 1,
    bottom: 3
})
TweenLite.to(house, 2, {
    bottom: 8
})

TweenLite.to(img1, 1.5, {
    bottom: "-45px"
})
TweenLite.to(img2, 1.75, {
    bottom: "-35px"
})
TweenLite.to(img3, 2, {
        bottom: "-6px"
    })
    //stenhouse
TweenLite.to(img6, 1.5, {
    bottom: "20px"
})
TweenLite.to(img7, 1.5, {
    bottom: "10px"
})
TweenLite.to(img8, 2, {
    bottom: "6px"
})
TweenLite.to(img9, 1.5, {
    bottom: "6px"
})
TweenLite.to(img10, 2, {
    bottom: "60px"
})
TweenLite.to(img11, 1.5, {
    bottom: "30px"
})
TweenLite.to(img12, 2, {
    bottom: "65px"
})
TweenLite.to(img13, 1.5, {
    bottom: "65px",
    onComplete: onComplete
})
TweenLite.to(img14, 1.5, {
    bottom: "60px"
})


//TweenLite.to(links, 10, {visibility: "visible"})
// TweenLite.to(sten, 1.5, {bottom: 10});
// TweenLite.to(house, 2, {bottom: 16});

function onComplete() {
    var about = document.getElementById("about")
    port = document.getElementById("port")
    contact = document.getElementById("contact")

    TweenLite.to(about, 0.5, {
        opacity: 1,
        onComplete: showPort
    })

    function showPort() {
        TweenLite.to(port, 0.5, {
            opacity: 1,
            onComplete: showContact
        })

        function showContact() {
            TweenLite.to(contact, 0.5, {
                opacity: 1
            })
        }
    };

}

function undo() {
    TweenLite.to(shawn, 1.5, {
        opacity: 0,
        bottom: 3
    });
    TweenLite.to(lastName, 1.5, {
        opacity: 0,
        bottom: -3
    })
    TweenLite.to(house, 2, {
        bottom: -8
    })

    TweenLite.to(img1, 1.5, {
        bottom: "45px"
    })
    TweenLite.to(img2, 1.75, {
        bottom: "35px"
    })
    TweenLite.to(img3, 2, {
            bottom: "6px"
        })
        //stenhouse
    TweenLite.to(img6, 1.5, {
        bottom: "-20px"
    })
    TweenLite.to(img7, 1.5, {
        bottom: "-10px"
    })
    TweenLite.to(img8, 2, {
        bottom: "-6px"
    })
    TweenLite.to(img9, 1.5, {
        bottom: "-6px"
    })
    TweenLite.to(img10, 2, {
        bottom: "-60px"
    })
    TweenLite.to(img11, 1.5, {
        bottom: "-30px"
    })
    TweenLite.to(img12, 2, {
        bottom: "-65px"
    })
    TweenLite.to(img13, 1.5, {
        bottom: "-65px",
        onComplete: onComplete
    })
    TweenLite.to(img14, 1.5, {
        bottom: "-60px"
    })

}

$(document).ready(function() {
    $("a").click(function() {
        undo()
        var href = $(this).attr('href');

        setTimeout(function() {
            window.location = href
        }, 1000);
        return false;
    });
});