
export function renderHome() 
{

  console.log("renderHome");
  const header = document.getElementById('content');
  header.innerHTML =    `
    <div class="page-container">
    <div class="navbar-container">
        <nav class="navbar1">
            <ul class="navbar-nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#" title="Accueil">
                        <i class="bi bi-house-door"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" title="À propos">
                        <i class="bi bi-info-circle"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" title="Services">
                        <i id="hne" class="bi bi-gear-fill gear-icon"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" title="Contact">
                        <i class="bi bi-envelope"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  `;
}