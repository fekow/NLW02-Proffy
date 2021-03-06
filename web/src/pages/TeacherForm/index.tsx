import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

export default function TeacherForm() {
  const history = useHistory();
  const [ scheduleItems, setScheduleItems ] = useState([
    { week_day: '', from: '', to: ''},
  ]);
  const [ name, setName ] = useState('');
  const [ avatar, setAvatar ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  const [ bio, setBio ] = useState('');

  const [ subject, setSubject ] = useState('');
  const [ cost, setCost ] = useState('');

  function handleCreateClass(e:FormEvent) {
    e.preventDefault();
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(()=> {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() => {
      alert("Erro no cadastro")
    })
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem,index) => {
      if ( index === position ) {
        return {
          ...scheduleItem,
          [field]: value
        }
      }
      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  }

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: '', from: '', to: ''}])
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher ese formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>
          <Input 
            label="Nome completo"
             name="name"
             value={name}
             onChange={(e)=> {setName(e.target.value)}}
            />
          <Input 
            label="Avatar"
            name="avatar"
            value={avatar}
            onChange={(e)=> {setAvatar(e.target.value)}}
          />
          <Input 
            label="Whatsapp"
            name="whatsapp"
            value={whatsapp}
            onChange={(e)=> {setWhatsapp(e.target.value)}}
          />
          <Textarea label="Biografia" name="bio" value={bio} onChange={(e)=> {setBio(e.target.value)}}/>
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
            value={subject}
            onChange={(e)=> {setSubject(e.target.value)}}
          />
          <Input
            label="Custo da sua hora por aula"
            name="cost"
            value={cost}
            onChange={(e)=> {setCost(e.target.value)}}
          />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>
          {scheduleItems.map((scheduleItem, index)=> {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select 
                  label="Dia da semana"
                  onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                  value={scheduleItem.week_day}
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
                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                />
              </div>
            )
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="submit">Salvar cadastro</button>
        </footer>
        </form>
      </main>
    </div>
  )
};
