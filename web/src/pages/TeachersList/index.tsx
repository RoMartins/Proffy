import React, { useState, FormEvent } from 'react';


import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem, {classItem} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';



 function TeacherList() {

     const [classes, setClasses] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    async function searchTeachers(e:FormEvent) {
        e.preventDefault();

      const response = await api.get('classes',{
            params: {
                subject,
                week_day,
                time
            }
        })
       setClasses(response.data)
       console.log(response)
        
    }

    return(
        <div className="container" id="page-teacher-list">
           <PageHeader title="Estes são os proffys disponíveis.">
               <form id="search-teachers" onSubmit={searchTeachers}>
                 
               <Select 
                    label="Matéria" 
                    name="subject"
                    value={subject}
                    onChange={(e) => {setSubject(e.target.value)}}
                    options={[
                        {value:'Artes', label: 'Artes'},
                        {value:'Biologia', label: 'Biologia'},
                        {value:'Ciências', label: 'Ciências'},
                        {value:'Química', label: 'Química'},
                        {value:'Matemática', label: 'Matemática'},
                        {value:'Física', label: 'Física'},
                        {value:'Português', label: 'Português'}
                    ]}    
                   />

                <Select 
                     label="Dia da semana"
                    name="week_day"
                    value={week_day}
                    onChange={(e) => {setWeek_day(e.target.value)}}
                    options={[
                        {value:'0', label: 'Domingo'},
                        {value:'1', label: 'Segunda-feira'},
                        {value:'2', label: 'Terça-feira'},
                        {value:'3', label: 'Quarta-feira'},
                        {value:'4', label: 'Quinta-feira'},
                        {value:'5', label: 'Sexta-feira'},
                        {value:'6', label: 'Sábado'}
                    ]}    
                   />
                   
                   <Input 
                    type = "time" 
                    label="Hora" 
                    name="time" 
                    value={time}
                    onChange={(e) => {setTime(e.target.value)}}/>

                   <button type="submit">Buscar</button>
               </form>
           </PageHeader>

           <main>
               {classes.map( (classItem : classItem) => {
                 return  <TeacherItem  key={classItem.id} classItem={classItem}/>
                   
               })}
               
           </main>
        </div>
        )
}

export default TeacherList;