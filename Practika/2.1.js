onload = function(){
  const a = document.querySelector('#a');
  const b = document.querySelector('#b');
  const c = document.querySelector('#c');
  d = document.querySelector('#d');
  x1 = document.querySelector('#x1');
  x2 = document.querySelector('#x2');

    a.addEventListener('keyup', function(){
    b.addEventListener('keyup', function(){
    c.addEventListener('keyup', function(){
        var d = Number(b.value*b.value-4*a.value*c.value);
        if (d > 0)
            x1.innerHTML = (-b.value+Math.sqrt(d))/(2*a.value);
            x2.innerHTML = (-b.value-Math.sqrt(d))/(2*a.value);
        if (d = 0)
            x1.innerHTML = (-b.value)/(2*a.value);
  });
  });
  });
}