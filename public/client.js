const socket = io();

//seting up the username/client name
let userName;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message_area');

do{
    userName = prompt("Please enter your name: ")
}while(!userName);

// added eventListener on enter
textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        sendMessage(e.target.value);
    }
})

// sendMessage Function
function sendMessage(msgText){
    const msg = {
        user: userName,
        message: msgText.trim()
    };

    // Append messege
    appendMessage(msg, 'outgoing');

    textarea.value = '';

    // send to Server
    socket.emit('message', msg);
}

// appending the message
function appendMessage(msg, type){
 const mainDiv = document.createElement('div');
 const className = type;
 mainDiv.classList.add(className, 'message');


 const markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
 `;

 mainDiv.innerHTML = markup;
 messageArea.append(mainDiv);
}


// Receving the message send by another client
socket.on('message', (msg) => {
 appendMessage(msg, 'incoming');
})
