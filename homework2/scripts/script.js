function calcSubt(n, m) {
    return n - m;
  }
  let n = prompt('Введите уменьшаемое:', '');
  let m = prompt('Введите вычитаемое:', '');

  let k = calcSubt(n, m);
  console.log(`Результат операции№1: ${n} - ${m} = `, k);
  alert(`Результат: ${n} - ${m} =  `+ k);

function calcMulti(a, b) {
    return a * b;
  }
  let a = prompt('Введите множитель1:', '');
  let b = prompt('Введите множитель2:', '');

  let c = calcMulti(a, b);
  console.log(`Результат операции№2: ${a} - ${b} = `, c);
  alert(`Результат: ${a} * ${b} =  `+ c);

  function calcDiv(d, e) {
    return d / e;
  }
  let d = prompt('Введите делимое:', '');
  let e = prompt('Введите делитель:', '');

  let l = calcDiv(d, e);
  console.log(`Результат операции№3: ${d} / ${e} = `, l);
  alert(`Результат: ${d} / ${e} =  `+ l);

//   проблема с суммой

  function calcSubt(i, j) {
    return i + j;
  }
  let i = prompt('Введите слагаемое1:', '');
  let j = prompt('Введите слагаемое2:', '');

  let s = calcSubt(i, j);
  console.log(`Результат операции№4: ${i} + ${j} = `, s);
  alert(`Результат: ${i} + ${j} =  `+ s);




