let list = document.querySelector('#ajax');
let listMain = document.querySelector('#main');

function Change() {
    let selected = listMain.value;
    
    list.innerHTML = "";
    fetch('./data.json').then(response => {
        return response.json();
    }).then(data => {
        for (let i = 0; i < data.length; i++) {
            switch (selected) {
                case "fruits":
                    if (data[i].fruits != undefined) {
                        console.log(data[i].fruits)
                        let opt = document.createElement("option");
                        opt.text = data[i].fruits;
                        opt.value = data[i].fruits;
                        list.appendChild(opt);
                    }
                    break;

                case "fruits2":
                    if (data[i].fruits2 != undefined) {
                        let opt2 = document.createElement("option");
                        opt2.text = data[i].fruits2;
                        opt2.value = data[i].fruits2;
                        list.appendChild(opt2);
                    }
                    break;

                case "fruits3":
                    if (data[i].fruits3 != undefined) {
                        let opt3 = document.createElement("option");
                        opt3.text = data[i].fruits3;
                        opt3.value = data[i].fruits3;
                        list.appendChild(opt3);
                    }
                    break;
            }
        }

    })
}
let res = document.querySelector("#result");
function Confirm() {
    res.innerHTML = listMain.value + ": " + list.value;
}

