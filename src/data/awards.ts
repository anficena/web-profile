import type { Award, OnlineCourse } from '../types'

export const awards: Award[] = [
  { title: 'Machine Learning Developer', issuer: 'Dicoding Academy' },
  { title: 'Back-End Developer Expert', issuer: 'Dicoding Academy' },
  { title: 'Front-End Developer Expert', issuer: 'Dicoding Academy' },
  { title: 'React Developer', issuer: 'Dicoding Academy' },
  {
    title: 'Surat Pencatatan Ciptaan — Lombakita.com',
    issuer: 'Kementerian Hukum dan Hak Asasi Manusia',
    year: '2019',
  },
  {
    title: 'Desain Grafis',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    year: '2018',
  },
  {
    title: 'Junior Network Administrator',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    year: '2016',
  },
  {
    title: 'Lomba Kompetensi Siswa — Web Design (Tingkat Nasional)',
    issuer: 'KEMENDIKBUD',
    year: '2015',
  },
]

export const onlineCourses: OnlineCourse[] = [
  {
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    provider: 'Udemy',
    status: 'in-progress',
  },
  {
    title: 'Python Mega Course: Build 20 Real World Apps and AI Agents',
    provider: 'Udemy',
    status: 'in-progress',
  },
  {
    title: 'Vue — The Complete Guide (w/ Router, Vuex, Composition API)',
    provider: 'Academind — Udemy',
    status: 'completed',
  },
]
