import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input'

import './styles.css';
import Select from '../../components/Select';
import api from '../../services/api';

export default function TeacherList() {
  const [ classes, setClasses ] = useState([]);
  const [ week_day, setWeek_day ] = useState('1');
  const [ subject, setSubject ] = useState('Ciencias');
  const [ time, setTime ] = useState('8:00');

  useEffect(()=>{
    api.get('/classes', {
      params: {
        week_day,
        subject,
        time
      }
    }).then(response=> setClasses(response.data))
  },[ week_day, subject, time])

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
        <Select 
            label="Matéria"
            name="subject" 
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Ciencias', label: 'Ciencias'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Física', label: 'Física'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'História', label: 'História'},
              {value: 'Português', label: 'Português'},
              {value: 'Química', label: 'Química'},
              {value: 'Educação física', label: 'Educação física'}
            ]}
            onChange={(e)=> {setSubject(e.target.value)}}
        />          
        <Select 
          label="Dia da semana"
          name="week_day" 
          options={[
            {value: '0', label: 'Domingo'},
            {value: '1', label: 'Segunda-feira'},
            {value: '2', label: 'Terça-feira'},
            {value: '3', label: 'Quarta-feira'},
            {value: '4', label: 'Quita-feira'},
            {value: '5', label: 'Sexta-feira'},
            {value: '6', label: 'Sabado'}
          ]}
          onChange={(e)=> {setWeek_day(e.target.value)}}
        />
        <Input type="time" label="Hora" name="time" onChange={(e)=> {setTime(e.target.value)}} />
        </form>
      </PageHeader>
      <main>
        {classes.map(classItem=> {
          return <TeacherItem teacherInfo={classItem} />
        })}
      </main>
    </div>
  )
}
