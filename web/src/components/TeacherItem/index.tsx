import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
        <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/15604086?s=460&u=7a394514aca784ce50fa771c8403bae4c220f421&v=4" alt="Fernando Binkowski" />
            <div>
              <strong>Fernando Binkowski</strong>
              <span>Química</span>
            </div>
          </header>
          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /> <br />
            Apaixonado por explidir coisas em laboratório e por mudar a vida das pessoas através de experiencias.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>
                R$ 80,00
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
