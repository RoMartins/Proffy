import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem (){
    return (

        <article className="teacher-item">
    <header>
        <img src="https://avatars0.githubusercontent.com/u/64722377?s=460&u=e6f71cb5fdfe19f7730c15e363e642817e97db50&v=4"
         alt=""/>
         <div>
             <strong>Rodrigo Martins</strong>
             <span>Fisíca</span>
         </div>
    </header>

    <p>
        Ensusiasta das melhores tecnologias de quimica avançada.
         <br /><br /> 
        Apaixonado por explodir coisas em laboratorios e por mudar a vida das pessoas através de experiencias.
    </p>

    <footer>
         <p>
             Preço/hora
                 <strong>R$ 80,00</strong>
         </p>
         <button type="button">
             <img src={whatsappIcon} alt="whatsapp"/>
             Entrar em contato
         </button>    
     </footer> 
</article>
)
}


export default TeacherItem;