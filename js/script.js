var list;

for (var i = 1; i <= 100; i++) {
    list = '<li>';

    // 'i' is multiple of 3
    if (i % 3 === 0)
        list += 'Fizz';
    // 'i' is multiple of 5 (or even 3 for 'FizzBuzz')
    if (i % 5 === 0)
        list += 'Buzz';
    // 'i' is not a multiple either of 3 or 5
    if (i % 3 !== 0 && i % 5 !== 0)
        list += i;

    document.querySelector('#app ul').innerHTML += list + '</li>';
}