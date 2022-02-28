const btn = document.querySelector('.btn');
const div = document.querySelector('.div');

btn.addEventListener('click', () =>{
  const inp = document.querySelector('#inp').value;
  fetch(`https://jsonplaceholder.typicode.com/users/${inp}/todos`)
  .then((Response)=>{console.log('response', Response);
    const result = Response.json();
    console.log('result', result);
    return result;})
  .then((data) => {
    console.log('data', data);
  if(data == ""){
    console.log("Пользователь с указанным id не найден");
  }
  else{
   let kol = data.length;
   console.log(kol);
   let i = 0;
   let mass = "";
   while (i < kol){
    if(data[i].completed){
      mass += `<li><del>${data[i].title}</del></li>`;
    }
    else{
      mass += `<li>${data[i].title}</li>`;
    }
    i++;
   };
   div.innerHTML = mass;
  }
  })
  .catch(() => {console.log('error')})
})