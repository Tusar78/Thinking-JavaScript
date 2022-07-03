const getButton = document.getElementById('get-button'); 
const sendButton = document.getElementById('send-button'); 

const sendRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
      resolve(xhr.response);
    }    
  })

  return promise;
}
const getData = () => {
  sendRequest('get', 'https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      console.log(res);
    })
}

const sendData = () => {

}

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', getData);
