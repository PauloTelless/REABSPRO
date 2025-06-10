import { Physiotherapist } from '../types';

export const physiotherapists: Physiotherapist[] = [
  {
    id: 'dr-silva',
    name: 'Dr. Carlos Silva',
    specialty: 'Ortopedia e Traumatologia',
    experience: '15 anos de experiência',
    rating: 4.9,
    availableTimes: ['08:00', '09:00', '10:00', '14:00', '15:00', '16:00']
  },
  {
    id: 'dra-santos',
    name: 'Dra. Maria Santos',
    specialty: 'Fisioterapia Neurológica',
    experience: '12 anos de experiência',
    rating: 4.8,
    availableTimes: ['08:30', '09:30', '10:30', '14:30', '15:30', '16:30']
  },
  {
    id: 'dr-oliveira',
    name: 'Dr. João Oliveira',
    specialty: 'Fisioterapia Esportiva',
    experience: '10 anos de experiência',
    rating: 4.7,
    availableTimes: ['09:00', '10:00', '11:00', '15:00', '16:00', '17:00']
  },
  {
    id: 'dra-costa',
    name: 'Dra. Ana Costa',
    specialty: 'Reabilitação Geral',
    experience: '18 anos de experiência',
    rating: 4.9,
    availableTimes: ['08:00', '09:00', '10:00', '13:00', '14:00', '15:00']
  }
];