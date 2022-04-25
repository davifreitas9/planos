import React from 'react';
import './home.css';
import img from "./images/img-01.png"

function Home() {

    return (
        <div className="contact1">
            <div className="container-contact1">
                <div className="contact1-pic js-tilt" data-tilt>
                    <img src={img} alt="IMG" />
                </div>

                <form className="contact1-form validate-form">
                    <span className="contact1-form-title">
                        Escreva sua carta!
                    </span>

                    <div className="wrap-input1 validate-input" data-validate="Name is required">
                        <input className="input1" type="text" name="nome" placeholder="Nome" />
                            <span className="shadow-input1"></span>
                    </div>

                    <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input className="input1" type="text" name="email" placeholder="E-mail" />
                            <span className="shadow-input1"></span>
                    </div>

                    <div className="wrap-input1 validate-input" data-validate="Subject is required">
                        <input className="input1" type="date" name="data" placeholder="" />
                            
                    </div>

                    <div className="wrap-input1 validate-input" data-validate="Message is required">
                        <textarea className="input1" name="message" placeholder="Sua futura carta"></textarea>
                        <span className="shadow-input1"></span>
                    </div>

                    <div className="container-contact1-form-btn">
                        <button className="contact1-form-btn">
                            <span>
                                ENVIE PARA O FUTURO!
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Home;