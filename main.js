import { renderNavbar } from './components/navbar.js';
import { renderHome } from './components/home.js';
import { rendercontent } from './components/content.js';
import { renderSignUp } from './components/signup.js';
import { renderSignIn } from './components/signin.js';
import { renderChat } from './components/chat.js';
import { renderWhite } from './components/white.js';

function navigate() {
    const route = window.location.pathname
    console.log(route);
    // renderNavbar(); // Render Navbar first

    if (route === '/') 
    {
        renderSignUp();
    } 
    else if (route === '/signin') 
    {
        renderSignIn();
    } 
    else if (route === '/signup') 
    {
        renderSignUp();
    } 
    else if (route === '/profile') 
    {
        renderNavbar();
        renderHome();
        rendercontent();
    } 
    else if (route === '/chat') 
    {
        renderChat();
    } 
    else 
    {
        renderWhite();
    }
}


window.addEventListener('hashchange', navigate);
navigate(); // Call it on load


const element = document.getElementById("solix");
const chatBox = document.getElementById('chat-box');
element.addEventListener("click", myFunction);

function myFunction() {
    chatBox.innerHTML = "";
    addMessage('Bonjour ! Comment vas-tu ?', 'other');
    addMessage('Très bien, merci. Et toi ?', 'user');
    addMessage('Je vais aussi très bien, merci.', 'other');
}

function addMessage(message, sender) 
{
  const messageElement = document.createElement('p');
  
  if (sender === 'user') 
  {
      messageElement.classList.add('message-right');
  } 
  else 
  {
      messageElement.classList.add('message-left');
  }
  
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
}


function new_message()
{
    const messageInput = document.getElementById('input-box');
    const message = messageInput.value;
    
    if (message.trim()!== '') 
    {
      addMessage(message, 'user');
      messageInput.value = '';
    }
}


function change_box()
{
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML = ""; // Remove the element from the DOM
}

