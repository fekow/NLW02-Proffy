import React, { useMemo } from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import { formatPrice } from '../../util/format'

import './styles.css'
import api from '../../services/api'

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface Props {
  teacherInfo: Teacher;
}

const TeacherItem: React.FC<Props> = ({teacherInfo}) => {
  const cost = useMemo(()=>{
    return formatPrice(teacherInfo.cost)
  },[teacherInfo.cost])

  function createConnection() {
    api.post('connections', { user_id: teacherInfo.id} )
  }

  return (
        <article className="teacher-item">
          <header>
            <img src={teacherInfo.avatar} alt={teacherInfo.name} />
            <div>
              <strong>{teacherInfo.name}</strong>
              <span>{teacherInfo.subject}</span>
            </div>
          </header>
          <p>
            {teacherInfo.bio}
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>
                {cost}
              </strong>
            </p>
            <a href={`https://wa.me/${teacherInfo.whatsapp}`} onClick={createConnection} >
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </a>
          </footer>
        </article>
  )
}

export default TeacherItem;
