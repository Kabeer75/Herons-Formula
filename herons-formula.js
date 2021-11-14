// Herons Formula
// sqrt(s(s-a)(s-b)(s-c))
// s = a+b+c/2

function heron(a,b,c){
  let s = (a+b+c)/2
  let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  return area;
}

console.log(heron(4,6,8))
