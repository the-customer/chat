const users = [
    {
        nom: "Kiki🫁🩸❤️🔐",
        username:"kiki@",
        password:"passer",
        messages: [
            {text:"Slt Tata", date: "10/10/2024 10:10",user:1},
            
            {text:"Slt Naka War", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptate?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor, sit amet consectetur", date: "10/10/2024 10:10"},
            {text:"cv je bien ca fait bay", date: "10/10/2024 10:10",user:1},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Tata💪🏿",
        username:"tata",
        password:"passer",
        messages: [
            {text:"Slt Kiki", date: "10/10/2024 10:10",user:0},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Le prof est mort", date: "10/10/2024 10:10"},
            {text:"Srx?", date: "10/10/2024 10:10"},
            {text:"C'est une bonne nouvelle ca?", date: "10/10/2024 10:10"},
            {text:"oui tout le monde est content wollah", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Breukh😎👍🏾",
        username:"breukh",
        password:"passer",
        messages: [
            {text:"Slt Yaya", date: "10/10/2024 10:10"},
            {text:"Slt, tu as fais le projet js?", date: "10/10/2024 10:10"},
            {text:"OUi mais je crois que je vais avoir 0 😭", date: "10/10/2024 10:10"},
            {text:"mais traoure est foutu, tu c?", date: "10/10/2024 10:10"},
            {text:"abon pk?", date: "10/10/2024 10:10"},
            {text:"parce qu'il a eu un seul fichier 🤣", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Fatou Ndiaye ❤️🔐",
        username:"fatou",
        password:"passer",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Bernadette🩸",
        username:"bernie",
        password:"passer",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
        ]
    }
];



const list = document.querySelector(".list");
const messages = document.querySelector(".messages");
const msgOwner = document.querySelector("#msgOwner");
const messageInput = document.querySelector("textarea");
const btnSend = document.querySelector(".send");
const writting = document.querySelector(".writting");
const container = document.querySelector(".container");
const connexion = document.querySelector(".connexion");
//
const btnConnexion = document.querySelector(".btnConnexion");
const usernameInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");






let posUserActual = -1; //la position du contact qu'on choisi
let posConnectedUser = -1; //La position de celui qui s'est connecté

function printList(){
    list.innerHTML = '';
    users.forEach(function(usr,i){
        if(i !== posConnectedUser){
            list.innerHTML += `<div class="item" onclick="detailsUser(${i})">${usr.nom}</div>`;
        }
    });
}
function detailsUser(position){
    const userActual = users[position];
    printMessages(userActual);
    //
    posUserActual = position;
}

function getCurrentDate(){
    const d = new Date();
    return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
}

function isWritting(){
    writting.classList.remove('stop')
    if(messageInput.value == ""){
        writting.classList.add('stop')
    }
}

function login(username,password){
    for (let i = 0; i < users.length; i++) {
        if(users[i].username === username && users[i].password===password){
            return i;
        }
    }
    return -1;

    // let user= users.filter(u=>u.username===username && u.password===password)
}

function printMessages(user){
    msgOwner.innerHTML = `Messages de ${user.nom}`;
    messages.innerHTML = ``;
    user.messages.forEach(function(msg){
        messages.innerHTML += `
        <div class="message">
            <div class="text">
                ${msg.text}
            </div>
            <div class="date"><span>${msg.date}</span></div>
        </div>
        `
    });
}


//
messageInput.addEventListener('input',isWritting);
//
btnConnexion.addEventListener('click',function(){
    const uname = usernameInput.value.trim()
    const pass = passwordInput.value.trim()
    posConnectedUser = login(uname,pass);
    if(posConnectedUser == -1){
        return;
    }
    container.classList.remove('hide');
    connexion.classList.add('hide');
    printList();
})
//
btnSend.addEventListener('click',function(){
    const newMessage = messageInput.value;
    // if(newMessage.trim() == ""){
    if(!newMessage.trim() || posUserActual == -1){
        return;
    }

    users[posUserActual].messages.push({
        text: newMessage, 
        date: getCurrentDate()
    })
    //Actualiser les message de l'utilisateur dans le DOM
    detailsUser(posUserActual);
    //Vider le champs de saisie:
    messageInput.value = "";
    //Enveler : writting
    isWritting();
})


//
window.onload = function(){
    container.classList.add('hide');
}
