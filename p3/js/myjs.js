function calculate() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);  
    const max = findMax(num1,num2,num3);
    const min = findMin(num1,num2,num3);
    const mean = (num1 + num2 + num3) / 3;
    const median = (num1 + num2 + num3) - min - max;
    const range = max - min;
    
    const resultAnswers = document.getElementById("result");
    resultAnswers.innerHTML = `
      <p>Maximum: ${max}</p>
      <p>Minimum: ${min}</p>
      <p>Mean: ${mean}</p>
      <p>Median: ${median}</p>
      <p>Range: ${range}</p>
    `;
  }

  function findMax(num1,num2,num3) {
    var max;
    if (num1 > num2) {
    if (num1 > num3) {
    max=num1;
    }
    
    else {
    max=num3;
    }
    
    }
    else {
    if (num2 > num3) {
    max=num2;
    }
    
    else{
    max=num3;
    }
    
    }
    return max;
    }
    
    function findMin(var1,var2,var3) {

      var min;
      if (var1 < var2) {
      if (var1 < var3) {
      min=var1;
      }
      else {
          min=var3;
          }
          }
          else {
          if (var2 < var3) {
          min= var2;
          }
          else{
          min=var3;
          }
          }
          return min;
          }