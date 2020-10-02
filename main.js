document.addEventListener("DOMContentLoaded", function(e) {

  const form = document.getElementById('search')
  const block = document.querySelector('.output__array')
  const input = document.querySelector('input')

 form.addEventListener('submit', function(e) {

    e.preventDefault()

    const c = input.value
    let arrey = c.split(',')
    let arr = arrey.map(Number)
    console.log(arr)

    function merge(a, b) {
      let result = [];
      let i = 0;
      let j = 0;

      while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
          result.push(a[i]);
          i++;
        } else {
          result.push(b[j]);
          j++;
        }
      }

      return result.concat(a.slice(i), b.slice(j));
    }

    function mergeSort(a) {
      if (a.length > 1) {
        let z = Math.floor(a.length / 2);
        let x = a.slice(0, z);
        let y = a.slice(z);
        console.log(x, y);
        return merge(mergeSort(x), mergeSort(y));
      } else {
        return a;
      }
    }

    let answer = mergeSort(arr);
   block.innerHTML = answer;

   input.value = '';
   input.focus();
  });
});
