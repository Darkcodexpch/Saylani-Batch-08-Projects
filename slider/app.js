let count = 0;

// function to show slides 
function showSlides(num) {
    let slide = document.getElementsByClassName("slide");
    for (const img of slide) {
        img.style.display = 'none'
    }
    slide[num].style.display = "block";
    // console.log(slide)

}

//  function to count slides
function countSlides(c) {
    let slide = document.getElementsByClassName("slide");
    count = count + c;
    if (count == slide.length) {
        count = 0;
        return showSlides(count);

    }
    else if (count < 0) {
        count = slide.length - 1;
        return showSlides(count);
    }
    else {
        return showSlides(count);
    }
}

// dot function to show slides
function countsDots(dots) {
    count = dots;
    return showSlides(count)
}

showSlides(count);

// on keypress sliderwork

document.onkeydown = checkKey;

function checkKey(e) {
    let slide = document.getElementsByClassName("slide");

    e = e || window.event;

    if (e.keyCode == '37') {
        // left arrow
        count--
        if (count < 0) {
            count = slide.length - 1;
            return showSlides(count)
        }
        console.log("count is minus", count)
        return showSlides(count);
    }
    else if (e.keyCode == '39') {
        // right arrow
        count++
        console.log("count is plus", count)
        if (count > slide.length - 1) {
            count = 0;
            return showSlides(count);
        }
        return showSlides(count);

    }

}


