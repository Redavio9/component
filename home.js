
export function renderHome() 
{

  console.log("renderHome");
  const header = document.getElementById('content');
  header.innerHTML =    `
    <div id="navbar-container" class="d-flex align-items-center align-items-center" style="height: 100vh;">
        <nav class="navbar1">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="home" title="Accueil">
                        <i class="fa-duotone fa-solid fa-house"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="profile" title="À propos">
                        <i class="fa-solid fa-user"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="setting" title="Services">
                        <i id="hne" class="bi bi-gear-fill gear-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="chat" title="Contact">
                        <i class="fa-solid fa-message"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  `;
}