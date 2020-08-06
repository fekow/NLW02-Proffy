import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input'

import './styles.css';
import Select from '../../components/Select';

export default function TeacherList() {
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
        />
        <Input type="time" label="Hora" name="time" />
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
