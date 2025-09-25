function ageCalculator() {
  const yearOBRef = document.querySelector("#YOB");
  const birthYearDivRef = document.querySelector("#birthYear");

  let YOB = Number(yearOBRef.value);
  console.log(YOB);

  const birthYear = 2025 - YOB;
  birthYearDivRef.innerHTML = birthYear;
}
