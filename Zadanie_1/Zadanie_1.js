const parser = new DOMParser();

const xmlText = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xlmDOM = parser.parseFromString(xmlText, "text/xml");

var list = xlmDOM.querySelector('list');
var kol = list.childElementCount;
var i = 0;
  while (i < kol){
    var list1 = list.children[i];
        const name1 = list1.querySelector("name");
            const first = name1.querySelector("first");
            const second = name1.querySelector("second");
        const age = list1.querySelector("age");
        const prof = list1.querySelector("prof");
          const AttrLang = name1.getAttribute("lang");
  
  const rezult = {
    Lang: AttrLang,
    Firstname: first.textContent,
    Secondname: second.textContent,
    Age: age.textContent,
    Profesia: prof.textContent
};

console.log("rezult", rezult);
  i++;
}