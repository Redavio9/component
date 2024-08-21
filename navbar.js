


export function renderNavbar() {
  const header = document.getElementById('header');
  header.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Ping Pong App</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" href="#logout">
                          <i class="fas fa-sign-out-alt" style="color: #dc3545;"></i> Logout
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
  `;
}