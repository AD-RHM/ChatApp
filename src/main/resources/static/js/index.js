//Page && inputs
const login_page = document.querySelector('#login-page');
const chat_page = document.querySelector('#chat-page');

//Forms
const login_form = document.querySelector('#loginForm');
const message_form = document.querySelector('#messageForm');
const message = document.querySelector('#message');
const message_area = document.querySelector('#messageArea');

let stompClient=null;
let username=null;

const onConnected = options =>{
    stompClient.subscribe('/topic/public');
    stompClient.send('/app/chat.register',{},JSON.stringify({
        sender : username,
        type : 'JOIN',
    }));
}

const onDisconnected = options =>{
    stompClient.send('/app/chat.register',{},JSON.stringify({
        sender : username,
        type : 'LEAVE',
    }))
}

const onError = async e =>{
    await toast("Error", "Impossible de se connecter");
}

const toast = async(type, message, timer= 5000) => {
    await Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: timer,
        showCloseButton: true,
        timerProgressBar: true,
        showConfirmButton: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    }).fire({
        timer: timer,
        icon: type,
        html: message,
    });
}


const connect = e => {
    username = document.querySelector('#name');
    if (username) {
        login_page.classList.add('hidden');
        chat_page.classList.remove('hidden');

        const socket = new SockJS('/websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({},onConnected,onError);
    }
    e.preventDefault();
}