//JQuery
$(".ripple").on("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = $(this).offset().top;
  const buttonLeft = $(this).offset().left;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const $circle = $("<span></span>")
    .addClass("circle")
    .css({
      top: `${yInside}px`,
      left: `${xInside}px`,
    });

  $(this).append($circle);

  setTimeout(() => {
    $circle.remove();
  }, 500);
});


//Vanilla JS
const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});