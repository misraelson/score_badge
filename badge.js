window.addEventListener('load', drawBadge, false);
  function drawBadge() {
    const underAmountCircle = document.querySelector('#under-amount-blue');
    const underExDateCircle = document.querySelector('#under-ex-date-red');
    const underRecDateCircle = document.querySelector('#under-record-date-yellow');
    const underPayDateCircle = document.querySelector('#under-pay-date-green');

    const amountCircle = document.querySelector('#amount-blue');
    const exDateCircle = document.querySelector('#ex-date-red');
    const recordDateCircle = document.querySelector('#record-date-yellow');
    const payDateCircle = document.querySelector('#pay-date-green');

    const percentScore = document.querySelector('#percentage');

    const radius = amountCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const amountWeight = 45;
    const exDateWeight = 30;
    const recDateWeight = 20;
    const payDateWeight = 5;

    let amountScorePercent = 50;
    let exScorePercent = 80;
    let recScorePercent = 75;
    let payScorePercent = 90;
    
    let dailyScore = 80;
    percentScore.textContent = dailyScore + "%"

    function setArcLength(percent) {
      const arcLength = percent / 100 * circumference
      return arcLength
    }

    function setScorePercent(percent, arcValue) {
      const score = percent / 100 * arcValue
      return score
    }

    // under circles stroke-dash-array
    underAmountCircle.style.strokeDasharray = `${setArcLength(amountWeight)} ${circumference}`;
    underExDateCircle.style.strokeDasharray = `${setArcLength(exDateWeight)} ${circumference}`;
    underRecDateCircle.style.strokeDasharray = `${setArcLength(recDateWeight)} ${circumference}`;
    underPayDateCircle.style.strokeDasharray = `${setArcLength(payDateWeight)} ${circumference}`;

    // under circles stroke-dash-offset
    underAmountCircle.style.strokeDashoffset = 0;
    underExDateCircle.style.strokeDashoffset = -setArcLength(amountWeight);
    underRecDateCircle.style.strokeDashoffset = -setArcLength(exDateWeight) + -setArcLength(amountWeight);
    underPayDateCircle.style.strokeDashoffset = -setArcLength(recDateWeight) + -setArcLength(exDateWeight) + -setArcLength(amountWeight);

    // score circles set stroke-dash-array
    amountCircle.style.strokeDasharray = `${setScorePercent(amountScorePercent, setArcLength(amountWeight))} ${circumference}`;
    exDateCircle.style.strokeDasharray = `${setScorePercent(exScorePercent, setArcLength(exDateWeight))} ${circumference}`;
    recordDateCircle.style.strokeDasharray = `${setScorePercent(recScorePercent, setArcLength(recDateWeight))} ${circumference}`;
    payDateCircle.style.strokeDasharray = `${setScorePercent(payScorePercent, setArcLength(payDateWeight))} ${circumference}`;
    
    // score circles set stroke-dash-offset
    amountCircle.style.strokeDashoffset = 0;
    exDateCircle.style.strokeDashoffset = -setArcLength(amountWeight);
    recordDateCircle.style.strokeDashoffset = -setArcLength(exDateWeight) + -setArcLength(amountWeight);
    payDateCircle.style.strokeDashoffset = -setArcLength(recDateWeight) + -setArcLength(exDateWeight) + -setArcLength(amountWeight);

  }











   // let circles = [amountCircle, exDateCircle, recordDateCircle, payDateCircle]
    // for(circle of circles) {
    //   circle.style.strokeDasharray = `${circumference} ${circumference}`;
    // circle.style.strokeDashoffset = circumference;
    // }
    // amountCircle.style.strokeDashoffset = circumference;