onload = function(){
  const a = document.querySelector('#a');
  const b = document.querySelector('#b');
  p = document.querySelector('#p');
  s = document.querySelector('#s');
           
  a.addEventListener('keyup', function(){
  b.addEventListener('keyup', function(){
    p.innerHTML = (2*a.value + 2*b.value);
    s.innerHTML = a.value * b.value;
  });
  });
};