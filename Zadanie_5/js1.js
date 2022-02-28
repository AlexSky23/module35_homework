var div1 = document.getElementById('div');
var prom = "";
prom = String(prom);
prom = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', 'Иван?');
console.log("Type: ", typeof prom);
    div1.innerHTML = prom;

    localStorage.setItem("myName", prom)

    console.log("OTV: ", prom);

if(localStorage.getItem("myName") != null){
    var data1 = new Date();
    var data2 = data1.toLocaleString("ru");
    alert(`Добрый день, ${prom} давно не виделись. В последний раз вы были у нас ${data2}`);
}