import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

export default function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher ese formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="Whatsapp" name="whatsapp" />
          <Textarea label="Biografia" name="bio"/>
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">
              + Novo horário
            </button>
          </legend>
          <div className="schedule-item">
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
          <Input name="from" label="Das" type="time" />
          <Input name="to" label="Até" type="time" />
        </div>
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
};
