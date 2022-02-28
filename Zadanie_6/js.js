setTimeout(3000);

var num = Math.round(Math.random()*100);
const prom = new Promise((resolve, reject) => {
  if(num % 2 === 0){
    resolve(`Завершено успешно. Сгенерированное число — ${num}`);
  }
  else{
    reject(`Завершено с ошибкой. Сгенерированное число — ${num}`);
  }
});

prom
  .then((result) => {
  console.log("result: ", result);
})
  .catch((error) => {
  console.log("error: ", error);
})
  .finally(() => {
  console.log("finall");
});
