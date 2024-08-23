import React from 'react';
import EducationList from '../General/EducationList';

const data = [
  {
    school: 'School 1',
    link: 'https://www.school1.com',
    degree: 'Certification',
    date: 'October 2017 - October 2018',
    summary: [
      'Acomplishment 1',
      'Acomplishment 2',
    ],
  },
  {
    school: 'School 2',
    link: 'https://www.school2.com',
    degree: 'Certification',
    date: 'February 2017 - July 2017',
    summary: [
      'Acomplishment 1',
      'Acomplishment 2',
    ],
  }
];

export default function ResumeEducation() {
  return <EducationList education={data} />;
}
