onload = function(){
  const a = document.querySelector('#a');
  c = document.querySelector('#c');
  s = document.querySelector('#s');
         
  a.addEventListener('keyup', function(){
    c.innerHTML = (2*3.14*a.value);
    s.innerHTML = (3.14 * a.value ** 2);
  });
}