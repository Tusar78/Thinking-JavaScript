var a = 10;
function one() {
  function two() {
    var c = 20;
    console.log(a + c);
  }
  two();
}

one()