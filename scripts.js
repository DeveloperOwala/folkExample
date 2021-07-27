
    function multiplies_by(number) {
      function localFunc(secondNumber) {
        return number * secondNumber;
      }
      return localFunc;
    }
    var times5 = multiplies_by(5);
    var times10 = multiplies_by(10);
    console.log(times5(10));
    console.log(times10(32));