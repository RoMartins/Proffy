import React from 'react';


import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
    return(
        <div className="container" id="page-teacher-list">
           <PageHeader title="Estes são os proffys disponíveis.">
               <form id="search-teachers">
                 
               <Select 
                    label="Matéria" 
                    name="subject"
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
                   
                   <Input type = "time" label="Hora" name="time"/>
               </form>
           </PageHeader>

           <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
           </main>
        </div>
        )
}

export default TeacherList;