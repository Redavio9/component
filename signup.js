export function renderSignUp()
{
const signup = document.getElementById('body');
signup.innerHTML=`
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h2 class="text-center">Sign Up</h2>
                <form id="signUpForm" action="/signin" method="GET">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required>
                    </div>
                    <div class="mb-3">
                        <label for="Repeat Password" class="form-label">Repeat Password</label>
                        <input type="password" class="form-control" id="Repeat Password" required>
                    </div>
                    <div class="mb-3">
                        <label for="avatar" class="form-label">Avatar</label>
                        <input type="file" class="form-control" id="avatar" required>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-center">
                      <div class="btn-group" role="group">
                          <input type="radio" id="male" name="gender" value="Male" class="btn-check" autocomplete="off">
                          <label class="btn btn-outline-primary" for="male">Male</label>
                          <input type="radio" id="female" name="gender" value="Female" class="btn-check" autocomplete="off">
                          <label class="btn btn-outline-primary" for="female">Female</label>
                      </div>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary w-100">Sign Up</button>
                </form>
                <div class="mt-3 text-center">
                  <p>already have an account? <a href="/signin" id="showSignIn">Sign In</a></p>
                </div>
            </div>
        </div>
    </div>
  </div>
`
}
