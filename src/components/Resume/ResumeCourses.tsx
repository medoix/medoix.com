import React from 'react';
import CoursesList from '../General/CoursesList';

const data = [
  {
    title: 'Course Title',
    date: '2022 August',
    link: 'https://coursecertificate.com',
    issuer: 'Company Issued',
  }
];

export default function ResumeCourses() {
  return <CoursesList courses={data} />;
}
