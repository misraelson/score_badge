window.addEventListener('load', drawBadge, false);
  function drawBadge() {
    const amountCircle = document.querySelector('#amount-blue');
    const exDateCircle = document.querySelector('#ex-date-red');
    const recordDateCircle = document.querySelector('#record-date-yellow');
    const payDateCircle = document.querySelector('#pay-date-green');
    const radius = amountCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const amountPercent = 45
    const exdatePercent = 30
    const recdatePercent = 20
    const paydatePercent = 5

   
    function setAmountOffset(percent) {
      const offset = circumference - (percent / 100 * circumference);
      return offset
    }
    function setdashArray(percent) {
      const arcLength = percent / 100 * circumference
      return arcLength
    }
    // stroke-dash-array
    amountCircle.style.strokeDasharray = `${setdashArray(amountPercent)} ${circumference}`;
    exDateCircle.style.strokeDasharray = `${setdashArray(exdatePercent)} ${circumference}`;
    recordDateCircle.style.strokeDasharray = `${setdashArray(recdatePercent)} ${circumference}`;
    payDateCircle.style.strokeDasharray = `${setdashArray(paydatePercent)} ${circumference}`;

    // stroke-dash-offset
    amountCircle.style.strokeDashoffset = 0
    exDateCircle.style.strokeDashoffset = -setdashArray(amountPercent)
    recordDateCircle.style.strokeDashoffset = -setdashArray(exdatePercent) + -setdashArray(amountPercent)
    payDateCircle.style.strokeDashoffset = -setdashArray(recdatePercent) + -setdashArray(exdatePercent) + -setdashArray(amountPercent)

  }











   // let circles = [amountCircle, exDateCircle, recordDateCircle, payDateCircle]
    // for(circle of circles) {
    //   circle.style.strokeDasharray = `${circumference} ${circumference}`;
    // circle.style.strokeDashoffset = circumference;
    // }
    // amountCircle.style.strokeDashoffset = circumference;