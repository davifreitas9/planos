import React, { useState } from 'react';
import './login.css';

import firebase from '../../config/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const auth = getAuth();

    function logar() {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in
                alert("Conectado!")
                // ...
            })
            .catch((error) => {
                alert("Erro!")
            });
    }

    return (
        <form>
            <div className="login-content d-flex align-items-center">
                <form className="form-signin mx-auto">
                    <div className="text-center mb-4">
                        <i class="far fa-smile-wink text-white fa-5x"></i>
                        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Acesso Administrativo</h1>
                    </div>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />


                    <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Acessar</button>
                </form>
            </div>
        </form>
    )
}
export default Login;
