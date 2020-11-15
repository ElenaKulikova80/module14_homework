const parser=new DOMParser();
const xmlString=
`<list>
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
      <first>����</first>
      <second>������</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const result = {
  list: []
}

const xmlDOM=parser.parseFromString(xmlString,"text/xml");
const listNode=xmlDOM.querySelector("list");
const studentNodes=listNode.querySelectorAll("student");

studentNodes.forEach(student => {
  const nameNode=student.querySelector("name");
  const firstNode=nameNode.querySelector("first");
  const secondNode=nameNode.querySelector("second");
  const ageNode=student.querySelector("age");
  const profNode=student.querySelector("prof");
  const langAttribute=nameNode.getAttribute("lang");
  const studentObj = {
    name:firstNode.textContent + ' ' + secondNode.textContent,
    age:Number(ageNode.textContent),
    prof:profNode.textContent,
    lang:langAttribute,
  };
  result.list.push(studentObj);
})

console.log('result',result);

// Задание выполнено неверно, т.к. в xml содержится информация о 2-х студентах и нужно вывести информацию об обоих. Для этого нужно использовать метод querySelectorAll, который ищет все объекты по указанному селектору и возвращает коллекцию узлов. Коллекцию нужно перебрать и записать в результирующий объект информацию из всех найденных узлов student. Выше исправила на верный вариант