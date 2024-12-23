let min = 0;
let sec = 0;
let ms = 0;
let cron1;

function formatNumber(number) {
  return String(number).padStart(2, "0");
}
function start() {

  const display = document.querySelector(".hour");
  
  cron1 = setInterval(function () {
  ms++;
  if (ms > 99) {
    ms = 0;
    sec++;
  }
  if (sec > 59) {
    sec = 0;
    min++;
  }
  
display.innerHTML = `${formatNumber(min)} ${formatNumber(sec)} ${formatNumber(ms)}`;
      }, 10)
    
    const bt1 = document.querySelector(".play");
    const bt2 = document.querySelector(".pause");
    bt1.style.display = "none";
    bt2.style.display = "inline-block";
    
    }


function pause() {
  clearInterval(cron1);

  const bt1 = document.querySelector(".play");
  const bt2 = document.querySelector(".pause");
  bt1.style.display = "inline-block";
  bt2.style.display = "none";
}

function reset() {
  clearInterval(cron1); 
  min = 0;
  sec = 0;
  ms = 0;


  const display = document.querySelector(".hour");
  display.innerHTML = `${formatNumber(min)} ${formatNumber(sec)} ${formatNumber(ms)}`;

  const bt1 = document.querySelector(".play");
  const bt2 = document.querySelector(".pause");
  bt1.style.display = "inline-block";
  bt2.style.display = "none";
}

