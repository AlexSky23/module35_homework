var btn = document.querySelector("#btn");
var div = document.querySelector('#div');

    btn.addEventListener('click', () => {
      var inp = document.querySelector('#inp').value;
      var userID = inp;
      var nameURL = `https://jsonplaceholder.typicode.com/users/${userID}/todos`;
      
      async function getName(nameURL) {
        const res = await fetch(nameURL);
        let data = res.json();
        return data;
      }
      getName(nameURL).then((result) => {
        console.log(result);
      })
       });