let text = document.getElementById('search');
let ul = document.querySelector('ul');

text.addEventListener('keyup', function () {
    var search = text.value;
ul.innerHTML=" ";
    if (search != '') {
        fetch('data.json').then(response => {
            return response.json();
        }).then(data => 
            {
                for (let i=0; i<data.length; i++){
                    if(data[i].city.includes(search)){
                        li=document.createElement('li');
                        li.textContent = data[i].city;
                        ul.appendChild(li);
                    }
                }
            }
        )
    }
}) 