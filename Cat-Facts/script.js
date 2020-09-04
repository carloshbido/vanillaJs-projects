document.querySelector('#button').addEventListener('click', getSomething);

function getSomething() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://meowfacts.herokuapp.com/', true);

    xhr.onload = function() {
        if(this.status == 200) {

            let facts = JSON.parse(this.responseText);
            document.querySelector('.fact').innerHTML = facts.data;
        }
    }

    xhr.send();

} 

