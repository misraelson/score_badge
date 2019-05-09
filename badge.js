window.addEventListener('load', drawBadge, false);
  function drawBadge() {
    const underAmountCircle = document.querySelector('#under-amount-blue');
    const underexDateCircle = document.querySelector('#under-ex-date-red');
    const underrecDateCircle = document.querySelector('#under-record-date-yellow');
    const underpayDateCircle = document.querySelector('#under-pay-date-green');

    const amountCircle = document.querySelector('#amount-blue');
    const exDateCircle = document.querySelector('#ex-date-red');
    const recordDateCircle = document.querySelector('#record-date-yellow');
    const payDateCircle = document.querySelector('#pay-date-green');

    const radius = amountCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const amountPercent = 45;
    const exdatePercent = 30;
    const recdatePercent = 20;
    const paydatePercent = 5;

    function setdashArray(percent) {
      const arcLength = percent / 100 * circumference
      return arcLength
    }
    // under circles stroke-dash-array
    underAmountCircle.style.strokeDasharray = `${setdashArray(amountPercent)} ${circumference}`;
    underexDateCircle.style.strokeDasharray = `${setdashArray(exdatePercent)} ${circumference}`;
    underrecDateCircle.style.strokeDasharray = `${setdashArray(recdatePercent)} ${circumference}`;
    underpayDateCircle.style.strokeDasharray = `${setdashArray(paydatePercent)} ${circumference}`;

    // under circles stroke-dash-offset
    underAmountCircle.style.strokeDashoffset = 0;
    underexDateCircle.style.strokeDashoffset = -setdashArray(amountPercent);
    underrecDateCircle.style.strokeDashoffset = -setdashArray(exdatePercent) + -setdashArray(amountPercent);
    underpayDateCircle.style.strokeDashoffset = -setdashArray(recdatePercent) + -setdashArray(exdatePercent) + -setdashArray(amountPercent);

    // score circles set stroke-dash-array
    amountCircle.style.strokeDasharray = `${setdashArray(amountPercent)} ${circumference}`;
    exDateCircle.style.strokeDasharray = `${setdashArray(exdatePercent)} ${circumference}`;
    recordDateCircle.style.strokeDasharray = `${setdashArray(recdatePercent)} ${circumference}`;
    payDateCircle.style.strokeDasharray = `${setdashArray(paydatePercent)} ${circumference}`;
    
    // score circles set stroke-dash-offset
    amountCircle.style.strokeDashoffset = 0;
    exDateCircle.style.strokeDashoffset = -setdashArray(amountPercent);
    recordDateCircle.style.strokeDashoffset = -setdashArray(exdatePercent) + -setdashArray(amountPercent);
    payDateCircle.style.strokeDashoffset = -setdashArray(recdatePercent) + -setdashArray(exdatePercent) + -setdashArray(amountPercent);

  }











   // let circles = [amountCircle, exDateCircle, recordDateCircle, payDateCircle]
    // for(circle of circles) {
    //   circle.style.strokeDasharray = `${circumference} ${circumference}`;
    // circle.style.strokeDashoffset = circumference;
    // }
    // amountCircle.style.strokeDashoffset = circumference;