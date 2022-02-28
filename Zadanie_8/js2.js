const btn = document.querySelector('.btn');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
var a = "";
console.log("localStorage: ", localStorage.getItem('inp1'));

if(localStorage.getItem('inp1')){
getImg(localStorage.getItem('inp1'), localStorage.getItem('inp2'));
};

btn.addEventListener('click', () => {
localStorage.clear();
  var inp1 = document.querySelector('#inp1').value;
  var inp2 = document.querySelector('#inp2').value;
  let rez_1 = inp1 < 11 && inp1 > 0 && !isNaN(inp1);
  let rez_2 = inp2 < 11 && inp2 > 0 && !isNaN(inp2);
  console.log(rez_1);
  console.log(rez_2);

  if(!rez_1){
    console.log("Номер страницы вне диапазона от 1 до 10");
    console.log(inp1);
    a = "Номер страницы вне диапазона от 1 до 10";
  }
  else {
    console.log("OK a");
    a = "";
  }

  if(!rez_2){
    console.log("Лимит вне диапазона от 1 до 10");
    console.log(inp2);
    b = "Лимит вне диапазона от 1 до 10";
  }
  else {
    console.log("OK b");
    b = "";
  }

  if(!rez_1 && !rez_2){
    console.log("Номер страницы и лимит вне диапазона от 1 до 10");
    console.log("a = ", inp1, "b = ", inp2);
    b = "Номер страницы и лимит вне диапазона от 1 до 10";
    a = "";
  }
  else if(rez_1 && rez_2){
    localStorage.setItem('inp1', inp1);
    localStorage.setItem('inp2', inp2);
    console.log("FIN");
    b = "";
    a = "";
////////////////////////////
getImg(inp1, inp2);
  }
  div1.innerHTML = a;
  div2.innerHTML = b;
});

function getImg(inp1, inp2){
  fetch(`https://picsum.photos/v2/list?page=${inp1}&limit=${inp2}`)
  .then((Response)=>{console.log('response', Response);
    const result = Response.json();
    console.log('result', result);
    return result;})
  .then((data) => {
    console.log('data', data);
  if(data == ""){
    console.log("Ошибка! Нет данных!");
  }
  else{
   let kol = data.length;
   console.log(kol);
   let i = 0;
   let mass = "";
   while (i < kol){
      mass += `<li class=li><img src="${data[i].download_url}" 
      width="300" alt="img"></li>`;
    i++;
   };
   div.innerHTML = mass;
  }
  })
  .catch(() => {console.log('error')})

}