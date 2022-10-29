const main = document.getElementById('api_main');
const input = document.getElementById('input_gif');

input.addEventListener('keyup', customGif);

window.addEventListener('DOMContentLoaded', () => {
    const URL = 'https://tenor.googleapis.com/v2/featured?key=AIzaSyDd8UQ5uw6sx1Fd7Irbp_6Q0_qvu9amDHY'
    sendURL(URL)
})


function sendURL(data) {
    fetch(data)
        .then(res => res.json())
        .then((data) => {
            main.innerHTML = ''
            data.results.map((element) => {
                createGIFS(element);
            })
        })
}

function customGif(e) {

    const URL = 'https://tenor.googleapis.com/v2/search?';
    const key = 'AIzaSyDd8UQ5uw6sx1Fd7Irbp_6Q0_qvu9amDHY';

    fetch(`${URL}q=${e.target.value}&key=${key}`)
        .then(response => response.json())
        .then(data => {
            main.innerHTML = "";
            data.results.map(data => {
                createGIFS(data)
            });
        });
    if (e.target.value === '') {
        location.reload()
    }
}

function createGIFS(data) {

    const card = document.createElement('div');
    card.classList.add('card');

    const imgCard = document.createElement('img');
    imgCard.classList.add('img-gif');
    imgCard.src = data.media_formats.gif.url;

    card.appendChild(imgCard);
    main.appendChild(card);

}

