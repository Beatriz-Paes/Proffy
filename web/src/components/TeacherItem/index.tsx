import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'


const TeacherItem = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFC3TUYhHmLfg/profile-displayphoto-shrink_800_800/0?e=1607558400&v=beta&t=BB2ZQsJ2AO6p0MsRBpuJKkT8Ufrfqt1HWcUsQ9ZGz_A" alt="Pedro Pontes"/>
            <div>
              <strong>Pedro Pontes</strong>
              <span>Design gráfico</span>
            </div>
          </header>

          <p>
              Entusiasta das melhores tecnologias de design avançado, já trabalho na área há 20 anos.
              <br/> <br/>
              Criativo, dedicado e comprometido a mudar a vida das pessoas através de minhas experiências. Mais de 300.000 pessoas já passaram por essa troca de conhecimento.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 100,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;