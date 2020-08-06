import React from 'react'
import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface Props {
  title: string;
  description?: string;
}

const Header: React.FC<Props> = ({ title, children, description }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
          <img src={logoImg} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>
          {title}
        </strong>
      {children}
      
      {description && <p>{description}</p>}
      </div>
    </header>
  )
}

export default Header;
