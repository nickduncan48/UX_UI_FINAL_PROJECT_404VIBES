
var carousel = $(".carousel-custom"),
    items = $(".item"),
    currentItem = 0,
    currdeg  = 0;

    // console.log("Items", items)

    // console.log(items[currentItem])
    // items[currentItem].style.opacity = 1

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 36
    currentItem ++;

  }
  if(e.data.d=="p"){
    currdeg = currdeg + 36;
  }

  console.log("event: ", e.target)

  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
    items.css({
    "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
    "-moz-transform": "rotateY("+(-currdeg)+"deg)",
    "-o-transform": "rotateY("+(-currdeg)+"deg)",
    "transform": "rotateY("+(-currdeg)+"deg)",
  });
}

