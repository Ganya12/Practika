onload = function(){
  const a = document.querySelector('#a');
  const b = document.querySelector('#b');
  const c = document.querySelector('#c');
  p = document.querySelector('#p');
  s = document.querySelector('#s');
           
  a.addEventListener('keyup', function(){
  b.addEventListener('keyup', function(){
  c.addEventListener('keyup', function(){
    var p = Number(1*a.value + 1*b.value + 1*c.value)/2;
    s.innerHTML = Math.sqrt(p*(p-a.value)*(p-b.value)*(p-c.value));
  });
  });
  });
}; 