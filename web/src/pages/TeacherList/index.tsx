import React from 'react';
import Input from '../../components/input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';

import './style.css';

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis">
        <form id="search-teachers">
          <Select
              name="subject"
              label="Matéria"
              options={ [
                {value: 'Artes', label: 'Artes'},
                {value: 'Português', label: 'Português'},
                {value: 'Matemática', label: 'Matemática'},
                {value: 'História', label: 'História'},
                {value: 'Geografia', label: 'Geografia'},
                {value: 'Ciências', label: 'Ciências'},
                {value: 'Inglês', label: 'Inglês'},
                {value: 'Games', label: 'Games'},
                {value: 'Desenvolvimento', label: 'Desenvolvimento'},
                {value: 'Design', label: 'Artes'},
                {value: 'Administração', label: 'Administração'},
              ] }
            />
            <Select
              name="week_day"
              label="Dia da semana"
              options={ [
                {value: '0', label: 'Domingo'},
                {value: '1', label: 'Segunda-feira'},
                {value: '2', label: 'Terça-feira'},
                {value: '3', label: 'Quarta-feira'},
                {value: '4', label: 'Quinta-feira'},
                {value: '5', label: 'Sexta-feira'},
                {value: '6', label: 'Sabado'},
                ] }
              />

          <Input type="time" name="time" label="Hora"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;