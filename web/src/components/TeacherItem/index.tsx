import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'
import api from '../../services/api';


export interface classItem {
    avatar: string ,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}
 interface ClassItemProps {
    classItem: classItem
}

const TeacherItem: React.FC<ClassItemProps> = ({classItem}) => {
    function HandlerCreateConnection () {
        api.post('connections', {
            user_id : classItem.id
        })
    }

    return (
        <article className="teacher-item">
    <header>
        <img src={classItem.avatar}
         alt={classItem.name}/>
         <div>
             <strong>{classItem.name}</strong>
             <span>{classItem.subject}</span>
         </div>
    </header>

    <p>
        {classItem.bio}
    </p>

    <footer>
         <p>
             Preço/hora
                 <strong>R$ {classItem.cost}</strong>
         </p>
         <a 
         onClick={HandlerCreateConnection}
        target="_blank"
         href={`https://wa.me/${classItem.whatsapp}`}>
             <img src={whatsappIcon} alt="whatsapp"/>
             Entrar em contato
         </a>    
     </footer> 
</article>
)
}


export default TeacherItem;