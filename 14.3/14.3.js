const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');
function useRequest(url,callback){
  var xhr = new XMLHttpRequest();
  xhr.open('GET',url,true);
  xhr.onload = function () {
    if (xhr.status !=200) {
      console.log('статус ответа: ', xhr.status);
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
  const value = document.querySelector('.inp').value;
  if ((Number(value))>=1 && (Number(value))<=10) {
    console.log(Number(value));
    useRequest(`https://picsum.photos/v2/list/?limit=${Number(value)}`, displayResult);
  } else {
    console.log("число вне диапазона от 1 до 10")
  }
})