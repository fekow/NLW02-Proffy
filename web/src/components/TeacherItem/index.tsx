import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface Props {
  teacherInfo: {
    subject: string;
    cost: string;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
  }
}

const TeacherItem: React.FC<Props> = ({teacherInfo}) => {
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
                R$ {teacherInfo.cost}
              </strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;
