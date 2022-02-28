const js1 = [{"year":2017},{"year":2018},{"year":2019}];

const btn = document.querySelector("button");
var val = {};
for (i in js1){
 var num = `value` + i;
  val[num] = js1[i].year;
};

  var sel = document.getElementById('select');

  for(i in val){
    sel.insertAdjacentHTML('beforeend', `<option value=${val['value',i]}>${val['value',i]}</option>`);
  };

btn.onclick = function(){
  var a = document.getElementById('select').value;
 // console.log(a);
  var tbl = document.getElementById('tbl');
  
const xhr = new XMLHttpRequest();

if (!a.includes('StartTxt')){
    
xhr.onload = function() {
 // console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
    if(xhr.status == 200){
    var stat = xhr.response;
      stat = JSON.parse(stat);
};

  let k = 0;
  while (k in stat){
   // console.log(stat[k].year)
    if (stat[k].year == a){
       // console.log(stat[k])
     var sal = stat[k].sales;
     var year = stat[k].year;
      //console.log(sal); 
    };
    k++;
  };
 // console.log(sal);
  div1.innerHTML = `<br>`;
  tbl.innerHTML = `<tr><th>1 кв.</th><th>2 кв.</th><th>3 кв.</th><th>4 кв.</th></tr><tr><td>${sal.q1}</td><td>${sal.q2}</td><td>${sal.q3}</td><td>${sal.q4}</td></tr>`;  
  div2.innerHTML = `<br><a href = "https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'],datasets:[{label:'Выручка за ${year} год',data:[${sal.q1},${sal.q2},${sal.q3},${sal.q4}]}]}}">Вывести график</a>`
};

xhr.onerror = function() {
  console.log('Ошибка запроса');
};

xhr.open("get", "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440", true);
xhr.send();
};
    };