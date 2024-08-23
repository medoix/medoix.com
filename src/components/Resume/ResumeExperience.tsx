import React from 'react';
import ExperienceList from '../General/ExperienceList';

const data = [
  {
    company: 'KEEBD',
    title: 'Founder & CEO',
    link: 'https://keebd.com',
    daterange: 'June 2021 - Present',
    summary: [
      'Acomplishment 1',
      'Acomplishment 2',
    ],
  },
  {
    company: 'SafetyCulture',
    title: 'Group Engineering Manager Cybersecurity',
    link: 'https://safetyculture.com',
    daterange: 'September 2019 - Present',
    summary: [
      'Acomplishment 1',
      'Acomplishment 2',
    ],
  }
];

export default function ResumeExperience() {
  return <ExperienceList experience={data} />;
}
