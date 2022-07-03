const getButton = document.getElementById('get-button'); 
const sendButton = document.getElementById('send-button'); 

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.send();

  xhr.onload = function() {
    const result = JSON.parse(xhr.response);
    console.log(result);
  }
}

const sendData = () => {

}

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', getData);
