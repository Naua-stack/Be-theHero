import React from 'react';


import './styles.css';
import heroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
export default function Logon(){

    return(
       
    <div className="logon-container">
    <section className="form">
    <img src={LogoImg} alt="Be the Hero" />
    <form>
        <h1>Faça seu logon</h1>
        <input placeholder="Sua ID"/>
        <button className="button" type="Submit">Entrar</button>
        <a href="/register">
            <FiLogIn size={16} cor="#e02041"/>
            
            Não tenho cadastro
        </a>
    </form>
    </section>
    <img src={heroesImg} alt="Heroes" />
    </div>
    );
}