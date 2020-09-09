document.querySelector('#button').addEventListener('click', getSomething);
let count = 0;

function getSomething() {
    let xhr = new XMLHttpRequest();

    //Open API
    xhr.open('GET','https://meowfacts.herokuapp.com/', true);

    // Get Random text 
    xhr.onload = function() {
        if(this.status == 200) {
            let facts = JSON.parse(this.responseText);
            document.querySelector('.fact').innerHTML = facts.data;
        }
    }

    xhr.send();


    //Create Counter
    count++;
    let span = document.querySelector('span');
    span.innerText = `Viewed facts ${count}`;
    
} 


