import { renderNavbar } from './navbar.js';
import { renderHome } from './home.js';

function navigate() {
    console.log('reda');
    const route = window.location.hash.substring(1);
    renderNavbar(); // Render Navbar first

    if (route === 'signin') 
    {
        renderSignIn();
    } 
    else if (route === 'signup') 
    {
        renderSignUp();
    } 
    else if (route === 'profile') 
    {
        renderProfile();
    } 
    else 
    {
        renderHome();
    }
}

window.addEventListener('hashchange', navigate);
navigate(); // Call it on load