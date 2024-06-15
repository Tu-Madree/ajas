let artic = document.querySelector('#artic');
let buttons = document.querySelector('#others');


fetch('./data.json').then(response => {
    return response.json();
}).then(data => {
    let btnCount = data.lenght / 5;
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
    
        if (counter < 5) {
            let art = document.createElement('div');
            let ind = data[i].news.indexOf('.');
            let text = data[i].news.slice(0, ind);
            art.innerHTML = text;
            art.id = 'art' + i;

            artic.appendChild(art);

            let show = document.createElement('button');
            show.id = "art" + i;
            show.textContent = "read more";
            artic.appendChild(show);
            counter++;
        }
        
    }
    let count = artic.childElementCount;
    for (let i = 0; i < count; i++) {
        if (artic.children[i].tagName == "BUTTON") (
            artic.children[i].addEventListener("click", Show)
        )
    }
    for (let i = 0; i < btnCount.toFixed(1); i++) {
        let btn = document.createElement("button");
        btn.textContent = 1;
        btn.id = 'b' + 1;
        buttons.appendChild(btn);
    }
    let count2 = buttons.childElementCount;
    for (let i = 0; i < count2; i++) {
        buttons.children[i].addEventListener("click", Page);
    }
}
)

let read=document.querySelector("#read");
function Show() {
   
    let id = this.id;
    id = id.slice(3);
    fetch('./data.json').then(response => {
        return response.json();
    }).then(data => {
        let btnCount = data.length / 5;
        for (let i = 0; i < data.length; i++) {
           if(i==id){
          
            let text = data[i].news;
            read.innerHTML = text;
           }
        }
    })
}

function Page() {
    let id = this.id;
    id = id.slice(3);
    fetch('./data.json').then(response => {
        return response.json();
    }).then(data => {
        for (let i = 0; i < data.length; i++) {
            if (counter < 5) {
                let art = document.createElement("div");
                let ind = data[i].news.indexOf('.');
                let text = data[i].news.slice(0, ind);
                art.innerHTML = text;
                artic.appendChild(art);

                let show = document.createElement('button');
                show.id = "art" + i;
                show.textContent = "read more";
                artic.appendChild(show);
                counter++;

            }
        }
        let count = artic.childElementCount;
        for (let i = 0; i < count; i++) {
            if (artic.children[i].tagName == "BUTTON") (
                artic.children[i].addEventListener("click", Show)
            )
        }
    })
}