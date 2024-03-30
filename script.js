loanAmount = document.querySelector("#loan");
loanTime = document.querySelector("#time");
interest = document.querySelector("#interest");
E = document.getElementById("EMI");
let calc = document.querySelector("button");

calc.addEventListener("click", () => {
  P = parseFloat(loanAmount.value); // amount 1,00,000;
  N = parseFloat(loanTime.value); // 3 YEARS
  R = parseFloat(interest.value); // yearly 12%

  monthlyTenure = N * 12; // 3*12 = 36 month
  totalyearlyROI = R * N; // 12 * 3 =36%
  $ = (totalyearlyROI / 100) * P; // 36% convert into value =36/100 = 0.36 * 1,00,000;   => 36000
  $$ = $ + P; // 36000+100000;
  ROI = $$ / monthlyTenure; // 136000/36 = 3777.777777

  E.innerHTML = "Monthly EMI : " + ROI.toFixed(2); // .toFixed(2) in value 2 only show 2 digits end of the decimal.  => 3777.77
});