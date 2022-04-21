import React from 'react';
import './login.css';

function Login() {
    return (
        <form>
            <div className="login-content d-flex align-items-center">
                <form className="form-signin mx-auto">
                    <div className="text-center mb-4">
                        <i class="far fa-smile-wink text-white fa-5x"></i>
                        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Acesso Administrativo</h1>
                    </div>

                    <input type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                    <input type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />


                    <button class="btn btn-lg btn-block btn-login" type="button">Acessar</button>
                </form>
            </div>
        </form>
    )
}
export default Login;
