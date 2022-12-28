onload = function(){
    const st = document.querySelector('#side');
    p = document.querySelector('#p');  
    s = document.querySelector('#s');
           
    st.addEventListener('keyup', function(){
      this.value = this.value.replace(/[^\d]+/ig, '');
      p.innerHTML = this.value * 4;
      s.innerHTML = this.value ** 2;
    });
}