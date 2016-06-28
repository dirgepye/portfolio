$(document).ready(function() {
    $('a').click(function() {
        undo();
        console.log("heck yeah")
        var href = $(this).attr('href');

        setTimeout(function() {
            window.location = href;

        }, 1000);
        return false;
    });
    
    
});

document.addEventListener("DOMContentLoaded", function(event) { 
  titleFunction();
});

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
aboutRight = document.getElementsByClassName("right")
aboutLeft = document.getElementsByClassName("left")
navbarFixed = document.getElementsByClassName("navbar-fixed")
navbarBg = document.getElementsByClassName("navbar-bg")



console.log(sten)
console.log(links)
console.log(aboutRight)
console.log(aboutLeft)

//document.onload=function(){title};
//document.addEventListener("load", titleFunction);



function titleFunction() {
    console.log("fdsafw")
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

}


//TweenLite.to(links, 10, {visibility: "visible"})
// TweenLite.to(sten, 1.5, {bottom: 10});
// TweenLite.to(house, 2, {bottom: 16});

function onComplete() {
    console.log("onComplete function fired")
    var about = document.getElementById("about");
    work = document.getElementById("work")
    contact = document.getElementById("contact")

    TweenLite.to(about, 0.5, {
        opacity: 1,
        onComplete: showWork
    });

    function showWork() {
        TweenLite.to(work, 0.5, {
            opacity: 1,
            onComplete: showContact
        });

        function showContact() {
            TweenLite.to(contact, 0.5, {
                opacity: 1
            });
        }
    }

}

function undo() {
    TweenLite.to(shawn, 1.5, {
        opacity: 0,
        bottom: 3
    });
    TweenLite.to(lastName, 1.5, {
        opacity: 0,
        bottom: -3
    });
    TweenLite.to(house, 2, {
        bottom: -8
    });

    TweenLite.to(img1, 1.5, {
        bottom: "45px"
    });
    TweenLite.to(img2, 1.5, {
        bottom: "35px"
    });
    TweenLite.to(img3, 2, {
        bottom: "6px"
    });
    //stenhouse
    TweenLite.to(img6, 0.75, {
        bottom: "-20px"
    });
    TweenLite.to(img7, 1.5, {
        bottom: "-10px"
    });
    TweenLite.to(img8, 1.5, {
        bottom: "-6px"
    });
    TweenLite.to(img9, 1, {
        bottom: "-6px"
    });
    TweenLite.to(img10, 1.75, {
        bottom: "-60px"
    });
    TweenLite.to(img11, 2, {
        bottom: "-30px"
    });
    TweenLite.to(img12, 0.5, {
        bottom: "-65px"
    })
    TweenLite.to(img13, 1, {
        bottom: "-65px",
        onComplete: onComplete
    })
    TweenLite.to(img14, 2.5, {
        bottom: "-60px"
    })

}

function aboutLoad() {
    console.log("aboutLoad successfully called")
    TweenLite.to(aboutLeft, 1.5, {
        left: "0px"
    })
    TweenLite.to(aboutLeft, 3, {
        opacity: "0.85"
    })
    TweenLite.to(aboutRight, 1.5, {
        right: "0px"
    })
    TweenLite.to(aboutRight, 3, {
        opacity: "1"
    })
}

function navbarBg() {
    console.log("navbarBg fired")
    TweenLite.to(navbarFixed, 0.6, {
        opacity: "1"
    })
}

window.onscroll = function() {
    scrollTriggers()
};

function scrollTriggers() {
    if (document.body.scrollTop > 50) {
        //$('.navbar').css("display","none")
        $('.navbar').addClass('navbar-fixed');
        $('.navbar').animate({backgroundColor: "rgba(59,0,0,0.85)"}, "slow")
        $('.noBounce').css("margin-top", "143px");
        //$('.navbar-ul').css("background-color","purple")
        undo();
    }

    if ($('.navbar').hasClass('navbar-fixed') && document.body.scrollTop <= 50) {
        $('.navbar').removeClass('navbar-fixed')
        $('.noBounce').css("margin-top", "0")
    }
    
    if (document.body.scrollTop <= 50) {
        $('.navbar').find('li').css("opacity","1")
    }
    
    if (document.body.scrollTop <= 200) {
        titleFunction();
    }
    
    if (document.body.scrollTop > 400) {
        aboutLoad()
    }

}



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// (function (d) {
//     d.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (f, e) {
//         d.fx.step[e] = function (g) {
//             if (!g.colorInit) {
//                 g.start = c(g.elem, e);
//                 g.end = b(g.end);
//                 g.colorInit = true
//             }
//             g.elem.style[e] = "rgb(" + [Math.max(Math.min(parseInt((g.pos * (g.end[0] - g.start[0])) + g.start[0]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[1] - g.start[1])) + g.start[1]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[2] - g.start[2])) + g.start[2]), 255), 0)].join(",") + ")"
//         }
//     });

//     function b(f) {
//         var e;
//         if (f && f.constructor == Array && f.length == 3) {
//             return f
//         }
//         if (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)) {
//             return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
//         }
//         if (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)) {
//             return [parseFloat(e[1]) * 2.55, parseFloat(e[2]) * 2.55, parseFloat(e[3]) * 2.55]
//         }
//         if (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)) {
//             return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
//         }
//         if (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)) {
//             return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
//         }
//         if (e = /rgba\(0, 0, 0, 0\)/.exec(f)) {
//             return a.transparent
//         }
//         return a[d.trim(f).toLowerCase()]
//     }
//     function c(g, e) {
//         var f;
//         do {
//             f = d.css(g, e);
//             if (f != "" && f != "transparent" || d.nodeName(g, "body")) {
//                 break
//             }
//             e = "backgroundColor"
//         } while (g = g.parentNode);
//         return b(f)
//     }
//     var a = {
//         aqua: [0, 255, 255],
//         azure: [240, 255, 255],
//         beige: [245, 245, 220],
//         black: [0, 0, 0],
//         blue: [0, 0, 255],
//         brown: [165, 42, 42],
//         cyan: [0, 255, 255],
//         darkblue: [0, 0, 139],
//         darkcyan: [0, 139, 139],
//         darkgrey: [169, 169, 169],
//         darkgreen: [0, 100, 0],
//         darkkhaki: [189, 183, 107],
//         darkmagenta: [139, 0, 139],
//         darkolivegreen: [85, 107, 47],
//         darkorange: [255, 140, 0],
//         darkorchid: [153, 50, 204],
//         darkred: [139, 0, 0],
//         darksalmon: [233, 150, 122],
//         darkviolet: [148, 0, 211],
//         fuchsia: [255, 0, 255],
//         gold: [255, 215, 0],
//         green: [0, 128, 0],
//         indigo: [75, 0, 130],
//         khaki: [240, 230, 140],
//         lightblue: [173, 216, 230],
//         lightcyan: [224, 255, 255],
//         lightgreen: [144, 238, 144],
//         lightgrey: [211, 211, 211],
//         lightpink: [255, 182, 193],
//         lightyellow: [255, 255, 224],
//         lime: [0, 255, 0],
//         magenta: [255, 0, 255],
//         maroon: [128, 0, 0],
//         navy: [0, 0, 128],
//         olive: [59, 0, 0],
//         orange: [255, 165, 0],
//         pink: [255, 192, 203],
//         purple: [128, 0, 128],
//         violet: [128, 0, 128],
//         red: [255, 0, 0],
//         silver: [192, 192, 192],
//         white: [255, 255, 255],
//         yellow: [255, 255, 0],
//         transparent: [255, 255, 255]
//     }
// })(jQuery);