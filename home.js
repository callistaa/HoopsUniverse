let width = 1200;
let height = 300;
let sliderItem = 3;
let sliderItemWidth = sliderItem * width;
let indexImg = 0;

$('#sliderSlideshow').css({
    overflow: 'hidden',
    margin: 'auto',
    paddingTop: '30px',
    width: width + 'px',
    height: height + 'px',
});

$('#sliderSlideshowItems').css({
    position: 'relative',
    display: 'flex',
    width: sliderItemWidth + 'px',
    height: height + 'px',
});

$('.sliderImg').css({
    width: width + 'px',
    height: height + 'px',
    borderRadius: '20px',
});

let slider = function(nextImg){
    indexImg = indexImg + nextImg;
    if(indexImg < 0){
        indexImg = 2;
    } 
    else if(indexImg > 2){
        indexImg = 0;
    }

    clearTimeout(timeout);
    timeout = setTimeout(function(){
        slider(1);
    }, 8000);

    $('#sliderSlideshowItems').animate({
        left: -width * indexImg,
    }, 2500);
};

let timeout = setTimeout(function(){
    slider(1);
}, 8000);

$('#laquoBtn').click(function(){
    slider(-1);
});

$('#raquoBtn').click(function(){
    slider(1);
});