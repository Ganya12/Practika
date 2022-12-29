const btn = document.querySelector('button');

    btn.addEventListener('click', () => {
      let a = document.querySelector('#a').value;
      let b = document.querySelector('#b').value;
      let c = document.querySelector('#c').value;
      let p = document.querySelector('p');

      let max = Math.max(a, b, c);
      let arr = [a, b, c];
      let res = arr.filter(item => item != max)
      .map(el => el ** 2)
      .reduce((total, amount) => total + amount);

      if (max ** 2 === res) {
        p.innerHTML = 'Это тройкой Пифагора';
      } else {
        p.innerHTML = 'Это не тройкой Пифагора';
      }
    })