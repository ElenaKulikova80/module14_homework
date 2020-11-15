const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');
function useRequest(url,callback){
  var xhr = new XMLHttpRequest();
  xhr.open('GET',url,true);
  xhr.onload = function () {
    if (xhr.status !=200) {
      console.log('������ ������: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback){
        callback(result);
      }
    }
  };
  xhr.send();
};
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}
btnNode.addEventListener('click',()=> {
  // Здесь можно немного упростить, и чтобы не использовать каждый раз обертку Number(), один раз применить унарный плюс на значении, считанном из инпута
  const value = +document.querySelector('.inp').value;
  if (value >= 1 && value <= 10) {
    console.log(value);
    useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
  } else {
    console.log("����� ��� ��������� �� 1 �� 10")
    // Сообщение о неправильном вводе в данном случае лучше выводить не в консоль, а непосредственно в документ, т.к. данное приложение уже рассчитано скорее на обычного пользователя, который как правило не пользуется консолью
  }
})