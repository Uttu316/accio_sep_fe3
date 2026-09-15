let x = 9;
function abc(fun) {
  let y = 10;
  let z = 23;

  const o = fun(x, y + z) + fun(z + x, y);

  return o;
}

function add(x, y) {
  return x + y;
}

const ans = abc(add);
console.log(ans);
