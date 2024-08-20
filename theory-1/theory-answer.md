Данный код выведет следующее с задрежкой в 3000 миллисекунд:
Bad: 10
Bad: 12
Good: 15
Good: 21

Модификация - Вариант 1:

const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i] > 14 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
};

Модификация - Вариант 2:

const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i] >= 15 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}