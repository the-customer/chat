const users = [
    {
        nom: "Kiki🫁🩸❤️🔐",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Naka War", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptate?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor, sit amet consectetur", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
            {text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut neque nihil, voluptates ut soluta doloremque quisquam mollitia distinctio, voluptatem sint aliquid odit. Architecto similique ipsa, suscipit voluptatibus maiores magnam?", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Tata💪🏿",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Le prof est mort", date: "10/10/2024 10:10"},
            {text:"Srx?", date: "10/10/2024 10:10"},
            {text:"C'est une bonne nouvelle ca?", date: "10/10/2024 10:10"},
            {text:"oui tout le monde est content wollah", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Breukh😎👍🏾",
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
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Bernadette🩸",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
        ]
    }
];


const list = document.querySelector(".list");
const messages = document.querySelector(".messages");

function printList(){
    list.innerHTML = '';
    users.forEach(function(usr,i){
        list.innerHTML += `<div class="item" onclick="detailsUser(${i})">${usr.nom}</div>`;
    });
}
function detailsUser(position){
    const userActual = users[position];
    printMessages(userActual);
}

function printMessages(user){
    messages.innerHTML = `<h2>Messages de Toto</h2>`;
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
printList();